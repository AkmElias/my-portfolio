import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  maxWidth?: string
}

export default function Modal({ isOpen, onClose, title, children, maxWidth = 'max-w-lg' }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className={`${maxWidth} w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-portfolio-surface border border-portfolio-border shadow-2xl`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-portfolio-border">
          <h2 className="font-mono text-lg font-bold text-portfolio-text">{title}</h2>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-portfolio-surface-alt border border-portfolio-border hover:border-portfolio-accent transition-colors"
            aria-label="Close"
          >
            <X size={18} className="text-portfolio-text-muted" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  )
}
