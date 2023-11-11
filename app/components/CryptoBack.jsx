import Image from "next/image"
import CryptoBackRewards from '@/public/assets/crypto-back.webp'
import CTA from '@/app/components/CTA'
import Link from 'next/link'

export default function CryptoBack()
{
    return (
        <section className="max-w-7xl mx-auto bg-wirex-white py-20" id="cryptoback">
            <div className="flex flex-col md:flex-row">

                <div className="w-full md:w-[50%] order-2 flex justify-center items-center">
                    <div className="flex flex-col p-5">

                        <h2 className="text-wirex-dark-green text-5xl py-2 font-[600] mb-4">Cryptoback™ Rewards</h2>

                        <p className='w-full sm:max-w-[80%] lg:max-w-[90%] text-1xl lg:text-2xl'>The world&apos;s first reward programme that pays out in cryptocurrency. A vital part of our mission to make currencies more equal and accessible, it allows everybody to get involved in crypto with no commitments or catches</p>

                        <div>
                            <Link href="https://wirexapp.com/cryptoback-rewards" target="blank">
                                <CTA buttonText="join wirex" />
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="w-full md:w-[50%] order-1 md:order-2 p-5">

                    <Image src={CryptoBackRewards} alt="wirex app" width={1000} height={500} className='animate__animated animate__pulse animate__delay-5s animate__slower animate__infinite' />

                    <h3 className="flex justify-end font-[600] text-1xl text-wirex-dark-gray">Earn Cryptoback™ rewards on every purchase</h3>

                </div>

            </div>
        </section>
    )
}
