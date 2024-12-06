import React from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SecondHeader from '../components/SecondHeader';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
    
    // Mock data for both blogs
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

    // Get the specific blog data based on the ID
    const blogData = blogsData[id];

    if (!blogData) {
        return <div className="blog-page"><h1>Blog not found</h1></div>;
    }

    return (
        <>
            <SecondHeader />
            <div className="blog-page">
                <div className="blog-hero">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        className="blog-carousel"
                    >
                        {blogData.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="carousel-image" style={{ backgroundImage: `url(${image})` }} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="blog-content">
                    <div className="blog-header">
                        <div className="blog-meta">
                            <span className="date">{blogData.date}</span>
                            <span className="author">By {blogData.author}</span>
                        </div>
                        <h1>{blogData.title}</h1>
                    </div>
                    
                    <div className="blog-text" dangerouslySetInnerHTML={{ __html: blogData.content }} />
                </div>
            </div>
        </>
    );
};

export default InformationBlog;
