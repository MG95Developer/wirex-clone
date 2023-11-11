import { RiArrowDropRightLine } from 'react-icons/ri';

export default function CTA( { buttonText } )
{
    return (
        <div className='py-8'>
            <button className='bg-wirex-light-green hover:bg-wirex-dark-green hover:text-text-wirex-white delay-350 uppercase font-bold text-1xl cursor-pointer px-10 py-3 rounded-full flex items-center'>{buttonText}
                <RiArrowDropRightLine className="inline ml-2" size={25} />
            </button>
        </div>
    )
}
