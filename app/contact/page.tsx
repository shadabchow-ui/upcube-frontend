'use client'

import { useMemo, useState } from 'react'

type FormState = {
  firstName: string
  lastName: string
  email: string
  company: string
  phone: string
  subject: string
  message: string
}

function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={[
        'rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs font-medium text-white/70">
      {children}
    </label>
  )
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        'mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white',
        'placeholder:text-white/30',
        'outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10',
        props.className ?? '',
      ].join(' ')}
    />
  )
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={[
        'mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white',
        'outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10',
        props.className ?? '',
      ].join(' ')}
    />
  )
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={[
        'mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white',
        'placeholder:text-white/30',
        'outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10',
        props.className ?? '',
      ].join(' ')}
    />
  )
}

function Button({
  children,
  disabled,
  type = 'button',
  onClick,
}: {
  children: React.ReactNode
  disabled?: boolean
  type?: 'button' | 'submit'
  onClick?: () => void
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium',
        'border border-white/10 bg-white text-black',
        'hover:bg-white/90 transition',
        disabled ? 'opacity-60 cursor-not-allowed' : '',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: 'General question',
    message: '',
  })

  const [status, setStatus] = useState<
    | { type: 'idle' }
    | { type: 'sending' }
    | { type: 'success'; message: string }
    | { type: 'error'; message: string }
  >({ type: 'idle' })

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.lastName.trim()) e.lastName = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!isValidEmail(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }, [form])

  const canSubmit = Object.keys(errors).length === 0 && status.type !== 'sending'

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return

    setStatus({ type: 'sending' })

    // OPTION A (no backend): open an email draft
    // You can swap this to POST to /api/contact later.
    try {
      const to = 'upcubeceo@gmail.com' // change if you want
      const subject = `[Upcube Contact] ${form.subject}`
      const body = [
        `Name: ${form.firstName} ${form.lastName}`,
        `Email: ${form.email}`,
        form.company ? `Company: ${form.company}` : '',
        form.phone ? `Phone: ${form.phone}` : '',
        '',
        'Message:',
        form.message,
      ]
        .filter(Boolean)
        .join('\n')

      const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`

      window.location.href = mailto

      setStatus({
        type: 'success',
        message: 'Opening your email app…',
      })
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      })
    }
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-14">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-white">Contact us</h1>
        <p className="mt-2 text-sm text-white/60">
          Tell us what you’re building. We’ll route you to the right team.
        </p>
      </div>

      <Card className="mt-8 p-6">
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label>First name *</Label>
              <Input
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                placeholder="Jane"
                autoComplete="given-name"
              />
              {errors.firstName ? (
                <div className="mt-1 text-xs text-red-300">{errors.firstName}</div>
              ) : null}
            </div>

            <div>
              <Label>Last name *</Label>
              <Input
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                placeholder="Doe"
                autoComplete="family-name"
              />
              {errors.lastName ? (
                <div className="mt-1 text-xs text-red-300">{errors.lastName}</div>
              ) : null}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label>Work email *</Label>
              <Input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@company.com"
                inputMode="email"
                autoComplete="email"
              />
              {errors.email ? (
                <div className="mt-1 text-xs text-red-300">{errors.email}</div>
              ) : null}
            </div>

            <div>
              <Label>Company</Label>
              <Input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Acme Inc."
                autoComplete="organization"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label>Phone number</Label>
              <Input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+1 555 123 4567"
                inputMode="tel"
                autoComplete="tel"
              />
            </div>

            <div>
              <Label>Subject</Label>
              <Select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              >
                <option>General question</option>
                <option>Sales</option>
                <option>Support</option>
                <option>Partnerships</option>
                <option>Press</option>
                <option>Security</option>
              </Select>
            </div>
          </div>

          <div>
            <Label>Message *</Label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us about your use case, timeline, and what you need help with."
              rows={6}
            />
            {errors.message ? (
              <div className="mt-1 text-xs text-red-300">{errors.message}</div>
            ) : null}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-white/50">
              By submitting, you agree we can contact you about this request.
            </div>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                onClick={() =>
                  setForm({
                    firstName: '',
                    lastName: '',
                    email: '',
                    company: '',
                    phone: '',
                    subject: 'General question',
                    message: '',
                  })
                }
                disabled={status.type === 'sending'}
              >
                Clear
              </Button>

              <Button type="submit" disabled={!canSubmit}>
                {status.type === 'sending' ? 'Sending…' : 'Submit'}
              </Button>
            </div>
          </div>

          {status.type === 'success' ? (
            <div className="text-sm text-white/70">{status.message}</div>
          ) : null}
          {status.type === 'error' ? (
            <div className="text-sm text-red-300">{status.message}</div>
          ) : null}
        </form>
      </Card>

      <div className="mt-6 text-center text-xs text-white/50">
        Prefer email?{' '}
        <a className="text-white/70 hover:text-white" href="mailto:upcubeceo@gmail.com">
          upcubeceo@gmail.com
        </a>
      </div>
    </main>
  )
}
