import * as React from 'react'
import { DialogContent, DialogOverlay } from '@reach/dialog'
import '@reach/dialog/styles.css'
import clsx from 'clsx'

interface DownloadModalProps {
  isModalOpen: boolean
  closeModal: () => void
  children: React.ReactNode
  label: string
  width: string
  className?: string
  allowDismiss?: boolean
  hideOverlay?: boolean
}

export const DownloadModal: React.FunctionComponent<DownloadModalProps> = ({
  isModalOpen,
  children,
  label,
  width = '500px',
  className = '',
  closeModal,
  allowDismiss = false,
  hideOverlay = false,
}) => {
  return (
    <DialogOverlay
      isOpen={isModalOpen}
      onDismiss={allowDismiss ? closeModal : () => null}
      style={{
        backgroundColor: hideOverlay ? 'transparent' : 'hsla(0, 0%, 0%, 0.38)',
        // zIndex: 3,
      }}
    >
      <div className="w-full flex-shrink-0">
        <DialogContent
          aria-label={label}
          /**
           * Reach UI doesn't work very well with Styled JSX or Tailwind.
           * Override defaults inline and style containing div instead.
           */
          style={{
            width: '90%',
            padding: '0',
            position: 'relative',
            zIndex: 4,
            maxWidth: width,
            background: 'transparent',
          }}
        >
          <div className={clsx('overflow-auto rounded-[10px] bg-[#C3EFFF] p-[34px]', className)}>
            <div>{children}</div>
          </div>
        </DialogContent>
      </div>
    </DialogOverlay>
  )
}
