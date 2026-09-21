import {useState} from 'react'
import {Button, Card, Container, Flex, Stack, Text} from '@sanity/ui'
import {DownloadIcon} from '@sanity/icons'
import {useClient} from 'sanity'

type Application = {
  reference?: string
  status?: string
  submittedAt?: string
  organisation?: Record<string, unknown>
  operations?: Record<string, unknown>
  membership?: Record<string, unknown>
  declaration?: Record<string, unknown>
}

const APPLICATIONS_QUERY = `*[_type == "membershipApplication"] | order(submittedAt desc){
  reference, status, submittedAt, organisation, operations, membership, declaration
}`

const columns: Array<[string, (application: Application) => unknown]> = [
  ['Reference', (item) => item.reference],
  ['Status', (item) => item.status],
  ['Submitted at', (item) => item.submittedAt],
  ['Company name', (item) => item.organisation?.companyName],
  ['Registration number', (item) => item.organisation?.registrationNumber],
  ['TIN', (item) => item.organisation?.tin],
  ['Incorporation date', (item) => item.organisation?.incorporationDate],
  ['NEMA number', (item) => item.organisation?.nemaNumber],
  ['Address', (item) => item.organisation?.street],
  ['District', (item) => item.organisation?.district],
  ['P.O. Box', (item) => item.organisation?.poBox],
  ['Organisation email', (item) => item.organisation?.organisationEmail],
  ['Website', (item) => item.organisation?.website],
  ['Business activities', (item) => item.organisation?.description],
  ['Primary category', (item) => item.operations?.category],
  ['Annual plastic volume', (item) => item.operations?.annualTonnage],
  ['Plastic types handled', (item) => (item.operations?.plasticTypes as string[] | undefined)?.join('; ')],
  ['Contact name', (item) => item.operations?.contactName],
  ['Contact title', (item) => item.operations?.contactTitle],
  ['Contact phone', (item) => item.operations?.contactPhone],
  ['Contact email', (item) => item.operations?.contactEmail],
  ['Membership tier', (item) => item.membership?.tier],
  ['Payment method', (item) => item.membership?.paymentMethod],
  ['Confirmed accuracy', (item) => item.declaration?.confirmAccuracy ? 'Yes' : 'No'],
  ['Accepted rules', (item) => item.declaration?.confirmRules ? 'Yes' : 'No'],
  ['Understands renewal', (item) => item.declaration?.confirmRenewal ? 'Yes' : 'No'],
  ['Signatory name', (item) => item.declaration?.signatoryName],
  ['Signatory title', (item) => item.declaration?.signatoryTitle],
  ['Application date', (item) => item.declaration?.applicationDate],
  ['Capacity', (item) => item.declaration?.capacity],
]

function escapeCsv(value: unknown) {
  const text = String(value ?? '')
  return `"${text.replaceAll('"', '""')}"`
}

export default function ApplicationExportTool() {
  const client = useClient({apiVersion: '2025-02-19'})
  const [isExporting, setIsExporting] = useState(false)
  const [message, setMessage] = useState('')

  async function downloadApplications() {
    setIsExporting(true)
    setMessage('')

    try {
      const applications = await client.fetch<Application[]>(APPLICATIONS_QUERY)
      const csv = [
        columns.map(([name]) => escapeCsv(name)).join(','),
        ...applications.map((application) => columns.map(([, getValue]) => escapeCsv(getValue(application))).join(',')),
      ].join('\r\n')
      const blob = new Blob(['\ufeff', csv], {type: 'text/csv;charset=utf-8'})
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = `gasp-membership-applications-${new Date().toISOString().slice(0, 10)}.csv`
      link.click()
      URL.revokeObjectURL(link.href)
      setMessage(`${applications.length} application${applications.length === 1 ? '' : 's'} downloaded.`)
    } catch (error) {
      console.error('Application export failed', error)
      setMessage('The download could not be created. Please try again.')
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <Container width={2} padding={5}>
      <Card padding={5} radius={3} shadow={1}>
        <Stack space={5}>
          <Stack space={3}>
            <Text size={4} weight="semibold">Download membership applications</Text>
            <Text muted size={2}>Export all submitted membership applications as a CSV file for Excel or Google Sheets.</Text>
          </Stack>
          <Flex align="center" gap={3}>
            <Button
              fontSize={2}
              icon={DownloadIcon}
              loading={isExporting}
              onClick={downloadApplications}
              text="Download CSV"
              tone="primary"
            />
            {message && <Text size={2}>{message}</Text>}
          </Flex>
        </Stack>
      </Card>
    </Container>
  )
}
