import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from './Blog';
import Header from '../layout/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../scss/components/_blogPage.scss';
import sch2024_1 from '../assets/photos/2024/sch2024-1.jpg';
import sch2024_2 from '../assets/photos/2024/sch2024-2.jpg';
import sch2024_3 from '../assets/photos/2024/sch2024-3.jpg';
import sch2024_4 from '../assets/photos/2024/sch2024-4.jpg';
import sch2024_5 from '../assets/photos/2024/sch2024-5.jpg';
import sch2024_6 from '../assets/photos/2024/sch2024-6.jpg';
import sch2024_7 from '../assets/photos/2024/sch2024-7.jpg';
import sch2024_8 from '../assets/photos/2024/sch2024-8.jpg';
import sch2024_9 from '../assets/photos/2024/sch2024-9.jpg';
import sch2024_10 from '../assets/photos/2024/sch2024-10.jpg';
import sch2024_11 from '../assets/photos/2024/sch2024-11.jpg';
import sch2024_12 from '../assets/photos/2024/sch2024-12.jpg';
import sch2024_13 from '../assets/photos/2024/sch2024-13.jpg';
import sch2024_14 from '../assets/photos/2024/sch2024-14.jpg';
import sch2024_15 from '../assets/photos/2024/sch2024-15.jpg';
import sch2024_16 from '../assets/photos/2024/sch2024-16.jpg';
import sch2024_17 from '../assets/photos/2024/sch2024-17.jpg';
import sch2024_18 from '../assets/photos/2024/sch2024-18.jpg';

import sch2023_1 from '../assets/photos/2023/sch2023-1.jpg';
import sch2023_2 from '../assets/photos/2023/sch2023-2.jpg';
import sch2023_3 from '../assets/photos/2023/sch2023-3.jpg';
import sch2023_4 from '../assets/photos/2023/sch2023-4.jpg';
import sch2023_5 from '../assets/photos/2023/sch2023-5.jpg';
import sch2023_6 from '../assets/photos/2023/sch2023-6.jpg';
import sch2023_7 from '../assets/photos/2023/sch2023-7.jpg';
import sch2023_8 from '../assets/photos/2023/sch2023-8.jpg';
import sch2023_9 from '../assets/photos/2023/sch2023-9.jpg';
import sch2023_10 from '../assets/photos/2023/sch2023-10.jpg';
import sch2023_11 from '../assets/photos/2023/sch2023-11.jpg';
import sch2023_12 from '../assets/photos/2023/sch2023-12.jpg';
import sch2023_13 from '../assets/photos/2023/sch2023-13.jpg';
import sch2023_14 from '../assets/photos/2023/sch2023-14.jpg';
import sch2023_15 from '../assets/photos/2023/sch2023-15.jpg';
import sch2023_16 from '../assets/photos/2023/sch2023-16.jpg';
import sch2023_17 from '../assets/photos/2023/sch2023-17.jpg';
import sch2023_18 from '../assets/photos/2023/sch2023-18.jpg';
import sch2023_19 from '../assets/photos/2023/sch2023-19.jpg';
import sch2023_20 from '../assets/photos/2023/sch2023-20.jpg';
import sch2023_21 from '../assets/photos/2023/sch2023-21.jpg';

import sch2022_1 from '../assets/photos/2022/sch2022-1.jpg';
import sch2022_2 from '../assets/photos/2022/sch2022-2.jpg';
import sch2022_3 from '../assets/photos/2022/sch2022-3.jpg';
import sch2022_4 from '../assets/photos/2022/sch2022-4.jpg';
import sch2022_5 from '../assets/photos/2022/sch2022-5.jpg';
import sch2022_6 from '../assets/photos/2022/sch2022-6.jpg';
import sch2022_7 from '../assets/photos/2022/sch2022-7.jpg';
import sch2022_8 from '../assets/photos/2022/sch2022-8.jpg';
import sch2022_9 from '../assets/photos/2022/sch2022-9.jpg';
import sch2022_10 from '../assets/photos/2022/sch2022-10.jpg';
import sch2022_11 from '../assets/photos/2022/sch2022-11.jpg';
import sch2022_12 from '../assets/photos/2022/sch2022-12.jpg';
import sch2022_13 from '../assets/photos/2022/sch2022-13.jpg';
import sch2022_14 from '../assets/photos/2022/sch2022-14.jpg';
import sch2022_15 from '../assets/photos/2022/sch2022-15.jpg';
import sch2022_16 from '../assets/photos/2022/sch2022-16.jpg';
import sch2022_17 from '../assets/photos/2022/sch2022-17.jpg';
import sch2022_18 from '../assets/photos/2022/sch2022-18.jpg';
import sch2022_19 from '../assets/photos/2022/sch2022-19.jpg';
import sch2022_20 from '../assets/photos/2022/sch2022-20.jpg';
import sch2022_21 from '../assets/photos/2022/sch2022-21.jpg';
import sch2022_22 from '../assets/photos/2022/sch2022-22.jpg';
import sch2022_23 from '../assets/photos/2022/sch2022-23.jpg';
import sch2022_24 from '../assets/photos/2022/sch2022-24.jpg';
import sch2022_25 from '../assets/photos/2022/sch2022-25.jpg';

import sch2018_1 from '../assets/photos/2018/sch2018-1.jpg';
import sch2018_2 from '../assets/photos/2018/sch2018-2.jpg';
import sch2018_3 from '../assets/photos/2018/sch2018-3.jpg';
import sch2018_4 from '../assets/photos/2018/sch2018-4.jpg';
import sch2018_5 from '../assets/photos/2018/sch2018-5.jpg';
import sch2018_6 from '../assets/photos/2018/sch2018-6.jpg';
import sch2018_7 from '../assets/photos/2018/sch2018-7.jpg';
import sch2018_8 from '../assets/photos/2018/sch2018-8.jpg';
import sch2018_9 from '../assets/photos/2018/sch2018-9.jpg';
import sch2018_10 from '../assets/photos/2018/sch2018-10.jpg';
import sch2018_11 from '../assets/photos/2018/sch2018-11.jpg';
import sch2018_12 from '../assets/photos/2018/sch2018-12.jpg';
import sch2018_13 from '../assets/photos/2018/sch2018-13.jpg';
import sch2018_14 from '../assets/photos/2018/sch2018-14.jpg';

import sch2017_1 from '../assets/photos/2017/sch2017-1.jpg';
import sch2017_2 from '../assets/photos/2017/sch2017-2.jpg';
import sch2017_3 from '../assets/photos/2017/sch2017-3.jpg';
import sch2017_4 from '../assets/photos/2017/sch2017-4.jpg';
import sch2017_5 from '../assets/photos/2017/sch2017-5.jpg';
import sch2017_6 from '../assets/photos/2017/sch2017-6.jpg';
import sch2017_7 from '../assets/photos/2017/sch2017-7.jpg';
import sch2017_8 from '../assets/photos/2017/sch2017-8.jpg';
import sch2017_9 from '../assets/photos/2017/sch2017-9.jpg';
import sch2017_10 from '../assets/photos/2017/sch2017-10.jpg';
import sch2017_11 from '../assets/photos/2017/sch2017-11.jpg';
import sch2017_12 from '../assets/photos/2017/sch2017-12.jpg';
import sch2017_13 from '../assets/photos/2017/sch2017-13.jpg';
import sch2017_14 from '../assets/photos/2017/sch2017-14.jpg';

import sch2016_1 from '../assets/photos/2016/sch2016-1.jpg';
import sch2016_2 from '../assets/photos/2016/sch2016-2.jpg';
import sch2016_3 from '../assets/photos/2016/sch2016-3.jpg';
import sch2016_4 from '../assets/photos/2016/sch2016-4.jpg';
import sch2016_5 from '../assets/photos/2016/sch2016-5.jpg';
import sch2016_6 from '../assets/photos/2016/sch2016-6.jpg';
import sch2016_7 from '../assets/photos/2016/sch2016-7.jpg';
import sch2016_8 from '../assets/photos/2016/sch2016-8.jpg';
import sch2016_9 from '../assets/photos/2016/sch2016-9.jpg';
import sch2016_10 from '../assets/photos/2016/sch2016-10.jpg';
import sch2016_11 from '../assets/photos/2016/sch2016-11.jpg';
import sch2016_12 from '../assets/photos/2016/sch2016-12.jpg';
import sch2016_13 from '../assets/photos/2016/sch2016-13.jpg';
import sch2016_14 from '../assets/photos/2016/sch2016-14.jpg';
import sch2016_15 from '../assets/photos/2016/sch2016-15.jpg';
import sch2016_16 from '../assets/photos/2016/sch2016-16.jpg';
import sch2016_17 from '../assets/photos/2016/sch2016-17.jpg';

import sch2015_1 from '../assets/photos/2015/sch2015-1.jpg';
import sch2015_2 from '../assets/photos/2015/sch2015-2.jpg';
import sch2015_3 from '../assets/photos/2015/sch2015-3.jpg';
import sch2015_4 from '../assets/photos/2015/sch2015-4.jpg';
import sch2015_5 from '../assets/photos/2015/sch2015-5.jpg';
import sch2015_6 from '../assets/photos/2015/sch2015-6.jpg';
import sch2015_7 from '../assets/photos/2015/sch2015-7.jpg';
import sch2015_8 from '../assets/photos/2015/sch2015-8.jpg';
import sch2015_9 from '../assets/photos/2015/sch2015-9.jpg';
import sch2015_10 from '../assets/photos/2015/sch2015-10.jpg';
import sch2015_11 from '../assets/photos/2015/sch2015-11.jpg';
import sch2015_12 from '../assets/photos/2015/sch2015-12.jpg';
import sch2015_13 from '../assets/photos/2015/sch2015-13.jpg';

import sch2014_1 from '../assets/photos/2014/sch2014-1.jpg';
import sch2014_2 from '../assets/photos/2014/sch2014-2.jpg';
import sch2014_3 from '../assets/photos/2014/sch2014-3.jpg';
import sch2014_4 from '../assets/photos/2014/sch2014-4.jpg';
import sch2014_5 from '../assets/photos/2014/sch2014-5.jpg';
import sch2014_6 from '../assets/photos/2014/sch2014-6.jpg';
import sch2014_7 from '../assets/photos/2014/sch2014-7.jpg';

export default function BlogPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [swiperRef, setSwiperRef] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleImageClick = () => {
        if (windowWidth <= 1024) {
            setIsModalOpen(true);
            if (swiperRef) {
                swiperRef.autoplay.stop();
            }
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        if (swiperRef) {
            swiperRef.autoplay.start();
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                handleModalClose();
            }
        };

        if (isModalOpen) {
            document.body.classList.add('blog-modal-open');
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.classList.remove('blog-modal-open');
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen]);

    const blogDetails = {
        1: {
            title: "Hyrje",
            intro: "Shkolla për Ndryshime Klimatike dhe Tranzicion të Energjisë 2024, organizuar nga Asociacioni Kosovar për Energji të dhe Efiçiencë të Energjisë (AKEREE), në mbështetje të Qeverisë Gjermane – GIZ Kosova, mblodhi studentë nga universitete të ndryshme të Kosovës.",
            objectives: [
                "Efiçiencën e Energjisë",
                "Energjitë e Ripërtëritshme", 
                "Mjedisin dhe Ndryshimet Klimatike"
            ],
            days: [
                {
                    date: "21.11.2024",
                    activities: [
                        "Pjesëmarrësit u njohën me rëndësinë e tranzicionit energjetik dhe ndikimet e ndryshimeve klimatike.",
                        {
                            title: "Diskutime për:",
                            points: [
                                "Marrëveshja e Parisit",
                                "Agjenda e Gjelbër e BE-së",
                                "Masat e Kosovës për energjinë dhe ndryshimet klimatike"
                            ]
                        },
                        "Pasdite: Punime në grupe me fokus në përgatitjen e temave përkatëse."
                    ]
                },
                {
                    date: "22.11.2024",
                    activities: [
                        {
                            title: "Teknologjitë e energjive të ripërtëritshme:",
                            points: [
                                "Ndikimi i tyre",
                                "Raste studimore të projekteve të suksesshme"
                            ]
                        },
                        {
                            title: "Efiçienca e energjisë:",
                            points: [
                                "Ndërtesat",
                                "Pajisjet elektro-shtëpiake",
                                "Ndriçimi",
                                "Transporti",
                                "Roli i ndryshimeve të sjelljes në ruajtjen e energjisë"
                            ]
                        },
                        {
                            title: "Sistemi energjetik i Kosovës:",
                            points: [
                                "Legjislacioni për energjitë e ripërtëritshme",
                                "Siguria e furnizimit",
                                "Konsumi i energjisë"
                            ]
                        },
                        {
                            title: "Pasdite:",
                            points: [
                                "Aktivitete praktike",
                                "Punime në grupe"
                            ]
                        }
                    ]
                },
                {
                    date: "23.11.2024",
                    activities: [
                        {
                            title: "Debate për:",
                            points: [
                                "Efiçiencën e energjisë",
                                "Integrimin e burimeve të ripërtëritshme",
                                "Dekarbonizimin"
                            ]
                        },
                        {
                            title: "Diskutime për:",
                            points: [
                                "Tranzicionin e energjisë",
                                "Qëndrueshmërinë urbane",
                                "Sfidat dhe teknologjitë për objektivat klimatike 2050"
                            ]
                        }
                    ]
                },
                {
                    date: "24.11.2024",
                    activities: [
                        {
                            title: "Prezantime për:",
                            points: [
                                "Menaxhimi i qëndrueshëm i pyjeve",
                                "Biomasa si burim energjetik",
                                "Analiza e rasteve studimore nga AKEREE",
                                "Diskutim për masat e emetimeve neutrale të karbonit deri në 2050"
                            ]
                        }
                    ]
                },
                {
                    date: "25.11.2024",
                    activities: [
                        "Prezantimet përfundimtare të grupeve",
                        "Dorëzimi i raporteve narrative",
                        "Ceremonia e certifikimit"
                    ]
                }
            ],
            conclusion: "Shkolla për Ndryshime Klimatike 2024 shërbeu si një platformë edukative dhe bashkëpunuese për zhvillimin e ideve dhe politikave të qëndrueshme në sektorin energjetik dhe klimatik të Kosovës.",
            images: [
                sch2024_1,
                sch2024_2,
                sch2024_3,
                sch2024_4,
                sch2024_5,
                sch2024_6,
                sch2024_7,
                sch2024_8,
                sch2024_9,
                sch2024_10,
                sch2024_11,
                sch2024_12,
                sch2024_13,
                sch2024_14,
                sch2024_15,
                sch2024_16,
                sch2024_17,
                sch2024_18,
            ]
        },
        2:{
            title: "Hyrje",
            intro: "Shkolla Verore për Ekonominë me Karbon të Ulët 2023, e organizuar nga Asociacioni Kosovar për Energji të Ripërtëritshme dhe Efiçiencë të Energjisë (AKEREE) me mbështetje financiare nga GIZ Kosova, u mbajt nga 2 deri më 6 tetor 2023 në hotel 'Magra Austria' në Bogë, Rugovë. Ky event mblodhi studentë nga universitete të ndryshme të Kosovës dhe përfshiu tema të ndryshme mbi dekarbonizimin dhe energjinë e ripërtëritshme.",
            days: [
                {
                    date: "02.10.2023",
                    activities: [
                        "Hapja përfshiu prezantime mbi konceptet bazë të ekonomisë me karbon të ulët, ndryshimet klimatike dhe përpjekjet ndërkombëtare për përballjen me to.",
                        {
                            title: "Diskutime për:",
                            points: [
                                "Tregjet e karbonit",
                                "Marrëveshja e Parisit",
                                "Politika e BE për klimën dhe energjinë",
                                "Agjenda e Gjelbër për Ballkanin Perëndimor"
                            ]
                        }
                    ]
                },
                {
                    date: "03.10.2023",
                    activities: [
                        "Fokusi ishte në politikat kombëtare dhe ndërkombëtare për dekarbonizimin dhe efiçiencën e energjisë.",
                        {
                            title: "Prezantime për:",
                            points: [
                                "Roli i energjive të ripërtëritshme në sistemin energjetik të Kosovës",
                                "Praktikat më të mira për menaxhimin e energjisë dhe mbeturinave"
                            ]
                        }
                    ]
                },
                {
                    date: "04.10.2023",
                    activities: [
                        {
                            title: "Vizita studimore:",
                            points: [
                                "Parqe të energjisë diellore",
                                "Hidrocentrale",
                                "Deponi rajonale për menaxhimin e mbeturinave"
                            ]
                        },
                        "Diskutime mbi funksionimin e teknologjive të energjisë së ripërtëritshme"
                    ]
                },
                {
                    date: "05.10.2023",
                    activities: [
                        "Njohja me teknologjitë e energjisë së ripërtëritshme",
                        "Raste studimore të implementimit të suksesshëm të këtyre teknologjive në Kosovë",
                        {
                            title: "Aktivitete:",
                            points: [
                                "Punime në grupe",
                                "Diskutime mbi planifikimin e energjisë dhe klimës"
                            ]
                        }
                    ]
                },
                {
                    date: "06.10.2023",
                    activities: [
                        {
                            title: "Prezantime grupore për:",
                            points: [
                                "Efiçienca e energjisë",
                                "Roli i energjive të ripërtëritshme",
                                "Ndryshimet klimatike",
                                "Menaxhimi i mbeturinave"
                            ]
                        },
                        "Vlerësimi i pjesëmarrësve",
                        "Ceremonia e certifikimit"
                    ]
                }
            ],
            conclusion: "Eventi u vlerësua si shumë i suksesshëm dhe një hap i rëndësishëm drejt zhvillimit të një ekonomie me karbon të ulët në Kosovë.",
            images: [
                sch2023_1,
                sch2023_2,
                sch2023_3,
                sch2023_4,
                sch2023_5,
                sch2023_6,
                sch2023_7,
                sch2023_8,
                sch2023_9,
                sch2023_10,
                sch2023_11,
                sch2023_12,
                sch2023_13,
                sch2023_14,
                sch2023_15,
                sch2023_16,
                sch2023_17,
                sch2023_18,
                sch2023_19,
                sch2023_20,
                sch2023_21
            ]
        },
        3: {
            title: "Hyrje",
            intro: "Shkolla Verore për Ndryshime Klimatike 2022, organizuar nga Asociacioni Kosovar për Energji të Ripërtëritshme dhe Efiçiencë të Energjisë (AKEREE) me mbështetjen financiare të Zyrës për Bashkëpunim Zviceran - Ambasada e Zvicrës në Prishtinë, u mbajt nga data 28 maj deri më 30 korrik 2022. Aktivitetet përfshinë leksione, diskutime, vizita studimore dhe punë në grupe me qëllim sensibilizimin dhe edukimin për çështjet klimatike dhe energjinë e ripërtëritshme.",
            days: [
                {
                    date: "Prezantime dhe Leksione",
                    activities: [
                        {
                            title: "Temat kryesore:",
                            points: [
                                "Ndryshimet klimatike dhe masat për zbutjen e tyre, energjia e ripërtëritshme dhe efiçienca e energjisë",
                                "Politikat ndërkombëtare dhe ato të BE-së për klimën dhe energjinë",
                                "Sistemi elektro-energjetik i Kosovës dhe ndikimet e tij mjedisore"
                            ]
                        }
                    ]
                },
                {
                    date: "Vizita Studimore",
                    activities: [
                        {
                            title: "Vizitat përfshinë:",
                            points: [
                                "Impiantet për prodhimin e energjisë nga burime të ripërtëritshme, si parku solar në Pejë dhe Hidrocentrali i Radacit",
                                "Deponia e mbeturinave në Lutogllavë për të parë menaxhimin e mbetjeve"
                            ]
                        }
                    ]
                },
                {
                    date: "Hulumtime dhe Anketime",
                    activities: [
                        {
                            title: "Aktivitetet hulumtuese:",
                            points: [
                                "Anketimi mbi perceptimin e popullatës së Rahovecit për ndryshimet klimatike dhe emetimet e gazrave serrë",
                                "Studime mbi masat për zvogëlimin e gazrave serrë dhe adaptimin ndaj ndryshimeve klimatike"
                            ]
                        }
                    ]
                },
                {
                    date: "Aktivitete me Grupet Punues",
                    activities: [
                        {
                            title: "Puna në grupe përfshiu:",
                            points: [
                                "Dizajnimi i fushatave për kursimin e energjisë",
                                "Përmirësimi i menaxhimit të mbeturinave për reduktimin e emetimeve",
                                "Diskutime për përfshirjen e çështjeve klimatike në planet komunale zhvillimore"
                            ]
                        }
                    ]
                },
                {
                    date: "Aktivitete në Natyrë",
                    activities: [
                        "Ecje dhe diskutime mbi ndikimin e ndryshimeve klimatike në biodiversitet dhe gjendjen e lumenjve në Kosovë"
                    ]
                }
            ],
            conclusion: "Shkolla u përmbyll me prezantime nga pjesëmarrësit dhe shpërndarjen e çertifikatave, duke u cilësuar si një sukses i madh falë angazhimit të studentëve, ligjëruesve dhe organizatorëve.",
            images: [
                sch2022_1,
                sch2022_2,
                sch2022_3,
                sch2022_4,
                sch2022_5,
                sch2022_6,
                sch2022_7,
                sch2022_8,
                sch2022_9,
                sch2022_10,
                sch2022_11,
                sch2022_12,
                sch2022_13,
                sch2022_14,
                sch2022_15,
                sch2022_16,
                sch2022_17,
                sch2022_18,
                sch2022_19,
                sch2022_20,
                sch2022_21,
                sch2022_22,
                sch2022_23,
                sch2022_24,
                sch2022_25
            ]
        },
        4: {
            title: "Hyrje",
            intro: "Shkolla Verore për Energji të Pastër, organizuar nga Asociacioni Kosovar për Energji të Ripërtëritshme dhe Efiçiencë të Energjisë (AKEREE) me mbështetje të GIZ-it dhe Qeverisë Gjermane, u mbajt nga 3 deri më 7 shtator 2018 në Bogë, Pejë. Pjesëmarrës ishin studentë nga universitete të Kosovës dhe Shqipërisë, të cilët zhvilluan aktivitete edukative dhe praktike mbi energjinë e pastër dhe efiçiencën energjetike.",
            days: [
                {
                    date: "03.09.2018",
                    activities: [
                        {
                            title: "Prezantime për:",
                            points: [
                                "Politikat energjetike të BE-së dhe Kosovës",
                                "Ngrohja globale dhe ndryshimet klimatike",
                                "Protokolli i Kyotos",
                                "Roli i pyjeve në sekuestrimin e karbonit"
                            ]
                        },
                        "Puna në grupe gjatë sesionit të pasdites"
                    ]
                },
                {
                    date: "04.09.2018",
                    activities: [
                        {
                            title: "Tranzicioni energjetik dhe burimet e ripërtëritshme:",
                            points: [
                                "Energjia diellore",
                                "Energjia e biomasës",
                                "Energjia gjeotermale",
                                "Energjia ujore",
                                "Energjia e erës",
                                "Politikat për promovimin e tyre"
                            ]
                        },
                        "Puna në grupe",
                        "Aktivitete në natyrën e Rugovës"
                    ]
                },
                {
                    date: "05.09.2018",
                    activities: [
                        {
                            title: "Efiçienca energjetike (EE) në:",
                            points: [
                                "Ndërtesa",
                                "Pajisje elektrike",
                                "Ndriçim",
                                "Transport"
                            ]
                        },
                        {
                            title: "Vizita studimore:",
                            points: [
                                "Hidrocentrali 'Drini i Bardhë'",
                                "Burimi i Drinit të Bardhë"
                            ]
                        }
                    ]
                },
                {
                    date: "06.09.2018",
                    activities: [
                        {
                            title: "Sesioni paradite:",
                            points: [
                                "Menaxhimi komunal i energjisë",
                                "Planet komunale për energji të qëndrueshme"
                            ]
                        },
                        "Puna në grupe gjatë sesionit të pasdites"
                    ]
                },
                {
                    date: "07.09.2018",
                    activities: [
                        "Prezantimi i projekteve nga grupet punuese",
                        "Shpërndarja e certifikatave"
                    ]
                }
            ],
            conclusion: "Shkolla përfundoi me prezantimin e projekteve nga grupet punuese dhe shpërndarjen e certifikatave. GIZ dha mbështetje të vlefshme financiare dhe organizative për suksesin e kësaj iniciative.",
            images: [
                sch2018_1,
                sch2018_2,
                sch2018_3,
                sch2018_4,
                sch2018_5,
                sch2018_6,
                sch2018_7,
                sch2018_8,
                sch2018_9,
                sch2018_10,
                sch2018_11,
                sch2018_12,
                sch2018_13,
                sch2018_14
            ]
        },
        5: {
            title: "Hyrje",
            intro: "Shkolla Verore 2017 për Efiçiencën e Energjisë (EE), Burimet e Ripërtëritshme të Energjisë (BRE), dhe Menaxhimin e Mbeturinave (MM), organizuar nga AKEREE dhe EcoDES Studio me mbështetjen e GIZ-it, u mbajt në Durrës nga 6-10 nëntor 2017. Në këtë shkollë morën pjesë 30 studentë nga universitete të Kosovës dhe Shqipërisë.",
            days: [
                {
                    date: "06.11.2017",
                    activities: [
                        {
                            title: "Temat e diskutuara:",
                            points: [
                                "Politikat energjetike në Kosovë dhe Shqipëri",
                                "Politikat e BE-së për energjinë dhe mbeturinat",
                                "Roli i aktorëve kryesorë në menaxhimin e mbeturinave"
                            ]
                        },
                        "Puna në grupe gjatë sesionit të pasdites"
                    ]
                },
                {
                    date: "07.11.2017",
                    activities: [
                        {
                            title: "Diskutime për:",
                            points: [
                                "Efiçienca e energjisë në ndërtesa, pajisje elektro-shtëpiake dhe transport",
                                "Përvojat me promovimin e efiçiencës për konsumatorët familjarë",
                                "Planifikimi dhe trajtimi i mbeturinave lokale"
                            ]
                        },
                        "Puna në grupe gjatë sesionit të pasdites"
                    ]
                },
                {
                    date: "08.11.2017",
                    activities: [
                        {
                            title: "Prezantime për:",
                            points: [
                                "Bazat për planet komunale të energjisë",
                                "Planifikimi i qëndrueshëm energjetik",
                                "Aspektet financiare të menaxhimit të mbeturinave",
                                "Rikuperimi i kostove dhe skemat e grumbullimit të tarifave"
                            ]
                        },
                        "Puna në grupe gjatë sesionit të pasdites"
                    ]
                },
                {
                    date: "09.11.2017",
                    activities: [
                        {
                            title: "Temat e trajtuara:",
                            points: [
                                "BRE-të: energjia diellore, e erës, biomasa dhe gjeotermale",
                                "Shembuj praktikë të përdorimit të BRE-ve",
                                "Monitorimi i menaxhimit të mbeturinave urbane",
                                "Informimi dhe ndërgjegjësimi publik"
                            ]
                        },
                        "Puna në grupe gjatë sesionit të pasdites"
                    ]
                }
            ],
            conclusion: "Ky aktivitet u fokusua në ndarjen e njohurive dhe zhvillimin e aftësive praktike për tema të qëndrueshmërisë dhe menaxhimit mjedisor.",
            images: [
                sch2017_1,
                sch2017_2,
                sch2017_3,
                sch2017_4,
                sch2017_5,
                sch2017_6,
                sch2017_7,
                sch2017_8,
                sch2017_9,
                sch2017_10,
                sch2017_11,
                sch2017_12,
                sch2017_13,
                sch2017_14
            ]
        },
        6: {
            title: "Hyrje",
            intro: "Shkolla Verore 2016 për Efiçiencën e Energjisë dhe Burimet e Ripërtëritshme të Energjisë, e organizuar nga AKEREE me mbështetje të KAS-it, u zhvillua nga data 10 deri më 14 tetor 2016. Në të morën pjesë studentë nga 15 programe studimi të institucioneve të ndryshme universitare në Kosovë.",
            days: [
                {
                    date: "10.10.2016",
                    activities: [
                        {
                            title: "Aktivitetet e ditës:",
                            points: [
                                "Prezentime mbi sektorin e energjisë në Kosovë",
                                "Prezentime mbi sistemin elektroenergjetik",
                                "Punë në grupe"
                            ]
                        }
                    ]
                },
                {
                    date: "11.10.2016", 
                    activities: [
                        {
                            title: "Sesioni i mëngjesit - Prezentime për:",
                            points: [
                                "Burimet e ripërtëritshme të energjisë (diellore, biomasa dhe gjeotermale)",
                                "Efiçienca e energjisë",
                                "Roli i nivelit lokal në përmbushjen e kërkesave të BE-së"
                            ]
                        },
                        {
                            title: "Sesioni i pasdites:",
                            points: [
                                "Vizitë në muzeun e hidrocentralit në Prizren"
                            ]
                        }
                    ]
                },
                {
                    date: "12.10.2016",
                    activities: [
                        {
                            title: "Sesioni i mëngjesit - Prezentime për:",
                            points: [
                                "Energjia nga burimet ujore dhe era",
                                "Menaxhimi i energjisë",
                                "Planet komunale për efiçiencën e energjisë",
                                "Ndryshimet klimatike"
                            ]
                        },
                        {
                            title: "Sesioni i pasdites:",
                            points: [
                                "Puna në grupe"
                            ]
                        }
                    ]
                }
            ],
            conclusion: "Shkolla synonte rritjen e ndërgjegjësimit dhe aftësive në fushën e energjisë së qëndrueshme dhe efiçiencës së energjisë.",
            images: [
                sch2016_1,
                sch2016_2,
                sch2016_3,
                sch2016_4,
                sch2016_5,
                sch2016_6,
                sch2016_7,
                sch2016_8,
                sch2016_9,
                sch2016_10,
                sch2016_11,
                sch2016_12,
                sch2016_13,
                sch2016_14,
                sch2016_15,
                sch2016_16,
                sch2016_17
            ]
        },
        7: {
            title: "Hyrje",
            intro: "Nga 27-31 Korrik 2015, në Bogë të Pejës, përfunduan me sukses punimet e Shkollës Verore për Efiçiencë të Energjisë (EE) dhe Burime të Ripërtëritshme të Energjisë (BRE), organizuar nga Asociacioni Kosovar për Energji të Ripërtëritshme dhe Efiçiencë të Energjisë (AKEREE), me mbështetjen e GIZ, UNDP, dhe Konrad Adenauer Stiftung (KAS). Pjesëmarrës ishin 24 studentë nga universitete dhe kolegje të ndryshme të Kosovës.",
            days: [
                {
                    date: "Programi i Shkollës",
                    activities: [
                        {
                            title: "Ligjërata mbi temat:",
                            points: [
                                "Energjia diellore",
                                "Energjia gjeotermike", 
                                "Energjia nga biomasa",
                                "Efikasiteti i energjisë",
                                "Roli i qeverisjes komunale në EE"
                            ]
                        },
                        {
                            title: "Aktivitete praktike:",
                            points: [
                                "Demonstrime praktike të gjenerimit të energjisë nga era dhe dielli nga Dr. Shpëtim Lajqi",
                                "Vizita studimore në hidrocentralin e Radavcit dhe burimin e Drinit të Bardhë",
                                "Punë në grupe për zgjidhjen e detyrave praktike",
                                "Prezantime të rezultateve nga grupet e studentëve",
                                "Debat i hapur mes studentëve dhe përfaqësuesve të organizatave mbështetëse dhe institucioneve qeveritare"
                            ]
                        }
                    ]
                }
            ],
            conclusion: "AKEREE falënderoi mbështetësit dhe shprehu dëshirën për organizimin e edicionit të ardhshëm në 2016.",
            images: [
                sch2015_1,
                sch2015_2,
                sch2015_3,
                sch2015_4,
                sch2015_5,
                sch2015_6,
                sch2015_7,
                sch2015_8,
                sch2015_9,
                sch2015_10,
                sch2015_11,
                sch2015_12,
                sch2015_13
            ]
        },
        8: {
            title: "Hyrje",
            intro: "Shkolla Verore për Efiçiencën e Energjisë dhe Burimet e Ripërtëritshme të Energjisë 2014, e organizuar nga AKEREE me mbështetje nga GIZ-ORF-EE, UNDP, KAS dhe Komuna e Dragashit, ka filluar punimet më 14 korrik. Një nga temat e prezantuara nga Dr. Shpëtim Lajqi ka qenë 'Dizajnimi, fabrikimi dhe instalimi i sistemeve të vogla për gjenerimin e energjisë elektrike nga resurset ujore', ku është fokusuar në mikro-hidro turbinën e tipit Turgo, e cila është dizajnuar dhe prodhuar nga vetë profesori. Pjesëmarrës në shkollë janë studentë nga programe të ndryshme studimore në nivelin bachelor dhe master nga institucione të ndryshme arsimore.",
            days: [
                {
                    date: "Programi i Shkollës",
                    activities: [
                        {
                            title: "Temat kryesore:",
                            points: [
                                "Dizajnimi dhe fabrikimi i sistemeve të vogla hidroenergjetike",
                                "Mikro-hidro turbina e tipit Turgo",
                                "Efiçienca e energjisë dhe burimet e ripërtëritshme"
                            ]
                        }
                    ]
                }
            ],
            conclusion: "Shkolla u përmbyll me sukses duke ofruar njohuri praktike dhe teorike për studentët pjesëmarrës.",
            images: [
                sch2014_1,
                sch2014_2,
                sch2014_3,
                sch2014_4,
                sch2014_5,
                sch2014_6,
                sch2014_7
            ]

        }
    };

    const post = blogPosts.find(post => post.id === parseInt(id));
    const details = blogDetails[id];

    if (!post || !details) {
        return <div>Blog post not found</div>;
    }

    const renderContent = () => {
        if (details.intro) {
            return (
                <>
                    <h2>Hyrje</h2>
                    <p>{details.intro}</p>
                    
                    {details.objectives && (
                        <>
                            <h3>Objektivat</h3>
                            <ul>
                                {details.objectives.map((objective, index) => (
                                    <li key={index}>{objective}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    {details.days && details.days.map((day, index) => (
                        <div key={index} className="day-section">
                            <h3>Data: {day.date}</h3>
                            <div className="activities">
                                {day.activities.map((activity, actIndex) => (
                                    <div key={actIndex} className="activity">
                                        {typeof activity === 'string' ? (
                                            <p>{activity}</p>
                                        ) : (
                                            <>
                                                <h4>{activity.title}</h4>
                                                <ul>
                                                    {activity.points.map((point, pointIndex) => (
                                                        <li key={pointIndex}>{point}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {details.conclusion && (
                        <>
                            <h3>Përfundim</h3>
                            <p>{details.conclusion}</p>
                        </>
                    )}
                </>
            );
        } else if (details.fullContent) {
            return <p>{details.fullContent}</p>;
        }
    };

    return (
        <div className="summer-school-blog">
            <Header />
            <div className="summer-school-blog-content">
                <h1>{post.title}</h1>
                <div className="summer-school-metadata">
                    <span>{post.date}</span>
                    <span>{post.author}</span>
                </div>
                <div className="summer-school-blog-hero">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        className="summer-school-carousel"
                        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                        onSwiper={setSwiperRef}
                    >
                        {details.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div 
                                    className="summer-school-carousel-image" 
                                    style={{ backgroundImage: `url(${image})` }}
                                    onClick={handleImageClick}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {isModalOpen && windowWidth <= 1024 && (
                    <div className="summer-school-image-modal">
                        <button className="summer-school-modal-close" onClick={handleModalClose}>
                            <svg viewBox="0 0 24 24">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            </svg>
                        </button>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            initialSlide={activeSlide}
                            className="summer-school-modal-carousel"
                            loop={false}
                        >
                            {details.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} alt={`Slide ${index + 1}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}

                <div className="summer-school-content">
                    {renderContent()}
                </div>
                <button className="summer-school-back-button" onClick={() => { 
                    navigate(-1); 
                }}>← Back</button>
            </div>
        </div>
    );
}
