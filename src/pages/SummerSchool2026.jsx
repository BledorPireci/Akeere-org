import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import artwork from '../newSummer/summer-school-2026.png';
import '../scss/sections/_summerSchool2026.scss';

const emailSubject = 'Aplikim – Shkolla për Tranzicionin Energjetik dhe Politikat Klimatike 2026';
const applicationUrl = `mailto:akeree@gmail.com?subject=${encodeURIComponent(emailSubject)}`;

const programme = [
    ['Ndryshimet klimatike dhe tranzicioni energjetik', 'Shkaqet dhe ndikimet e ndryshimeve klimatike, zbutja dhe përshtatja ndaj tyre, si dhe politikat ndërkombëtare, evropiane dhe në Kosovë. Formimi i grupeve punuese dhe fillimi i trajtimit të temave të caktuara.'],
    ['Efiçienca e energjisë, burimet e ripërtëritshme dhe ruajtja e energjisë', 'Efiçienca e energjisë në ndërtesa, pajisje, ndriçim dhe transport; teknologjitë e energjisë së ripërtëritshme, projektet në Kosovë dhe sistemet e ruajtjes së energjisë në bateri.'],
    ['Sistemi elektroenergjetik i Kosovës dhe integrimi në rrjet', 'Burimet e prodhimit të energjisë elektrike, infrastruktura dhe ndërlidhjet me vendet fqinje, integrimi i burimeve të ripërtëritshme, fleksibiliteti i sistemit dhe planifikimi i tranzicionit.'],
    ['Vizitë studimore', 'Vizitë në projekte të energjisë së ripërtëritshme në Kosovë për të lidhur njohuritë e fituara me zbatimin në praktikë.'],
    ['Shpërndarja e energjisë, tregjet e energjisë elektrike dhe çmimi i karbonit', 'Sistemet diellore në çati, prosumatorët dhe modelet e reja të biznesit në sektorin energjetik. Tregjet rajonale të energjisë elektrike, kërkesat e BE-së dhe mekanizmat e çmimit të karbonit.'],
    ['Biomasa e qëndrueshme dhe inteligjenca artificiale', 'Biomasa drusore dhe menaxhimi i qëndrueshëm i pyjeve. Roli i inteligjencës artificiale në parashikimin e prodhimit nga burimet e ripërtëritshme, integrimin në rrjet dhe efiçiencën e energjisë. Përgatitja e prezantimeve të grupeve.'],
    ['Prezantimet e grupeve dhe përmbyllja e shkollës', 'Prezantimi i rezultateve të punës në grupe, diskutimi i gjetjeve dhe reflektimi mbi njohuritë e fituara. Ceremonia e ndarjes së certifikatave.'],
];

export default function SummerSchool2026() {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = 'Shkolla Verore 2026 | AKEREE';
        return () => { document.title = previousTitle; };
    }, []);

    return (
        <>
            <Header />
            <main className="summer-2026" lang="sq">
                <Link to="/" className="summer-2026__back">← Kthehu në ballinë</Link>
                <article>
                    <header className="summer-2026__hero">
                        <span className="summer-2026__eyebrow">AKEREE · Thirrje për studentë</span>
                        <h1>Shkolla Verore për Tranzicionin Energjetik dhe Politikat Klimatike 2026</h1>
                        <p className="summer-2026__intro">Njihuni me teknologjitë dhe politikat që po formësojnë tranzicionin energjetik të Kosovës.</p>
                        <div className="summer-2026__actions">
                            <a href="#aplikimi" className="summer-2026__button">Si të aplikoni <span aria-hidden="true">↓</span></a>
                        </div>
                    </header>

                    <dl className="summer-2026__facts">
                        <div><dt>Kur?</dt><dd>28 nëntor – 4 dhjetor 2026</dd></div>
                        <div><dt>Ku?</dt><dd>Hotel Iliria Hill Resort, Podujevë</dd></div>
                        <div><dt>Gjuha</dt><dd>Shqip</dd></div>
                        <div><dt>Afati i aplikimit</dt><dd>16 nëntor 2026, deri në fund të ditës</dd></div>
                    </dl>

                    <img className="summer-2026__artwork" src={artwork} alt="E ardhmja në lëvizje. Mëso. Bashkëpuno. Vepro. — Ftesa për Shkollën Verore 2026" width="1536" height="1024" />

                    <div className="summer-2026__body">
                        <section aria-labelledby="rreth-shkolles">
                            <h2 id="rreth-shkolles">Rreth shkollës</h2>
                            <p>Asociacioni Kosovar për Energji të Ripërtëritshme dhe Efiçiencë të Energjisë (AKEREE), me mbështetjen e Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH në Kosovë, bashkorganizon Shkollën Verore për Tranzicionin Energjetik dhe Politikat Klimatike.</p>
                            <p>Programi shtatëditor mbledh studente dhe studentë nga e gjithë Kosova për të shqyrtuar ndërlidhjen ndërmjet veprimit klimatik, teknologjive të energjisë dhe politikave publike. Përmes ligjëratave nga ekspertë, punës në grupe me mbështetje nga mentorët dhe një vizite studimore, pjesëmarrësit trajtojnë sfidat dhe mundësitë për një sistem të qëndrueshëm energjetik dhe përparimin drejt neutralitetit ndaj karbonit.</p>
                        </section>

                        <section aria-labelledby="perfitimet">
                            <h2 id="perfitimet">Pse të merrni pjesë?</h2>
                            <ul>
                                <li>Thelloni njohuritë për ndryshimet klimatike, tranzicionin energjetik dhe politikat klimatike.</li>
                                <li>Njihuni me energjinë e ripërtëritshme, efiçiencën e energjisë, bateritë dhe integrimin në rrjetin elektrik.</li>
                                <li>Shqyrtoni ndikimin e politikave, tregjeve të energjisë elektrike dhe çmimit të karbonit.</li>
                                <li>Vizitoni projekte të energjisë së ripërtëritshme në Kosovë.</li>
                                <li>Bashkëpunoni në grupe ndërdisiplinore me mentorë me përvojë.</li>
                                <li>Prezantoni punën tuaj dhe pajisuni me certifikatë pjesëmarrjeje.</li>
                            </ul>
                        </section>

                        <section aria-labelledby="programi">
                            <h2 id="programi">Programi shtatëditor</h2>
                            <ol className="summer-2026__programme">
                                {programme.map(([title, description], index) => (
                                    <li key={title}>
                                        <span className="summer-2026__day">Dita {index + 1}</span>
                                        <div><h3>{title}</h3><p>{description}</p></div>
                                    </li>
                                ))}
                            </ol>
                        </section>

                        <section aria-labelledby="kriteret">
                            <h2 id="kriteret">Kush mund të aplikojë?</h2>
                            <p>Ftohen studentet dhe studentët nga e gjithë Kosova që:</p>
                            <ul>
                                <li>Janë në vitin e fundit bachelor ose ndjekin studimet master në shkenca teknike, arkitekturë, ekonomi, menaxhment, shkenca të natyrës, ekologji dhe mjedis, bujqësi, pylltari, shkenca politike, juridik ose fusha të përafërta.</li>
                                <li>Kanë aftësi bazë në Microsoft Office dhe mjetet digjitale për kërkim, përgatitje dhe prezantim të materialeve.</li>
                                <li>Kanë interes për tranzicionin energjetik dhe politikat klimatike dhe motivim për bashkëpunim ndërdisiplinor.</li>
                            </ul>
                            <p>Programi zhvillohet në shqip. Njohja e gjuhës angleze është e preferueshme.</p>
                            <p>Veçanërisht inkurajohen të aplikojnë studentet e gjinisë femërore. Thirrja ofron mundësi të barabarta për të gjithë kandidatët dhe kandidatet që plotësojnë kriteret.</p>
                            <p><strong>Personat që kanë marrë pjesë në edicionet e mëparshme të Shkollës Verore të organizuar nga AKEREE nuk kanë të drejtë pjesëmarrjeje në këtë edicion.</strong></p>
                        </section>

                        <section className="summer-2026__application" id="aplikimi" aria-labelledby="aplikimi-titulli">
                            <span className="summer-2026__eyebrow">Afati: 16 nëntor 2026</span>
                            <h2 id="aplikimi-titulli">Si të aplikoni?</h2>
                            <p>Përgatitni dhe dërgoni këto dokumente me email:</p>
                            <ol>
                                <li>CV-në.</li>
                                <li>Kopjen e letërnjoftimit.</li>
                                <li>Kopjen e kartelës së studentit.</li>
                                <li>Një letër motivuese që përshkruan interesimin dhe njohuritë në fushën e energjisë dhe mjedisit, si dhe arsyet për pjesëmarrje në shkollë.</li>
                            </ol>
                            <p><strong>Dërgoni aplikimin në:</strong> <a href={applicationUrl}>akeree@gmail.com</a></p>
                            <p><strong>Subjekti i emailit:</strong><br />{emailSubject}</p>
                            <p><strong>Afati i fundit: 16 nëntor 2026, deri në fund të ditës.</strong></p>
                            <p>Numri i pjesëmarrësve është i kufizuar. Në rast të aplikimeve me kualifikime dhe motivim të barabartë, përparësi do të kenë aplikimet e pranuara më herët.</p>
                            <a href={applicationUrl} className="summer-2026__button">Apliko me email <span aria-hidden="true">↗</span></a>
                            <p className="summer-2026__hint">Butoni hap programin tuaj të emailit me subjektin e plotësuar. Bashkëngjitni të katër dokumentet para dërgimit. Mund të aplikoni edhe nga emaili juaj duke përdorur adresën dhe subjektin më sipër.</p>
                        </section>

                        <section aria-labelledby="shpenzimet">
                            <h2 id="shpenzimet">Shpenzimet dhe transporti</h2>
                            <p>Për pjesëmarrësit e përzgjedhur, akomodimi në hotel, ushqimi dhe pjesëmarrja në program mbulohen me mbështetjen e GIZ-së në Kosovë.</p>
                            <p>Organizohet transport pa pagesë nga Prishtina deri në hotel dhe kthimi pas përfundimit të shkollës. Udhëtimin deri në Prishtinë pjesëmarrësit duhet ta sigurojnë vetë. Personave të përzgjedhur do t’u komunikohen vendtakimi dhe orari i nisjes.</p>
                        </section>

                        <section className="summer-2026__contact" aria-labelledby="kontakti">
                            <h2 id="kontakti">Informata shtesë</h2>
                            <p>Email: <a href="mailto:akeree@gmail.com">akeree@gmail.com</a><br />Telefon: <a href="tel:+38344413241">+383 44 413 241</a><br />Orari i kontaktit telefonik: çdo ditë pune, 17:00–21:00.</p>
                        </section>
                        <Link to="/summer-school">Shiko edicionet e mëparshme →</Link>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
