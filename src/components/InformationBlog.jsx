import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Header from '../layout/Header';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "../scss/components/_informationBlog.scss"
import blog1 from "../assets/photos/Blogs/blog-1.jpg"
import blog2 from "../assets/photos/Blogs/blog-2.jpg" 
import blog3 from "../assets/photos/Blogs/blog-3.jpg"
import blog4 from "../assets/photos/Blogs/blog-4.jpg"
import blog5 from "../assets/photos/Blogs/blog-5.png"
import blog6 from "../assets/photos/Blogs/blog-6.png"
import blog7 from "../assets/photos/Blogs/blog-7.png"

const InformationBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [swiperRef, setSwiperRef] = useState(null);
    
    const blogsData = {
        1: {
            title: "Promovimi i Veprimeve për Ndryshimet Klimatike te të Rinjët",
            date: "03 NOV 2022",
            author: "Maliq Pireci",
            images: [
                blog1,
                blog2,
                blog3,
                blog4
            ],
            content: `
                <p>Më 3 nëntor 2022, në Prizren u organizua një takim i rëndësishëm me të rinjtë nga institucione të ndryshme arsimore për të trajtuar çështjen kritike të ndryshimeve klimatike. Prezantimi, i mbajtur nga Maliq Pireci nga OJQ AKEREE, kishte për qëllim të ndërgjegjësonte dhe informonte rininë mbi shkaqet e ndryshimeve klimatike, rreziqet që ato paraqesin dhe veprimet e nevojshme për zbutjen dhe përshtatjen ndaj tyre.</p>
                
                <p>Gjatë këtij sesioni, u diskutuan tema të rëndësishme si faktorët kryesorë që shkaktojnë ndryshimet klimatike, ndikimet e tyre potenciale në komunitete dhe ekosisteme, si dhe hapat konkretë që individët dhe organizatat mund të ndërmarrin për të reduktuar emetimet dhe për të rritur qëndrueshmërinë ndaj këtyre sfidave.</p>
                
                <p>Një falënderim i veçantë shkon për studentët e Universitetit "Ukshin Hoti" Prizren, Gjimnazit "Gjon Buzuku" - Prizren, Shkollës së Mesme Ekonomike YMER Prizreni dhe Shkollës së Mesme të Lartë Teknike "11 Marsi" - Prizren. Pjesëmarrja e tyre aktive dhe idetë e tyre i dhanë vlerë të madhe diskutimit.</p>

                <p>Ky takim shënoi një hap të rëndësishëm në fuqizimin e të rinjve të Prizrenit për të luajtur një rol aktiv në adresimin e ndryshimeve klimatike dhe në ndërtimin e një të ardhmeje të qëndrueshme për të gjithë.</p>
            `
        },
        2: {
            title: "Prezantimi i Studimit për Rahovecin 2050",
            date: "03 NOV 2022",
            author: "Maliq Pireci",
            images: [
                blog5,
                blog6,
                blog7,
            ],
            content: `
                <p>Më 3 nëntor 2022, Komuna e Rahovecit priti prezantimin e studimit "Rahoveci 2050", një plan gjithëpërfshirës për reduktimin e emetimeve të gazeve serrë (GS) deri në nivelin neto zero deri në vitin 2050. Ky studim u prezantua për autoritetet komunale, përfshirë Kryetarin e Komunës, z. Smajl Latifi.</p>
                
                <p>Raporti analizoi emetimet e përgjithshme të CO2eq për vitin bazë 2018, të cilat arrinin në 221,785.5 tCO2eq/vit, dhe propozoi masa të shumta për reduktimin e këtyre emetimeve në 68,249.75 tCO2eq/vit deri në vitin 2050. Masat përfshijnë rritjen e efiçiencës së energjisë në ndërtesa komunale dhe ndriçimin publik, instalimin e paneleve diellore dhe turbinave të erës, si dhe zbatimin e sistemit me biomasë për ngrohje.</p>

                <p>Studimi gjithashtu shfaqi investimet e nevojshme prej mbi 500 milionë euro për zbatimin e këtyre masave, të ndara në skenarë të ndryshëm. Prezantimi nënvizoi rëndësinë e rolit të komunave në planifikimin dhe zbatimin e strategjive kombëtare për energji dhe klimë.</p>

                <p>Fotot e prezantimit tregojnë angazhimin e autoriteteve lokale dhe përkushtimin e tyre për të ndihmuar Rahovecin të bëhet një model për qëndrueshmërinë dhe përpjekjet kundër ndryshimeve klimatike në Kosovë.</p>
            `
        }
    };

    const blogData = blogsData[id];

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
                setIsModalOpen(false);
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

    const handleBackClick = () => {
        navigate(-1);
    };

    if (!blogData) {
        return <div className="blog-page"><h1>Blog not found</h1></div>;
    }

    return (
        <>
            <Header/>
            <div className="blog-container">
                <div className="blog-hero-section">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        className="blog-hero-carousel"
                        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                        onSwiper={setSwiperRef}
                    >
                        {blogData.images && blogData.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div 
                                    className="carousel-image" 
                                    style={{ backgroundImage: `url(${image})` }}
                                    onClick={handleImageClick}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="blog-content-wrapper">
                    <div className="blog-header-section">
                        <div className="blog-meta-info">
                            <span className="blog-date">{blogData.date}</span>
                            <span className="blog-author">By {blogData.author}</span>
                        </div>
                        <h1 className="blog-title">{blogData.title}</h1>
                    </div>
                    
                    <div className="blog-text-content" dangerouslySetInnerHTML={{ __html: blogData.content }} />
                    
                    <div className="back-button-container">
                        <button className="back-button" onClick={handleBackClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7"/>
                            </svg>
                            Back to Home
                        </button>
                    </div>
                </div>

                {isModalOpen && windowWidth <= 1024 && (
                    <div className="blog-image-modal">
                        <button className="blog-btnClose" onClick={handleModalClose}>
                            <svg viewBox="0 0 24 24">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            </svg>
                        </button>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation={true}
                            pagination={{ clickable: true }}
                            initialSlide={activeSlide}
                            className="blog-modal-carousel"
                            loop={false}
                        >
                            {blogData.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} alt={`Slide ${index + 1}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </div>
        </>
    );
};

export default InformationBlog;
