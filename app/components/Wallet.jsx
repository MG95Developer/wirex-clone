import Image from 'next/image'
import WalletBG from '@/public/assets/wallet-bg.webp'
import WirexIcon from '@/public/assets/wirex-icon.webp'
import CTA from '../components/CTA'
import Link from 'next/link'


export default function Wallet()
{
    return (
        <section className='bg-wirex-light-gray py-5 lg:py-20' id="wallet">
            <div className="max-w-7xl mx-auto flex flex-col p-10 lg:rounded-xl">

                <div className="flex justify-center w-full h-fit relative">

                    <Image src={WalletBG} alt='wallet' width={1500} height={400} className='rounded-xl' />

                    <div className='w-full h-full bg-wirex-black absolute opacity-80 rounded-xl'>
                        <div className='w-full h-full p-4'>

                            <div className='flex flex-col w-full h-full justify-around items-center text-white'>
                                <div className="animate__animated animate__pulse animate__delay-5s animate__slower animate__infinite">
                                    <Image src={WirexIcon} alt="wirex icon" width={50} height={50} className="inline mr-2" />
                                    <span className='font-[700] uppercase text-wirex-light-green text-sm lg:text-2xl inline'>cross-chain wallet</span>
                                </div>

                                <div>
                                    <p className='text-1xl md:text-4xl lg:text-5xl font-[500] text-center mb-6 lg:mb-10'>Your gateway to the <span className='text-wirex-light-green'>Web3</span> world</p>
                                    <p className='text-1xl md:text-2xl lg:text-3xl font-[300] text-center mt-5 lg:mt-12 w-full lg:max-w-[70%] mx-auto'>Swap assets on major DEX, supply or borrow assets on Compound, AAVE or Nereus. Buy & Hold NFT on multiple chains.</p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div className="mt-10 flex flex-col md:flex-row gap-8 py-5">
                    <div className="w-full md:w-[60%] flex justify-start md:justify-end items-center">
                        <p className="font-bold text-[#311b99] text-3xl"><span className='text-wirex-dark-gray'>New</span> DeFi and NFTs <span className='text-wirex-dark-gray'>cross-chain wallet</span></p>
                    </div>

                    <div className="w-full md:w-[40%] flex justify-start md:justify-end items-center">
                        <Link href="https://wirexapp.com/wirex-wallet" target='_blank'>
                            <CTA buttonText="open account" />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}
