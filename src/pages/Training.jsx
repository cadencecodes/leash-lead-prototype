import { useState } from 'react'
import { Link } from 'react-router-dom'

function Training() {
  const [activeFilter, setActiveFilter] = useState('All')

  const programs = [
    {
      duration: '1 Week',
      level: 'Puppy',
      title: 'Foundation Program',
      description: 'An intensive introduction to structured training, ideal for dogs who need a reset or owners seeking a strong starting point.',
      goals: [
        'Establish clear communication patterns',
        'Introduce leash manners and impulse control',
        'Build focus and engagement with handler',
        'Address minor behavioral concerns',
      ],
      structure: 'Your dog stays at our facility for 7 days of focused training. Sessions occur multiple times daily, with structured rest periods. We work on foundational obedience and begin addressing specific behavioral goals.',
      outcomes: 'Dogs return with improved focus, basic leash skills, and a clear understanding of expectations. Owners receive a detailed handoff session covering all commands and techniques introduced.',
    },
    {
      duration: '2 Weeks',
      level: 'Basic',
      title: 'Core Program',
      description: 'Our most popular program, providing the time needed to build reliable skills and address moderate behavioral challenges.',
      goals: [
        'Develop consistent obedience responses',
        'Establish reliable leash walking',
        'Address reactivity, anxiety, or excitability',
        'Build duration and distance on commands',
      ],
      structure: 'Over 14 days, your dog receives comprehensive training with increasing complexity. We introduce distractions gradually, proof commands in varied environments, and dedicate time to specific behavioral modification as needed.',
      outcomes: 'Dogs demonstrate reliable responses to core commands in multiple environments. Behavioral issues show measurable improvement. Owners receive an extended handoff with practice sessions to ensure skill transfer.',
    },
    {
      duration: '3 Weeks',
      level: 'Advanced',
      title: 'Comprehensive Program',
      description: 'Our most thorough program, designed for dogs with significant behavioral challenges or owners who want the highest level of reliability.',
      goals: [
        'Achieve advanced obedience with distractions',
        'Address complex behavioral issues thoroughly',
        'Build off-leash reliability (where appropriate)',
        'Establish lasting behavioral change',
      ],
      structure: 'Three weeks allows for deep behavioral work and advanced skill development. We address root causes of behavioral issues, not just symptoms. Training progresses to challenging real-world scenarios with careful proofing at each stage.',
      outcomes: 'Dogs return with polished obedience, significant behavioral improvement, and the ability to maintain composure in demanding situations. Owners receive comprehensive handoff training plus follow-up support.',
    },
  ]

  const filteredPrograms = programs.filter(
    p => activeFilter === 'All' || p.level === activeFilter
  )

  return (
    <div>
      {/* Header */}
      <section
        className="relative bg-slate-900 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-cover bg-top min-h-[50vh] lg:min-h-[60vh] flex items-center"
        style={{ backgroundImage: "url('/images/training-program.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="relative max-w-4xl lg:max-w-5xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Board & Train Programs</h1>
          <p className="text-lg lg:text-xl text-slate-300 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Immersive training programs that create real, lasting change. Your dog
            lives and trains with us, returning home with new skills and better behavior.
          </p>
        </div>
      </section>

      {/* Why Board & Train */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8 text-center">
            Why Board & Train?
          </h2>
          <div className="max-w-3xl lg:max-w-4xl mx-auto">
            <p className="text-slate-600 mb-5 leading-relaxed">
              Board and train programs offer something that weekly lessons cannot: immersion.
              When your dog stays with us, training becomes their full-time focus. There are
              no gaps between sessions, no conflicting signals, and no opportunity for old
              habits to resurface before new ones are established.
            </p>
            <p className="text-slate-600 mb-5 leading-relaxed">
              This concentrated approach is particularly effective for behavioral issues,
              where consistency is critical. It also allows us to work through challenges
              as they arise, rather than waiting for the next scheduled session.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Every program includes thorough owner handoff training. The skills your dog
              learns must transfer to you—that's when real success begins.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl lg:max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 text-center">
            Our Programs
          </h2>
          <p className="text-slate-600 lg:text-lg text-center mb-14 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Each program is tailored to your dog's needs. During your consultation,
            we'll recommend the right duration based on your goals and your dog's
            current behavior.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['All', 'Puppy', 'Basic', 'Advanced'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  activeFilter === filter
                    ? 'bg-slate-800 text-white'
                    : 'bg-white text-slate-600 border border-slate-300 hover:border-slate-500 hover:text-slate-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="space-y-10">
            {filteredPrograms.length === 0 && (
              <p className="text-center text-slate-500 py-10">No programs found for this level.</p>
            )}
            {filteredPrograms.map((program) => (
              <div key={program.title} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="md:flex">
                  <div className="md:w-1/4 bg-slate-800 text-white p-8 flex flex-col justify-center">
                    <div className="text-sm uppercase tracking-wide text-slate-400 mb-1">
                      {program.duration}
                    </div>
                    <h3 className="text-2xl font-bold">{program.title}</h3>
                  </div>
                  <div className="md:w-3/4 p-8">
                    <p className="text-slate-600 mb-8 leading-relaxed">{program.description}</p>

                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">Goals</h4>
                        <ul className="space-y-2">
                          {program.goals.map((goal, i) => (
                            <li key={i} className="text-sm text-slate-600 flex items-start">
                              <span className="text-slate-400 mr-3">—</span>
                              {goal}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">Structure</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{program.structure}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">Outcomes</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{program.outcomes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-12 text-center">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-5">During the Program</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">—</span>
                  Multiple structured training sessions daily
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">—</span>
                  Regular updates on your dog's progress
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">—</span>
                  Proper rest, exercise, and enrichment
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">—</span>
                  Gradual exposure to real-world distractions
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-5">Owner Handoff</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">—</span>
                  In-person training session at pickup
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">—</span>
                  Demonstration of all commands and techniques
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">—</span>
                  Written guide for continued practice
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">—</span>
                  Follow-up support as you transition home
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Find the Right Program
          </h2>
          <p className="text-slate-300 mb-10 text-lg lg:text-xl leading-relaxed">
            Not sure which program fits your dog? Schedule a consultation and we'll
            assess your dog's needs, discuss your goals, and recommend the best path forward.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-slate-900 px-8 py-3 lg:px-10 lg:py-4 lg:text-lg rounded font-semibold shadow-lg hover:bg-slate-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Training
