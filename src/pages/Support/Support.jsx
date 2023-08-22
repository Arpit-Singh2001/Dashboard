import { Card, Stack } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'
import { GrMail } from 'react-icons/gr'
import { AiFillMessage } from 'react-icons/ai'
import InfoCard from '../Dashboard/components/InfoCard'

const Support = () => {
  return (
    <DashboardLayout title="Support">
        <Stack spacing="80px">
        <SupportCard leftComponent={<ContactCard/>} 
        icon={GrMail}
        title=" Contact Us"
        text="Have a question or just want to know more? Feel free to react out to
        us."
        
        />
        
        <SupportCard 
        leftComponent={<InfoCard 
          inverted={true}
         imgUrl="\Visual.svg"
         text="Learn more about our real estate, mortgage, and  corporate account services"
         tagtext="Contact"
        
        />} 
        icon={AiFillMessage}
        title="Live Chat"
        text="Don't have time to wait for the answer Chat with us now"
        
        />
        </Stack>

  </DashboardLayout>
  )
}

export default Support