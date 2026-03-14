import { useEffect, useRef } from 'react'
import Modal from './Modal'

interface BookCallModalProps {
  isOpen: boolean
  onClose: () => void
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string
        parentElement: HTMLElement
        prefill?: Record<string, string>
        utm?: Record<string, string>
      }) => void
    }
  }
}

const CALENDLY_URL =
  import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/YOUR_USERNAME/30min'

function getCalendlyUrl() {
  const isDark = document.documentElement.classList.contains('dark')
  const params = isDark
    ? 'background_color=1e293b&text_color=ffffff&primary_color=ff8400'
    : 'background_color=ffffff&text_color=111111&primary_color=ff8400'
  return `${CALENDLY_URL}?${params}&hide_gdpr_banner=1`
}

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'
const CSS_SRC = 'https://assets.calendly.com/assets/external/widget.css'

function loadCalendlyAssets(): Promise<void> {
  return new Promise((resolve) => {
    // Load CSS if not already loaded
    if (!document.querySelector(`link[href="${CSS_SRC}"]`)) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = CSS_SRC
      document.head.appendChild(link)
    }

    // Load script if not already loaded
    if (window.Calendly) {
      resolve()
    } else {
      const script = document.createElement('script')
      script.src = SCRIPT_SRC
      script.async = true
      script.onload = () => resolve()
      document.head.appendChild(script)
    }
  })
}

export default function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen || !containerRef.current) return

    const container = containerRef.current

    loadCalendlyAssets().then(() => {
      if (window.Calendly && container) {
        window.Calendly.initInlineWidget({
          url: getCalendlyUrl(),
          parentElement: container,
        })
      }
    })

    return () => {
      container.innerHTML = ''
    }
  }, [isOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book a Call" maxWidth="max-w-3xl">
      <div ref={containerRef} style={{ minWidth: '320px', height: '700px' }} className="w-full" />
    </Modal>
  )
}
