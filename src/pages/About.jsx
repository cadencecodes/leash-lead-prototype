import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl lg:max-w-5xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Leash & Lead</h1>
          <p className="text-lg lg:text-xl text-slate-300 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Professional dog training grounded in experience, education, and a
            commitment to lasting results.
          </p>
        </div>
      </section>

      {/* Trainer Bio */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <div className="md:flex md:gap-16 lg:gap-20 items-start">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="bg-slate-200 rounded-lg aspect-square flex items-center justify-center shadow-sm">
                <svg className="w-24 h-24 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">Meet the Trainer</h2>
              <p className="text-slate-600 mb-5 leading-relaxed">
                With over a decade of experience in professional dog training, I founded
                Leash & Lead to provide owners with the knowledge and skills they need
                to build lasting relationships with their dogs.
              </p>
              <p className="text-slate-600 mb-5 leading-relaxed">
                My approach is rooted in understanding canine behavior at a fundamental
                level. Before starting Leash & Lead, I spent years working alongside
                veterinary behaviorists, studying learning theory, and training dogs
                across a wide range of breeds, temperaments, and behavioral challenges.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I believe that effective training is not about quick fixes or dominance—it's
                about clear communication, proper structure, and teaching owners to be
                confident leaders their dogs can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-12 text-center">
            Experience & Credentials
          </h2>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Professional Training</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">—</span>
                  10+ years of professional dog training experience
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">—</span>
                  Certified Professional Dog Trainer (CPDT-KA)
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">—</span>
                  Member, Association of Professional Dog Trainers
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Specialized Experience</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">—</span>
                  Behavior modification for anxiety and reactivity
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">—</span>
                  Puppy development and early socialization
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">—</span>
                  Obedience training from foundation to advanced
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-10 text-center">
            Training Approach
          </h2>
          <div className="max-w-3xl lg:max-w-4xl mx-auto">
            <p className="text-slate-600 mb-6 leading-relaxed">
              My methodology is built on the science of how dogs learn. I use clear,
              consistent methods that help dogs understand exactly what is expected of
              them. This creates confidence in the dog and reliability for the owner.
            </p>
            <div className="border-l-4 border-slate-300 pl-8 my-10">
              <p className="text-slate-700 italic text-lg leading-relaxed">
                "Training is not something you do to your dog—it's something you build
                together. My role is to give you the tools and understanding to lead
                that process with confidence."
              </p>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I focus heavily on owner education. While I can teach your dog new skills,
              the real goal is to teach you how to maintain and build on that foundation.
              Every session includes hands-on coaching so you understand not just what to
              do, but why it works.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you're starting with a new puppy or addressing long-standing
              behavioral issues, I provide structured, practical training that fits
              your life and sets you up for long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-slate-300 mb-10 text-lg lg:text-xl leading-relaxed">
            Ready to discuss your training goals? I offer consultations to assess
            your dog's needs and outline a clear path forward.
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

export default About
