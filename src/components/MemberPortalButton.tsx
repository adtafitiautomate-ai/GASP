import { X } from 'lucide-react';
import { useState } from 'react';

type MemberPortalButtonProps = {
  className: string;
  children?: React.ReactNode;
};

export default function MemberPortalButton({ className, children = 'Become a Member' }: MemberPortalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className}>
        {children}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="member-portal-title"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl border border-white/14 bg-primary-container p-8 text-center text-white shadow-[0_28px_90px_rgba(0,0,0,0.38)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close member portal notice"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-on-secondary">
              <span className="font-headline-md text-2xl">G</span>
            </div>
            <h2 id="member-portal-title" className="font-headline-xl text-3xl text-white">
              Member Portal Coming Soon
            </h2>
            <p className="mx-auto mt-4 max-w-sm font-body-md text-on-primary-container">
              We are preparing a dedicated portal for GASP members. Please check back soon for access.
            </p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-8 rounded-full bg-white px-8 py-4 font-label-sm uppercase text-primary transition-all hover:bg-primary-fixed"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
