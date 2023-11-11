import { footerData, footerSocialMedia } from '@/app/components/Footer/footerLinks';
import Link from 'next/link'

export default function Footer()
{
    return (
        <footer className='max-w-7xl p-6 mx-auto mt-10 md:mt-40'>
            <div className='justify-between md:flex'>

                <div>
                    <Link href="/" className="flex items-center">
                        <svg
                            width="142"
                            height="54"
                            viewBox="0 0 112 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M86.2099 3.4255C87.0999 4.4787 87.7674 5.7021 88.2124 7.0957C88.6574 8.4894 88.8799 9.9787 88.8799 11.5638L88.8394 14.2979H72.6169C72.6776 15.8085 73.1732 17.0319 74.0834 17.9681C75.0544 18.9681 76.7332 19.4681 78.6549 19.4681C80.1315 19.4681 81.4362 19.1809 82.3767 18.5957C83.3072 18.0106 84.1365 17.2766 84.8748 16.3723L88.0405 19.766C87.0594 21.0851 85.7345 22.1277 84.0253 22.8723C82.3262 23.6277 80.2528 24 78.0177 24C76.2478 24 74.5487 23.7128 73.153 23.1383C71.7674 22.5638 70.5942 21.766 69.6233 20.7234C68.6625 19.6809 67.9241 18.4255 67.3982 16.9468C66.8723 15.4681 66.6195 13.7979 66.6195 11.9574C66.6195 10.1383 66.8723 8.5 67.378 7.0319C67.8736 5.5638 68.6119 4.3191 69.5525 3.2766C70.5032 2.234 71.6662 1.4362 73.0417 0.8617C74.4273 0.2872 76.0961 0 77.8356 0C79.7067 0 81.4362 0.3085 82.8015 0.9255C84.1871 1.5319 85.3198 2.3723 86.2099 3.4255ZM72.6169 9.6915H83.2465H83.2668V9.5745C83.2668 7.9894 82.8015 7.1489 81.8812 6.1489C80.9608 5.1489 79.5044 4.5851 77.9368 4.5851C76.3692 4.5851 74.9128 5.1489 73.9924 6.1489C73.0721 7.1489 72.6169 7.9894 72.6169 9.5745V9.6915ZM33.8205 0.543L30.5133 11.9259C30.0784 13.4153 29.7345 14.9259 29.4817 16.4579V16.4791H29.3805C29.3174 15.8891 29.1863 15.2991 29.0646 14.7516C29.0107 14.5094 28.9587 14.2755 28.9153 14.0536L25.2743 0.543H17.8407L14.2301 14.043C14.1867 14.2649 14.1347 14.4987 14.0808 14.7409L14.0808 14.741C13.9591 15.2885 13.828 15.8785 13.7649 16.4685H13.6637V16.4472C13.4109 14.9153 13.067 13.4047 12.6321 11.9153L9.33502 0.543H4.06574L5.61315 5.894H0V9.7238H6.71555L7.81795 13.5323H0V17.3728H8.92035L10.6802 23.5111H16.9709L21.2288 7.4153C21.3704 6.8196 21.4918 6.1706 21.5221 5.7132H21.6233C21.6536 6.16 21.775 6.8196 21.9064 7.4153L26.1643 23.5111H32.4652L39.0898 0.543H33.8205ZM47.737 0.543H42.134V23.5111H47.737V0.543ZM52.0051 23.5111V0.543H65.689V5.0962H57.153V23.5111H52.0051ZM96.89 11.8196L88.6877 23.5111H94.9482L100.015 15.5536H100.207L105.284 23.5004H112L103.798 11.9047L111.909 0.543H105.649L100.764 8.1174H100.571L95.6258 0.543H88.9102L96.89 11.8196Z"
                                fill="#b4f6cb"></path>
                        </svg>
                    </Link>

                    <p className='mt-5 max-w-[250px]'>
                        Buy, store, transfer and exchange crypto with our secure and versatile wallets.
                    </p>
                </div>

                {footerData.map( ( { id, title, links } ) =>
                    <div key={id}>
                        <h4 className='mt-8 text-lg md:mt-0'>{title}</h4>
                        {links.map( ( { id, name, link } ) =>
                            <Link
                                className="block mt-4 text-wirex-black hover:text-wirex-dark-green"
                                key={id}
                                href={link}
                                target='_blank'
                                rel="noreferrer"
                            >{name}
                            </Link>
                        )}
                    </div>
                )}
            </div>

            <div className="border-wirex-light-green border-[2px] my-8" />

            <div className='items-center justify-between md:flex'>

                <div className="my-3">
                    <p className='mb-2'>2023 | Wirex Tribute Page | <span className="font-[600]">Built for educational purposes only</span> | No Rights Reserved.</p>
                    <Link href="https://wirexapp.com/" target="_blank">
                        <p className="italic">Visit the official Wirex App website here.</p>
                    </Link>
                </div>

                <div className="flex gap-5 md:ml-4">
                    {footerSocialMedia.map( ( { id, icon, socialLink } ) =>
                        <Link key={id} href={socialLink}
                            className="text-2xl hover:text-wirex-light-green"
                            target="_blank"
                        >
                            {icon}
                        </Link>
                    )}
                </div>

            </div>
        </footer>
    )
}
