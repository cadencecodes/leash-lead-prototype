import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 lg:py-32 xl:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl lg:max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Professional Dog Training for Lasting Results
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 lg:mb-12 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            At Leash & Lead, we build strong foundations through clear communication,
            consistent methods, and a deep understanding of canine behavior.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-3 lg:px-10 lg:py-4 lg:text-lg rounded font-semibold shadow-lg hover:bg-slate-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/training"
              className="border border-slate-400 text-white px-8 py-3 lg:px-10 lg:py-4 lg:text-lg rounded font-semibold hover:bg-slate-800 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-16 text-center">
            Our Training Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm hover:shadow-md hover:bg-slate-50 transition-all duration-200">
                <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-slate-800 mb-3">Clarity First</h3>
              <p className="text-slate-600">
                Dogs thrive when expectations are clear. We teach you to communicate
                in ways your dog instinctively understands.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm hover:shadow-md hover:bg-slate-50 transition-all duration-200">
                <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-slate-800 mb-3">Consistency Matters</h3>
              <p className="text-slate-600">
                Reliable routines and responses create confidence. We help you establish
                patterns that reinforce good behavior daily.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm hover:shadow-md hover:bg-slate-50 transition-all duration-200">
                <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-slate-800 mb-3">Partnership Approach</h3>
              <p className="text-slate-600">
                Training is about the relationship between you and your dog. We equip
                owners with skills that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-slate-600 mb-10 text-lg lg:text-xl leading-relaxed">
            Every dog is different. Schedule a consultation to discuss your goals
            and create a training plan tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-slate-800 text-white px-8 py-3 lg:px-10 lg:py-4 lg:text-lg rounded font-semibold shadow-lg hover:bg-slate-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
