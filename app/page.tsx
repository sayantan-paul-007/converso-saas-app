import CallToAction from '@/components/CallToAction'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
     <section className='home-section'>
      <CompanionCard 
        id="123"
        title="Neura the Brainy Explorer"
        topic="Neural Network of the Brain"
        subject="Science"
        duration={45}
        color="#E5D0FF"
      />
      <CompanionCard 
       id="456"
        title="Countsy the Number Wizard"
        topic="Derivatives & Integrals"
        subject="Maths"
        duration={30}
        color="#FFDA6E"
      />
      <CompanionCard
       id="789"
        title="Verba the Vocabulary Builder"
        topic="English Literature"
        subject="Language"
        duration={30}
        color="#BDE7FF"
      />
      
     </section>
     <section className="home-section">
      <CompanionList
      title="Recently Completed Sessions"
      companions={recentSessions}
      classNames='w-2/3 max-lg:w-full'
      />
      <CallToAction />
     </section>
    </main>
  )
}

export default Page