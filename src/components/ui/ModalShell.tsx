import type { ReactNode } from 'react'
import { useModalBehavior } from '../../hooks/useModalBehavior'

interface ModalShellProps {
  children: ReactNode
  labelledBy: string
  onClose: () => void
  maxWidth?: string
}

export function ModalShell({ children, labelledBy, onClose, maxWidth = 'max-w-2xl' }: ModalShellProps) {
  useModalBehavior(onClose)

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-ink/60 p-3 backdrop-blur-[2px] sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className={`max-h-[92dvh] w-full overflow-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-8 ${maxWidth}`}>
        {children}
      </div>
    </div>
  )
}
