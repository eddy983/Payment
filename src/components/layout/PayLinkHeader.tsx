import * as React from 'react'
import Link from 'next/link'

export const PayLinkHeader: React.FunctionComponent = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-[1000px] flex-shrink-0 bg-[#4E00AD] md:px-10">
        <header className="mx-auto w-full max-w-[974px] ">
          <section className="mx-auto flex w-full items-center justify-between gap-5 bg-[#4E00AD] p-5 md:px-0 md:py-14 ">
            <Link href="#">
              <a className="w-[50%] max-w-[260px] md:w-full">
                {/*  eslint-disable-next-line @next/next/no-img-element  */}
                <img src="/images/logo.png" alt="The Liberty Pay logo" className="block" />
              </a>
            </Link>

            <Link href="/">
              <div className="flex flex-col items-end">
                <a className="text-white md:text-[23px]">About Us</a>
                <div className="h-[1px] w-[43px] bg-[#E88CE2]"></div>
              </div>
            </Link>
          </section>
        </header>
      </div>

      <style jsx>{`
        .header-bg {
          background: #4e00ad;
          box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      
    </>
  )
}
