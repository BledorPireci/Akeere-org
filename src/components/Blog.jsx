import React from 'react';
import "../scss/components/_blog.scss"
import { animated, useSpring } from '@react-spring/web';
import { Link } from 'react-router-dom';
import sch2024_blog from '../assets/photos/2024/sch2024-blog.jpg';
import sch2023_blog from '../assets/photos/2023/sch2023-3.jpg';
import sch2022_blog from '../assets/photos/2022/sch2022-blog.jpg';
import sch2018_blog from '../assets/photos/2018/sch2018-blog.jpg';
import sch2017_blog from '../assets/photos/2017/sch2017-blog.jpg';
import sch2016_blog from '../assets/photos/2016/sch2016-blog.jpg';
import sch2015_blog from '../assets/photos/2015/sch2015-13.jpg';
import sch2014_blog from '../assets/photos/2014/sch2014-5.jpg';

export const blogPosts = [
    {
        "id": 1,
        "image": sch2024_blog,
        "title": "Përmbledhje e Shkollës për Ndryshime Klimatike dhe Tranzicion të Energjisë 2024",
        "description": "Shkolla për Ndryshime Klimatike dhe Tranzicion të Energjisë 2024 mblodhi studentë nga universitete të Kosovës për të shkëmbyer informacion dhe përvoja mbi efiçiencën e energjisë, energjitë e ripërtëritshme dhe ndryshimet klimatike.",
        "date": "21-25 Nëntor 2024",
        "author": "Ekipi i Programit",
        "readTime": "5 minuta lexim"
      },      
      {
        "id": 2,
        "image": sch2023_blog,
        "title": "Përmbledhje e Shkollës Verore për Ekonominë me Karbon të Ulët 2023",
        "description": "Shkolla Verore për Ekonominë me Karbon të Ulët 2023 mblodhi studentë nga universitete të Kosovës për të trajtuar tema mbi dekarbonizimin, energjitë e ripërtëritshme dhe menaxhimin e mbeturinave.",
        "date": "2-6 Tetor 2023",
        "author": "Ekipi i Programit",
        "readTime": "5 minuta lexim"
      },
      {
        "id": 3,
        "image": sch2022_blog,
        "title": "Përmbledhje e Shkollës Verore për Ndryshime Klimatike 2022",
        "description": "Shkolla Verore për Ndryshime Klimatike 2022 trajtoi çështje si energjia e ripërtëritshme, ndryshimet klimatike dhe menaxhimi i mbetjeve, duke përfshirë leksione, vizita studimore dhe punë praktike për sensibilizimin ndaj çështjeve klimatike.",
        "date": "28 Maj - 30 Korrik 2022",
        "author": "Ekipi i Programit",
        "readTime": "6 minuta lexim"
      },
      {
        "id": 4,
        "image": sch2018_blog,
        "title": "Përmbledhje e Shkollës Verore për Energji të Pastër 2018",
        "description": "Shkolla Verore për Energji të Pastër 2018 bashkoi studentë nga Kosova dhe Shqipëria për të diskutuar tranzicionin energjetik, politikat për energjinë e pastër dhe efiçiencën energjetike përmes leksioneve dhe aktiviteteve praktike.",
        "date": "3-7 Shtator 2018",
        "author": "Ekipi i Programit",
        "readTime": "5 minuta lexim"
      },      
      {
        "id": 5,
        "image": sch2017_blog,
        "title": "Përmbledhje e Shkollës Verore për Efiçiencën e Energjisë dhe Menaxhimin e Mbeturinave 2017",
        "description": "Shkolla Verore 2017 në Durrës trajtoi tema mbi efiçiencën e energjisë, burimet e ripërtëritshme të energjisë dhe menaxhimin e mbeturinave. Pjesëmarrësit morën njohuri teorike dhe praktike për qëndrueshmërinë energjetike dhe mjedisore.",
        "date": "6-10 Nëntor 2017",
        "author": "Ekipi i Programit",
        "readTime": "5 minuta lexim"
      },      
      {
        "id": 6,
        "image": sch2016_blog,
        "title": "Përmbledhje e Shkollës Verore për Efiçiencën e Energjisë dhe Burimet e Ripërtëritshme 2016",
        "description": "Shkolla Verore 2016 në Kosovë trajtoi tema si burimet e ripërtëritshme të energjisë, sistemin elektroenergjetik dhe politikat lokale për përmbushjen e standardeve të BE-së. Pjesëmarrësit punuan në grupe dhe zhvilluan vizita studimore.",
        "date": "10-14 Tetor 2016",
        "author": "Ekipi i Programit",
        "readTime": "4 minuta lexim"
      },      
      {
        "id": 7,
        "image": sch2015_blog,
        "title": "Përmbledhje e Shkollës Verore për Efiçiencë të Energjisë dhe Burime të Ripërtëritshme 2015",
        "description": "Shkolla Verore 2015, e mbajtur në Bogë, Pejë, përfshiu ligjërata dhe demonstrime praktike mbi energjinë diellore, gjeotermike dhe nga biomasa, si dhe vizita studimore në hidrocentrale dhe burimet natyrore.",
        "date": "27-31 Korrik 2015",
        "author": "Ekipi i Programit",
        "readTime": "5 minuta lexim"
      },      
      {
        "id": 8,
        "image": sch2014_blog,
        "title": "Përmbledhje e Shkollës Verore për Efiçiencën e Energjisë dhe Burimet e Ripërtëritshme 2014",
        "description": "Shkolla Verore 2014 trajtoi tema si dizajnimi dhe instalimi i sistemeve të vogla për gjenerimin e energjisë nga burimet ujore. Pjesëmarrësit ishin studentë nga programe bachelor dhe master nga institucione të ndryshme.",
        "date": "14 Korrik 2014",
        "author": "Ekipi i Programit",
        "readTime": "3 minuta lexim"
      },      
];

export default function Blog() {
    return (
        <div className="blog-container">
            {blogPosts.map((post, index) => {
                const [hovered, setHovered] = React.useState(false);

                const cardSpring = useSpring({
                    opacity: 1,
                    transform: hovered ? 'translateY(-10px)' : 'translateY(0px)',
                    from: { opacity: 0, transform: 'translateY(20px)' },
                    delay: index * 200
                });

                const imageSpring = useSpring({
                    transform: hovered ? 'scale(1.05)' : 'scale(1)',
                });

                const buttonSpring = useSpring({
                    transform: hovered ? 'scale(1.05)' : 'scale(1)',
                });

                return (
                    <Link to={`/blog/${post.id}`} key={post.id} style={{ textDecoration: 'none' }}>
                        <animated.div
                            className="blog-card"
                            style={cardSpring}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            <div className="blog-image-container">
                                <animated.img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="blog-image"
                                    style={imageSpring}
                                />
                                <div className="blog-overlay">
                                    <span className="read-more">Read More →</span>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-metadata">
                                    <span className="blog-date">{post.date}</span>
                                    <span className="blog-read-time">{post.readTime}</span>
                                </div>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-description">{post.description}</p>
                                <div className="blog-footer">
                                    <span className="blog-author">By {post.author}</span>
                                    <animated.button 
                                        className="blog-button"
                                        style={buttonSpring}
                                    >
                                        Read Article
                                    </animated.button>
                                </div>
                            </div>
                        </animated.div>
                    </Link>
                );
            })}
        </div>
    );
}
