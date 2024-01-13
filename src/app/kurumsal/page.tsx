'use client'

import styles from './styles.module.css';

import React from "react";

export default function Test() {
    const listArray = [
        {
            id: 1,
            title: 'Tarihçe',
            description: '2001 yılında Telli Grup, sigorta ve otomotiv sektörlerine yönelik iş alanlarında hizmet vermeye başlamış ve yılda 60.000 den fazla aracın toplu alımını gerçekleştirdiği Aksam Otomotiv’i kurmuştur.',
            tDescription : '1989’ yılında Telli Grup ’u oluşturan girişimlerin temelini sağlayacak faaliyetlerle ticaret hayatına ilk adımlar atılmıştır. Bu girişim aynı zamanda Türkiye’nin hızla büyüyen sektörlerinde lider olma yolunda attığı güçlü adımların da öncüsü olmuştur.\n' +
                '\n'
        },
        {
            id: 2,
            title: 'Vizyon & Misyon',
            description: 'Telli Grup hizmet verdiği her alanda toplam kalite prensibi ile yenilikçi çözümler sunar.',
        },
        {
            id: 3, title: 'Değerlerimiz', description: 'Telli Grup öncü ve yenilikçidir, etik değerlere saygılıdır.',
        },
        {
            id: 4,
            title: 'Başkanın Mesajı',
            description: 'Değerli yatırımcılarımız, iş ortaklarımız ve çok kıymetli çalışanlarımız;' +
                'Telli Grup olarak, bünyemizde bizlere büyük başarılar getiren girişimlerimizi ve alanımızda öncü olmamızı yenilikçi, dinamik, kaliteli projeleri hayata geçirmek için gösterdiğimiz özene ve güçlü bir topluluk olmamıza borçluyuz.',
        },
        {
            id: 5,
            title: 'Varlıklarımız',
            description: 'Telli Grup sektöründe adil rekabet eder, müşterilerine akılcı ve etik kurallar çerçevesinde hizmet sunar.',
        },
        {
            id: 6,
            title: 'Kilometre Taşları',
            description: 'Telli Grup olarak Gücümüzü halkımızdan, çalışanlarımızdan, ortaklarımızdan ve müşterilerimizden alıyoruz.',
        },
        {
            id: 7, title: 'ETİK KURALLAR', description: 'ETİK KURALLAR',
        },
        {
            id: 8, title: 'Aydınlatma Metni', description: 'Aydınlatma Metni',
        },
    ]
    const [openTab, setOpenTab] = React.useState(1);
    const [title, setTitle] = React.useState(listArray[0].title);
    const [description, setDescription] = React.useState(listArray[0].tDescription);
    return (
        <>
            <main className="flex flex-col items-center justify-between">
                <section id="section-1" className={styles.banner}>
                    <div className="container mx-auto px-4 md:pt-16 md:mb-12">
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.desc}>{description }</p>
                    </div>
                </section>
                <section className='w-full text-center overflow-visible'>
                    <div className="mx-auto  w-full bg-[#ded8d4]">
                        <div className="relative lg:px-12 md:px-6  ">
                            <ul
                                className={styles.tabList}
                                role="tablist"
                            >
                                {listArray.map(i => <li key={i.id}>
                                    <a className={(openTab === i.id ? styles.activeTab : "")}
                                       onClick={e => {
                                           e.preventDefault();
                                           setOpenTab(i.id);
                                           setTitle(i.title)
                                           setDescription(i.tDescription ?? i.description)
                                       }}
                                       data-toggle="tab"
                                       href="#link1"
                                       role="tablist"
                                    >
                                        <span>{i.title}</span>
                                        <span>{i.id}</span>
                                    </a>
                                </li>)}
                            </ul>
                        </div>
                        <div className='lg:pb-16 lg:px-16 lg:mx-16'>
                            <div className='lg:mx-16  text-base text-[#333] font-["ralewayregular"]'>
                                {listArray.map(i =>
                                    <p key={i.id} className={`lg:mx-16 lg:px-16 ${(openTab === i.id ? '' : "hidden")}`}
                                       onClick={e => {
                                           e.preventDefault();
                                           setOpenTab(i.id);
                                       }}
                                       data-toggle="tab"
                                    >
                                        {i.description}
                                    </p>)}

                            </div>
                        </div>
                    </div>
                    <div className="w-full relative">

                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                            <div className=" py-5 flex-auto">
                                <div className="tab-content tab-space ">
                                    <div className={`${styles.tabContent} ${openTab === 1 ? "block" : "hidden"}`}
                                         id="link1">
                                        <p>
                                            Bununla koordineli olarak 2007 yılında faaliyete geçirdiği HYS Hasar Yönetim
                                            Sistemi sayesinde Eksper, Servis ve Sigorta şirketleri arasındaki tüm
                                            operasyonel süreçleri başarıyla yönetmeye devam etmektedir. HYS
                                            organizasyonu ile Türkiye çapında 700 Servis lokasyonu ve 50 yedek parça
                                            tedarik sağlayıcı firma ile sigorta sektörüne hizmet üretilmektedir.
                                        </p>
                                        <p>
                                            2009 Yılında kurulan Ekosistem Geri dönüşüm ile Otomotiv ve Sigorta
                                            Sektörlerine ÖTA araç ve yedek parça konularında hizmetler üretmeye devam
                                            etmektedir. Ekosistem ile de geri dönüşüm faaliyetlerine yönelerek ömrünü
                                            tamamlamış araçların ekonomiye geri kazanımını desteklerken ayı zamanda
                                            çevreye duyarlı bilincini de ortaya koymaktadır. Ekosistem ile Türkiye
                                            çapında 81 ilde 91 teslim noktası ve 140 ikinci el yedek parça sağlayıcı
                                            bayi firma ile hizmet üretilmektedir.
                                        </p>
                                        <p>
                                            2011 yılında İstanbul yap ile konut üretimi ve satışını gerçekleştirerek ilk
                                            inşaat faaliyetlerine başlarken bünyesinde geliştirdiği Avis Yapı ile de
                                            Kentsel Dönüşüm Projelerinde faaliyet göstermeye devam etmektedir.
                                        </p>
                                        <p>
                                            2013 yılında kurmuş olduğu Autogong ile sigorta şirketleri, filo kiralama
                                            şirketleri, son tüketici, servisler, otomotiv satıcıları ve Eksperlere
                                            destek olarak yılda 70.000 aracın online ihale portalında satışına aracılık
                                            sağlanmaktadır.2012 yılında kurmuş olduğu İstanbul Sigorta Acenteliği ile
                                            poliçe üretimine devam etmektedir.
                                        </p>
                                    </div>
                                    <div className={`${styles.tabContent} ${openTab === 2 ? "block" : "hidden"}`}
                                         id="link2">
                                        <p>
                                            Yürüttüğü faaliyet konularında ülkenin önde gelen saygın ve güvenilir
                                            kuruluşlarından biri olmak, müşterilerimizin ihtiyaçlarına en kapsamlı
                                            çözümleri sunarken bölgesel ve global anlamda daha büyük yatırımların altına
                                            imzamızı atmak.


                                        </p>
                                        <p>
                                            Dynamically innovate resource-leveling customer service for
                                            state of the art customer service.
                                        </p>
                                    </div>
                                    <div className={`${styles.tabContent} ${openTab === 3 ? "block" : "hidden"}`}
                                         id="link3">
                                        <p>
                                            Efficiently unleash cross-media information without
                                            cross-media value. Quickly maximize timely deliverables for
                                            real-time schemas.
                                            <br/>
                                            <br/> Dramatically maintain clicks-and-mortar solutions
                                            without functional solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}


