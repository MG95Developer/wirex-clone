import Link from "next/link";
import { RiArrowDropRightLine } from 'react-icons/ri';

export default function JoinUsToday()
{
    return (
        <section className="px-6 my-20 md:mt-36">
            <div className="max-w-7xl p-5 mx-auto border-transparent bg-greenGradient md:px-16 md:py-12 rounded-3xl">

                <div className="grid items-center lg:grid-cols-2">

                    <div className="my-8 text-wirex-white">
                        <h3 className="text-4xl font-bold my-2">Best Cross-Chain Wallet</h3>
                        <p className="text-2xl mt-12 pr-5">Wirex Card. The ultimate solution for spending crypto and stablecoins with ease. A world of advantages waiting for you. What are you waiting for?</p>
                    </div>

                    <div className="my-8 text-wirex-white flex justify-start lg:justify-end">
                        <Link href="https://wirexapp.com/" target="_blank" className="px-12 py-3 rounded-full bg-wirex-dark-gray text-wirex-white uppercase font-bold text-1xl hover:bg-opacity-70 cursor-pointer">
                            <span>Sign Up today</span>  <RiArrowDropRightLine className="inline ml-2" size={25} />
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    )
}
