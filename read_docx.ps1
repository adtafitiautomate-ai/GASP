Copy-Item '.\Contact Info.docx' '.\Contact Info.zip'
Expand-Archive -Path '.\Contact Info.zip' -DestinationPath .\temp_docx -Force
$xml = Get-Content .\temp_docx\word\document.xml -Raw
$xml = $xml -replace '<[^>]+>', ' '
$xml = $xml -replace '\s+', ' '
Write-Output $xml
Remove-Item -Recurse -Force .\temp_docx
Remove-Item '.\Contact Info.zip'
