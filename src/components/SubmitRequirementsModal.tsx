import { useState, FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import Modal from './Modal'

interface SubmitRequirementsModalProps {
  isOpen: boolean
  onClose: () => void
}

const projectTypes = ['Web Application', 'Mobile Application', 'WordPress Plugin', 'Custom Software / Tool']
const budgetRanges = ['Under $1,000', '$1,000 – $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000+']
const timelines = ['Less than 1 month', '1 – 3 months', '3 – 6 months', '6+ months', 'Flexible']

const inputClass =
  'w-full px-3.5 py-3 rounded-lg bg-portfolio-bg border border-portfolio-border text-portfolio-text font-sans text-sm focus:outline-none focus:border-portfolio-accent focus:ring-1 focus:ring-portfolio-accent transition-colors'
const labelClass = 'font-mono text-xs font-semibold text-portfolio-text tracking-wide'
const selectClass = `${inputClass} appearance-none cursor-pointer`

export default function SubmitRequirementsModal({ isOpen, onClose }: SubmitRequirementsModalProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  })

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    const formId = import.meta.env.VITE_FORMSPREE_ID
    if (!formId) {
      setStatus('error')
      return
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setStatus('idle')
      setForm({ name: '', email: '', projectType: '', budget: '', timeline: '', description: '' })
    }, 200)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Submit Project Requirements" maxWidth="max-w-2xl">
      {status === 'success' ? (
        <div className="flex flex-col items-center gap-4 p-10">
          <CheckCircle size={48} className="text-green-500" />
          <h3 className="font-mono text-lg font-bold text-portfolio-text">Thank you!</h3>
          <p className="font-sans text-sm text-portfolio-text-secondary text-center">
            Your project requirements have been submitted. I'll get back to you within 24 hours with a proposal.
          </p>
          <button
            onClick={handleClose}
            className="mt-2 px-6 py-3 rounded-lg bg-portfolio-accent font-mono text-sm font-semibold text-portfolio-accent-fg hover:opacity-90 transition-opacity"
          >
            Close
          </button>
        </div>
      ) : status === 'error' ? (
        <div className="flex flex-col items-center gap-4 p-10">
          <AlertCircle size={48} className="text-red-500" />
          <h3 className="font-mono text-lg font-bold text-portfolio-text">Something went wrong</h3>
          <p className="font-sans text-sm text-portfolio-text-secondary text-center">
            Please try again or email me directly at akmelias11@gmail.com
          </p>
          <div className="flex gap-3 mt-2">
            <button
              onClick={handleClose}
              className="px-6 py-3 rounded-lg bg-portfolio-surface-alt border border-portfolio-border font-mono text-sm font-semibold text-portfolio-text-secondary"
            >
              Close
            </button>
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-3 rounded-lg bg-portfolio-accent font-mono text-sm font-semibold text-portfolio-accent-fg hover:opacity-90 transition-opacity"
            >
              Try Again
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Project Type</label>
                <select
                  required
                  value={form.projectType}
                  onChange={(e) => update('projectType', e.target.value)}
                  className={selectClass}
                >
                  <option value="" disabled>Select type...</option>
                  {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Budget Range</label>
                <select
                  required
                  value={form.budget}
                  onChange={(e) => update('budget', e.target.value)}
                  className={selectClass}
                >
                  <option value="" disabled>Select budget...</option>
                  {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Timeline</label>
              <select
                required
                value={form.timeline}
                onChange={(e) => update('timeline', e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>Select timeline...</option>
                {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Project Description</label>
              <textarea
                required
                rows={4}
                placeholder="Describe your project, goals, and any specific requirements..."
                value={form.description}
                onChange={(e) => update('description', e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 px-6 py-4 border-t border-portfolio-border">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-3 rounded-lg bg-portfolio-surface-alt border border-portfolio-border font-mono text-sm font-semibold text-portfolio-text-secondary hover:border-portfolio-accent transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-portfolio-accent font-mono text-sm font-semibold text-portfolio-accent-fg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Send size={14} />
              {status === 'submitting' ? 'Submitting...' : 'Submit Requirements'}
            </button>
          </div>
        </form>
      )}
    </Modal>
  )
}
