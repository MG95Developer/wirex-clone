'use client'

import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '../../public/assets/wirex-hero-image.webp';
import Visa from '../../public/assets/visa-hero.png';
import Mastercard from '../../public/assets/mastercard-hero.png';
import Fireblocks from '../../public/assets/fireblocks-hero.png';
import PCI from '../../public/assets/pci-hero.png';
import CTA from '@/app/components/CTA';

export default function Hero()
{
    return (
        <section className='mt-[100px] bg-wirex-white'>
            <div className='border-t-8 border-wirex-light-green w-full md:[w-70%] mx-auto'></div>

            <div className='py-12 w-full bg-wirex-light-gray h-full md:h-[650px] flex md:justify-center md:items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-2 max-w-7xl mx-auto p-4 lg:py-8'>
                    <div className='pt-12 md:pt-0 text-center order-2 md:order-1 flex justify-center items-center'>
                        <div className='flex flex-col text-left text-wirex-black'>
                            <h1 className="text-[2.25rem] md:text-[2.75rem] xl:text-[4.5rem] leading-none font-bold">
                                <span className="text-wirex-dark-green">Buy, trade</span> &
                                <span className="text-wirex-dark-green"> grow</span>
                            </h1>
                            <p className="text-[2.25rem] md:text-[2.75rem] xl:text-[4.5rem] leading-none font-bold mt-2">
                                your money
                            </p>
                            <p className="text-1xl font-[500] mt-5 lg:text-2xl lg:mt-10">
                                Earn up to <span className="text-wirex-dark-green">8% </span>on
                                every card transaction
                            </p>
                            <p className="mt-5 w-full max-w-[75%] text-wirex-dark-gray text-1xl md:text-2xl">
                                <span className="text-wirex-dark-green">
                                    Trusted by 6 million
                                </span>{' '}
                                people since 2014 with{' '}
                                <span className="text-wirex-dark-green">20 billion+</span> in
                                crypto transactions
                            </p>

                            <Link href="https://wirexapp.com/" target="blank">
                                <CTA buttonText='start today' />
                            </Link>

                            <div className="mt-12 flex">
                                <div className="w-[25%] py-2">
                                    <Image src={Visa} alt="visa" width={80} height={50} className='w-auto h-auto' />
                                </div>
                                <div className="w-[25%] py-2">
                                    <Image src={Mastercard} alt="visa" width={80} height={50} className='w-auto h-auto' />
                                </div>
                                <div className="w-[25%] py-2">
                                    <Image src={Fireblocks} alt="visa" width={80} height={50} className='w-auto h-auto' />
                                </div>
                                <div className="w-[25%] py-2">
                                    <Image src={PCI} alt="visa" width={80} height={50} className='w-auto h-auto' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center order-1">
                        <Image
                            src={HeroImage}
                            alt="wirex app"
                            width={1000}
                            height={500}
                            className="animate__animated animate__pulse animate__delay-5s animate__slower animate__infinite"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
