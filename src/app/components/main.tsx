import Image from 'next/image'
import styles from "@/app/styles.module.css";
import React from "react";

export default function Main() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
        <section id="section-1" className={styles.banner}>
            <div className="absolute -bottom-14 flex w-full justify-center left-0">
                <div className="bg-[#40ddbeaa] rounded-t-full">
                    <a className="-translate-y-5 block py-8 px-6" href="#section-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
                             stroke="#fff" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="container mx-auto px-4 md:pt-16">
                <div className="w-full">
                    <div className="flex flex-col">
                        <div className="text-white font-['ralewaybold'] lg:text-7xl	md:text-6xl text-5xl lg:leading-[67px] mb-2">DEĞER
                            KATIYORUZ,
                        </div>
                        <div
                            className="text-[#40ddbe] font-['ralewaybold'] lg:text-7xl md:text-6xl text-5xl lg:leading-[67px]">BERABER
                            YÜKSELİYORUZ.
                        </div>
                        <div className="text-white font-['ralewaylight'] lg:text-3xl md: text-2xl">Tam 34
                            yıldır başarıya giden yolda birlikte yürüyor, sizden güç
                            alıyoruz.
                        </div>
                    </div>
                    <div className={styles.bottomButtons}>
                        <a href="/kurumsal">SEKTÖRLER</a>
                        <a href="/kurumsal">MARKALAR</a>
                        <a href="/kurumsal">REFERANSLAR</a>
                        <a href="/kurumsal">MEMNUNİYET ANKETİ</a>
                    </div>
                </div>
            </div>
        </section>
        <section className='w-full' id="section-2">
            <div className="flex flex-row flex-wrap">
                <div className={`${styles.category} bg-[url('/assets/images/categories1.jpg')]`}>
                    <div className={styles.box}>
                        <h1 className='border-b text-center w-[70%] mx-auto text-[54px] font-["ralewaythin"] text-white'>OTOMOTİV</h1>
                        <p className='w-[70%] text-center mx-auto text-[24px] font-["ralewayextralight"] text-white'>Araç
                            Geri Dönüşüm ve Araç İhale Yönetimi </p>
                    </div>
                    <div className={styles.boxOverlay}>
                        <div className="grid grid-rows-3 grid-flow-col auto-cols-fr gap-0 w-full">
                            <div className={styles.bottomli}>
                                <a href="http://www.aksamoto.com.tr" target="_blank">
									<span>
                                        <Image
                                            src="/assets/images/aksam.png"
                                            width={166}
                                            height={36}
                                            className={styles.brandlogo}
                                            alt={'www.aksamoto.com.tr'}
                                        />
                                        {/*<img src="images/aksam.png">*/}
									</span>
                                </a>
                            </div>
                            <div className={styles.bottomli}>
                                <a href="http://www.autogong.com" target="_blank">
									<span>
										{/*<img src="images/autogong.png">*/}
                                        <Image
                                            src="/assets/images/autogong.png"
                                            width={166}
                                            height={36}
                                            className={styles.brandlogo}
                                            alt={'www.autogong.com'}
                                        />
									</span>
                                </a>
                            </div>
                            <div className={styles.bottomli}>
                                <a href="http://www.ekosistem.com.tr" target="_blank">
									<span>
										{/*<img src="images/ekosistem.png">*/}
                                        <Image
                                            src="/assets/images/ekosistem.png"
                                            width={166}
                                            height={36}
                                            className={styles.brandlogo}
                                            alt={'www.ekosistem.com.tr'}
                                        />
									</span>
                                </a>
                            </div>
                            <div className={styles.bottomli}>
                                <a href="http://www.ekoparca.com.tr" target="_blank">
									<span>
										EKOPARÇA
									</span>
                                </a>
                            </div>
                            <div className={styles.bottomli}>
                                <a href="http://www.hys.com.tr" target="_blank">
									<span>
										{/*<img src="images/hys.png">*/}
                                        <Image
                                            src="/assets/images/hys.png"
                                            width={166}
                                            height={36}
                                            className={styles.brandlogo}
                                            alt={'www.hys.com.tr'}
                                        />
									</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.category} bg-[url('/assets/images/categories2.jpg')]`}>
                    <div className={styles.box}>
                        <h1 className='border-b text-center w-[70%] mx-auto text-[54px] font-["ralewaythin"] text-white'>SİGORTA </h1>
                        <p className='w-[70%] text-center mx-auto text-[24px] font-["ralewayextralight"] text-white'>Sigorta
                            Danışmanlığı </p>
                    </div>
                    <div className={styles.boxOverlay}>
                        <div className="grid grid-rows-2 grid-flow-col auto-cols-fr gap-0 w-full">
                            <div className={styles.bottomli}>
                                <a href="http://www.aksamoto.com.tr" target="_blank">
									<span>
                                        <Image
                                            src="/assets/images/aksam.png"
                                            width={166}
                                            height={36}
                                            className={styles.brandlogo}
                                            alt={'www.aksamoto.com.tr'}
                                        />
                                        {/*<img src="images/aksam.png">*/}
									</span>
                                </a>
                            </div>
                            <div className={styles.bottomli}>
                                <a href="http://www.autogong.com" target="_blank">
									<span>
										{/*<img src="images/autogong.png">*/}
                                        <Image
                                            src="/assets/images/autogong.png"
                                            width={166}
                                            height={36}
                                            className={styles.brandlogo}
                                            alt={'www.autogong.com'}
                                        />
									</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`${styles.category} bg-[url('/assets/images/categories3.jpg')]`}>
                    <div className={styles.box}>
                        <h1 className='border-b text-center w-[70%] mx-auto text-[54px] font-["ralewaythin"] text-white'>İNŞAAT</h1>
                        <p className='w-[70%] text-center mx-auto text-[24px] font-["ralewayextralight"] text-white'></p>
                    </div>
                    <div className={styles.boxOverlay}>
                        <div className="grid grid-rows-1 grid-flow-col auto-cols-fr gap-0 w-full">
                            <div className={styles.bottomli}>
                                <a href="http://www.aksamoto.com.tr" target="_blank">
									<span>
                                        <Image
                                            src="/assets/images/aksam.png"
                                            width={166}
                                            height={36}
                                            className={styles.brandlogo}
                                            alt={'www.aksamoto.com.tr'}
                                        />
                                        {/*<img src="images/aksam.png">*/}
									</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:basis-1/3 sm:basis-1/2 w-full min-h-[50vh] bg-[#84736d]">01</div>
                <div className="md:basis-1/3 sm:basis-1/2 w-full min-h-[50vh] bg-[#7b6764]">
                    <div className="grid grid-rows-2 grid-flow-col auto-cols-fr gap-0 w-full h-full">
                        <div className='flex flex-col text-center items-center justify-center mx-auto my-auto px-6 text-[#b8b2a5]'>
                                <h4 className="font-['ClanPro-Thin'] text-5xl">75.000</h4>
                                <p className="font-['ralewaythin'] text-lg">Autogong Online İhale Platforumu’nda yıllık ortalama satışına
                                    aracılık edilen araç
                                </p>
                        </div>
                        <div className='flex flex-col text-center items-center justify-center mx-auto my-auto px-6 text-[#b8b2a5]'>
                                <h4 className="font-['ClanPro-Thin'] text-5xl">16.000</h4>
                                <p className="font-['ralewaythin'] text-lg">
                                    Aksam Otomotiv yıllık ortalama toplu alımı gerçekleşen araç
                                </p>
                        </div>
                        <div className='flex flex-col text-center items-center justify-center mx-auto my-auto px-6 text-[#b8b2a5]'>
                                <h4 className="font-['ClanPro-Thin'] text-5xl">91</h4>
                                <p className="font-['ralewaythin'] text-lg">81 İlde Çevre Bakanlığı Onaylı Teslim Noktası</p>
                        </div>
                        <div className='flex flex-col text-center items-center justify-center mx-auto my-auto px-6 text-[#b8b2a5]'>
                                <h4 className="font-['ClanPro-Thin'] text-5xl">140</h4>
                                <p className="font-['ralewaythin'] text-lg">81 İlde Çevre Bakanlığı Onaylı Ekosistem Bayisi</p>
                        </div>
                    </div>

                </div>
                <div className="md:basis-1/3 sm:basis-1/2 w-full min-h-[50vh] bg-[#40ddbe]">03</div>
            </div>
        </section>
    </main>
    )
}
