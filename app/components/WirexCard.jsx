
import Image from 'next/image'
import Link from 'next/link'
import WirexCards from '../../public/assets/wirex-card.webp'
import CTA from '@/app/components/CTA'
import CardIcon from '../../public/assets/card-icon.webp'

export default function WirexCard()
{
    return (
        <section className='max-w-7xl mx-auto bg-wirex-white py-16' id="wirexcard">
            <div className='flex flex-col md:flex-row'>

                <div className="w-full h-full md:w-[100%] order-1 md:order-2">
                    <Image src={WirexCards} alt="wirex app" width={1000} height={500} className='animate__animated animate__pulse animate__delay-5s animate__slower animate__infinite' />
                </div>

                <div className='w-full md:w-[70%] order-2 flex justify-center items-center'>
                    <div className='flex flex-col p-5'>

                        <h2 className="text-wirex-dark-green text-5xl py-2 font-[600] text-left mb-4">Wirex card</h2>

                        <p className='w-full sm:max-w-[80%] lg:max-w-[90%] text-1xl lg:text-2xl'>The ultimate solution for spending crypto and stablecoins. With Wirex, you can enjoy seamless transactions, earn up to <span className='text-wirex-dark-green'>8% Cryptoback™</span> every time you spend, and stay in control of your card&apos;s security.</p>

                        <div>
                            <Link href="https://wirexapp.com/card" target="blank">
                                <CTA buttonText="join wirex" />
                            </Link>
                        </div>

                    </div>
                </div>

            </div>

            <div className="w-full mt-10 max-w-7xl mx-auto ">
                <div className="h-full bg-gradient-to-r from-[#104845] to-[#46ab76] xl:rounded-xl py-10">
                    <div className='flex justify-center items-center'>
                        <Image src={CardIcon} alt="icon" width={30} height={30} />
                        <span className="uppercase text-wirex-white ml-2">earning</span>
                    </div>
                    <h2 className='text-center text-wirex-white text-4xl font-[500] py-5'>Spend more, earn more with Cryptoback™</h2>
                    <p className="py-5 text-wirex-white text-center w-full max-w-[60%] mx-auto text-3xl">Earn up to 8% Cryptoback™ on all purchases made with your Wirex card. Your Cryptoback™ rewards will be instantly deposited into your Wirex account.</p>
                </div>
            </div>

        </section>
    )
}
