//import Image from 'next/image'
//import styles from './../styles.module.css';

export default function Footer() {
    return (
        <footer className='pb-10 pt-12 bg-[#ded8d4] text-zinc-700 text-lg	' >
        <div className="container mx-auto">
            <div className="basis-1">
                <div className="flex w-full justify-center items-center flex-row gap-2">
                        <span className="instagram">
                            <a href="https://www.instagram.com/telligrup/"
                                target="_blank">
                                <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
                                    <path
                                        fill="#40ddbe"
                                        d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"
                                    />
                                </svg>
                            </a>
                        </span>
                        <span>
                            /
                        </span>
                        <span className="facebook"><a href="https://www.facebook.com/profile.php?id=100063082159368"
                            target="_blank">
                            <svg
                                viewBox="0 0 24 24"
                                fill="#40ddbe"
                                height="1em"
                                width="1em"
                            >
                                <path
                                    d="M11.999 7.377a4.623 4.623 0 100 9.248 4.623 4.623 0 000-9.248zm0 7.627a3.004 3.004 0 110-6.008 3.004 3.004 0 010 6.008z" />
                                <path
                                    d="M17.884 7.207 A1.078 1.078 0 0 1 16.806 8.285 A1.078 1.078 0 0 1 15.728000000000002 7.207 A1.078 1.078 0 0 1 17.884 7.207 z" />
                                <path
                                    d="M20.533 6.111A4.605 4.605 0 0017.9 3.479a6.606 6.606 0 00-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 00-2.184.42 4.6 4.6 0 00-2.633 2.632 6.585 6.585 0 00-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 002.634 2.632 6.584 6.584 0 002.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 002.186-.419 4.613 4.613 0 002.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 00-.421-2.217zm-1.218 9.532a5.043 5.043 0 01-.311 1.688 2.987 2.987 0 01-1.712 1.711 4.985 4.985 0 01-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 01-1.669-.311 2.985 2.985 0 01-1.719-1.711 5.08 5.08 0 01-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 01.311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 011.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 011.67.311 2.991 2.991 0 011.712 1.712 5.08 5.08 0 01.311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
                            </svg>
                        </a>
                        </span>
                        <span>/</span>
                        <span className="twitter">
                            <a href="https://twitter.com/TelliGrup" target="_blank">
                                <svg
                                    viewBox="0 0 1024 1024"
                                    fill="#40ddbe"
                                    height="1em"
                                    width="1em"
                                >
                                    <path
                                        d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
                                </svg>
                            </a>
                        </span>
                        <span>/</span>
                        <span className="mail hover:underline">
                            <a href="mailto:info@telligrup.com">info@telligrup.com</a>
                        </span>
                        <span>/</span>
                        <span className="phone hover:underline"><a href="tel:4441557">444 1 548</a></span>
                    </div>
                <div className="text-center mt-6	">
                    <div className="telli">
                        Copyright {(new Date()).getFullYear()} Telli Grup. Her hakkı saklıdır. İzinsiz kopyalanamaz
                        veya çoğaltılamaz.
                    </div>

                </div>
            </div>

        </div>
    </footer>
    )
}

