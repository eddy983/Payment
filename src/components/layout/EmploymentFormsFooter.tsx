import * as React from 'react'
import Link from 'next/link'

import { Icon } from '@/components/elements'

export const EmploymentFormsFooter: React.FunctionComponent = () => {
  return (
    <>
      <footer className="bg-employment-blue p-5 py-14 md:px-[105px] md:pt-[118px] md:pb-[78px] mx-auto w-full max-w-[1000px] flex-shrink-0">
        <div className="md:flex md:flex-wrap md:justify-between md:gap-10">
          <div>
            <Link href="#">
              <a className="mb-12 block max-w-[205px] md:w-full md:max-w-[260px]">
                {/*  eslint-disable-next-line @next/next/no-img-element  */}
                <img src="/images/logo.png" alt="The Liberty Pay logo" className="block" />
              </a>
            </Link>

            <div className="mb-14">
              <ul className="flex w-max gap-8 border-b-[0.5px] border-b-white pb-2">
                <li>
                  <a href="https://www.facebook.com/LibertyPayy/">
                    <Icon
                      key="employment-facebook"
                      id="employment-facebook"
                      width="12"
                      height="24"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <Icon key="employment-twitter" id="employment-twitter" width="24" height="24" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/libertypayy" target="_blank" rel="noreferrer">
                    <Icon
                      key="employment-instagram"
                      id="employment-instagram"
                      width="24"
                      height="24"
                    />
                  </a>
                </li>
              </ul>
              <p aria-hidden className="mt-2 text-xs font-medium text-white">
                Socials
              </p>
            </div>
          </div>

          <div className="mb-14 text-white">
            <h3 className="mb-6 text-xl font-semibold">Contact</h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0">
                  <Icon key="employment-location" id="employment-location" width="24" height="24" />
                </span>
                <span className="max-w-[196px]">No.27 Alara street, Yaba, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex-shrink-0">
                  <Icon key="employment-email" id="employment-email" width="24" height="24" />
                </span>
                <a href="libertypay@libertyng.com" className="no-underline">
                  libertypay@libertyng.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex-shrink-0">
                  <Icon key="employment-phone" id="employment-phone" width="24" height="24" />
                </span>
                <div>
                  {' '}
                  <span>Calls: 012706255</span>
                </div>
              </li>
            </ul>
          </div>

          <form className="mb-14 w-full max-w-[349px] text-white">
            <legend className="mb-4 text-2xl font-semibold">Subscribe to our Newsletter</legend>

            <div className="flex w-full items-center gap-3">
              <input
                type="checkbox"
                id="keep-logged-in"
                value="Keep_me_logged_in"
                name="Keep_me_logged_in"
                className="border-mauve-4 text-purple-9 focus:ring-purple-8 h-4 w-4 scale-110 cursor-pointer rounded transition duration-500 ease-in-out"
              />
              <label htmlFor="keep-logged-in" className="text-white">
                Agree to subscribe to our news letter
              </label>
            </div>
          </form>
        </div>

        <button
          className="mb-14 ml-auto block w-max"
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <Icon key="back-to-top-button" id="back-to-top-button" width="42" height="44" />
        </button>

        <ul className="space-y-4 border-t-[0.8px] border-t-white pt-4 text-white md:flex md:flex-wrap md:justify-between md:gap-5 md:space-y-0">
          <li>All rights reserved. © LibertyPay Limited</li>
          {/* <li>Privacy policy</li>
          <li>Terms & Conditions</li> */}
        </ul>
      </footer>

      <style jsx>{`
        .subscribe-bg {
          background: linear-gradient(90deg, #0184d6 0%, #004067 114.15%);
        }
      `}</style>
    </>
  )
}
