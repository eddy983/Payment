import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { DownloadModal } from '@/components/elements'

interface ModalResolveDisputeProps {
  closeModal: () => void
  isModalOpen: boolean
}

export const EnterPaymentPin: React.FunctionComponent<ModalResolveDisputeProps> = ({
  isModalOpen,
  closeModal,
}) => {
  return (
    <div>
      <DownloadModal
        label="Pin success"
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        width="500px"
        className="p-0 pt-[0px] pb-[0px] md:pt-[20px] md:pb-[47px]"
      >
        <div className="bg-[#C3EFFF]">
          <div className="h-[204px] bg-[url('/images/download-bg.png')] bg-cover bg-center px-7 py-3">
            {' '}
            <button
              className="ml-auto block rounded-[5px] bg-[#87DFFF] px-3 font-semibold text-black"
              onClick={() => {
                closeModal()
                // Router.push('/disputes');
              }}
            >
              x
            </button>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl  p-4">
            <div className="mt-5 flex w-full flex-col items-center justify-center">
              <h1
                className="text-lg
             font-semibold text-black"
              >
                DOWNLOAD NOW
              </h1>

              <div className="mt-8 flex items-center space-x-4">
                <Link href="https://play.google.com/store/apps/details?id=com.libertytech.org.libertpay">
                  <a target="_blank" rel="noopener noreferrer" className="underline">
                    <Image
                      src="/images/personal/google-playstore-badge.png"
                      width={183}
                      height={54}
                      alt="get it on google play badge"
                    />
                  </a>
                </Link>
                <Link href="https://apps.apple.com/ng/app/liberty-pay-agency/id1637666052">
                  <a target="_blank" rel="noopener noreferrer" className="underline">
                    <Image
                      className="object-contain"
                      src="/images/appstore-link.svg"
                      width={183}
                      height={54}
                      alt="apple play"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DownloadModal>

      <style jsx>{`
        .gradient {
          background: linear-gradient(90deg, #107ee2 -2.59%, #032282 104.34%);
        }
      `}</style>
    </div>
  )
}
