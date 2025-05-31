import CallToAction from '@/components/CallToAction'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'
import React from 'react'

const Page = async () => {
  const companions = await getAllCompanions({limit:3})
  const recentSessionsCompanions = await getRecentSessions(10)
  return (
    <main>
      <h1>Popular Companions</h1>
     <section className='home-section'>
      {companions.map((companion) => (
        <CompanionCard 
                {...companion}
                key={companion.id}
                color={getSubjectColor(companion.subject)}
              />
      ))}
      
      
      
     </section>
     <section className="home-section">
      <CompanionList
      title="Recently Completed Sessions"
      companions={recentSessionsCompanions}
      classNames='w-2/3 max-lg:w-full'
      />
      <CallToAction />
     </section>
    </main>
  )
}

export default Page