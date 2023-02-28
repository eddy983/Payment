'use client'

import type { NextPage } from 'next'
import React from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Button, Navbar } from '@/components'

const Home: NextPage = () => {
  // const featureCardWithImage = {
  //   icon: <Budgeting />,
  //   bgColor: '#FFF2E1',
  //   color: '#4200FF',
  //   title: 'Budgeting',
  //   description:
  //     'LibertyPay makes it easier and seamless to create budget and also to track  your financial performance at your convenient time.',
  //   imgUrl: '/images/budgeting.png',
  // }
  return (
    <>
      <header>
        <Navbar />
        <section>
          <div className="container grid grid-cols-2">
            <div>
              <h1>Enjoy Fast</h1>
              <h1>Transaction on</h1>
              <h1>LibertyPay POS</h1>
              <p>
                Experience and enjoy the best seamless transactions with Libertypay. Budgeting,
                Requisition, Expense Tracker, and Spending got better and made easier with massive
                cashback.
              </p>
              <div className="mt-11 flex items-center space-x-4">
                <Button>
                  <span className="underline">Request for POS</span>
                </Button>
                <Button variant="unstyled" className="bg-black text-white">
                  <span className="underline">Learn more</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </header>
      <main className="space-y-6">
        {/* <Lottery />
      <BigFeatureCardWithImage {...featureCardWithImage} />
      <DownloadApp />
      <QuickResponse />
      <Partners />
       <Button>Get Started</Button>
      <BigFeatureCard feature={feature} />
    <SmallFeatureCard imgUrl="" title="Send Money" /> */}
      </main>
    </>
  )
}

export default Home
