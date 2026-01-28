import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dogName: '',
    dogAge: '',
    program: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl lg:max-w-5xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Schedule a Consultation</h1>
          <p className="text-lg lg:text-xl text-slate-300 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your training goals? Contact us to schedule a consultation
            and take the first step toward a better-behaved dog.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl lg:max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 lg:gap-20">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Phone</h3>
                  <p className="text-slate-600">(555) 123-4567</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
                  <p className="text-slate-600">info@leashandlead.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Location</h3>
                  <p className="text-slate-600">
                    Serving the greater metro area<br />
                    Training facility address provided<br />
                    upon booking confirmation
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Hours</h3>
                  <p className="text-slate-600">
                    Monday – Friday: 8am – 6pm<br />
                    Saturday: 9am – 4pm<br />
                    Sunday: Closed
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-3">Response Time</h3>
                  <p className="text-sm text-slate-600">
                    We respond to all inquiries within 24 hours during business days.
                    For urgent matters, please call directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-8">Send an Inquiry</h2>

              {submitted ? (
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-10 text-center shadow-sm">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Inquiry Received</h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. We'll review your information and
                    contact you within 24 hours to discuss next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name <span className="text-slate-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent hover:border-slate-400 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address <span className="text-slate-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent hover:border-slate-400 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent hover:border-slate-400 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="program" className="block text-sm font-medium text-slate-700 mb-2">
                        Program Interest
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent hover:border-slate-400 transition-colors duration-200 bg-white"
                      >
                        <option value="">Select a program</option>
                        <option value="1-week">1 Week Foundation Program</option>
                        <option value="2-week">2 Week Core Program</option>
                        <option value="3-week">3 Week Comprehensive Program</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="dogName" className="block text-sm font-medium text-slate-700 mb-2">
                        Dog's Name
                      </label>
                      <input
                        type="text"
                        id="dogName"
                        name="dogName"
                        value={formData.dogName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent hover:border-slate-400 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="dogAge" className="block text-sm font-medium text-slate-700 mb-2">
                        Dog's Age & Breed
                      </label>
                      <input
                        type="text"
                        id="dogAge"
                        name="dogAge"
                        placeholder="e.g., 2 years, Labrador"
                        value={formData.dogAge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent hover:border-slate-400 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Tell us about your training goals <span className="text-slate-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your dog's current behavior, any specific challenges, and what you hope to achieve through training."
                      className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent hover:border-slate-400 transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-slate-800 text-white px-8 py-3 lg:px-10 lg:py-4 lg:text-lg rounded font-semibold shadow-lg hover:bg-slate-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
          <p className="text-slate-600 lg:text-lg">
            Prefer to speak directly? Call us at{' '}
            <span className="font-semibold text-slate-800">(555) 123-4567</span>{' '}
            during business hours to schedule your consultation.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contact
