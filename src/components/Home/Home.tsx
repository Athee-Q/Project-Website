import React from 'react'
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import CustomerSupport from '../CustomerSupport/CustomerSupport'
import Principles from '../Principles/Principles'
import SupportTeam from '../SupportTeam/SupportTeam'
import Integrations from '../Integrations/Integrations'
import ChatBox from '../Contact/ChatBox'
import ERP from '../ERP/ERP'
import EnterpriseSoftware from '../EnterpriseSoftware/EnterpriseSoftware'

const Home = () => {
  return (
    <main>
      <Hero />
      <EnterpriseSoftware />
      <Features />
      <CustomerSupport />
      <ERP />
      <Principles />
      <SupportTeam />
      <Integrations />
      <ChatBox />
    </main>
  )
}

export default Home