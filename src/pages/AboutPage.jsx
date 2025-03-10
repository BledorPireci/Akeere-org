import React from 'react';
import Header from '../layout/Header';
import '../scss/sections/_aboutPage.scss';
export default function AboutPage() {
    return (
        <div className="about-page">
            <Header/>
            <div className="about-container">
                <section className="about-section">
                    <h2>Qëllimi</h2>
                    <p>Organizata është themeluar me qëllim të:</p>
                    <ul>
                        <li>Promovimit të Energjive të Ripërtëritshme dhe mbrojtjes së ambientit</li>
                        <li>Kursimit të energjisë dhe shfrytëzimit racional të saj</li>
                        <li>Krijimit dhe aplikimit të rregullave ndërtimore për rritjen e efiçiencës së energjisë në objekte</li>
                        <li>Edukimit mbi energjinë dhe efiçiencën e saj</li>
                        <li>Përmirësimit të efiçiencës së energjisë në industri</li>
                        <li>Reformave në politikat fiskale dhe tatimet në fushën e energjisë dhe energjive të ripërtëritshme</li>
                        <li>Financimit të projekteve për rritjen e efiçiencës së energjisë</li>
                        <li>Bashkëpunimit dhe lidhjes me shoqata dhe institucione të tjera vendore dhe ndërkombëtare për Energjitë e Ripërtëritshme dhe Efiçiencën e Energjisë</li>
                    </ul>
                </section>

                <section className="about-section">
                    <h2>Vizioni</h2>
                    <p>AKEREE synon të jetë një asociacion profesional dhe i fuqishëm, brenda dhe jashtë vendit; një organizatë e mirëstrukturuar dhe pjesë e asociacioneve të ngjashme ndërkombëtare. Ky asociacion synon të argumentojë dhe promovojë përdorimin e Burimeve të Ripërtëritshme të Energjisë (BRE) deri në atë masë që këto burime të luajnë një rol të rëndësishëm në sektorin e energjisë, duke ndikuar gjithashtu në rritjen e efiçiencës së energjisë dhe në mbrojtjen e mjedisit jetësor.</p>
                </section>

                <section className="about-section">
                    <h2>Misioni</h2>
                    <p>Misioni i AKEREE është:</p>
                    <ul>
                        <li>Të kontribuojë në zhvillimin dhe përdorimin e Burimeve të Ripërtëritshme të Energjisë</li>
                        <li>Të rrisë ndërgjegjësimin për përdorimin e energjisë me efikasitet të lartë dhe mbrojtjen e mjedisit</li>
                        <li>Të nxisë reformat në politikat fiskale dhe të lehtësojë barrën tatimore në fushën e Efiçiencës së Energjisë (EE)</li>
                        <li>Të bashkëpunojë me shoqata dhe institucione vendore dhe ndërkombëtare në fushën e BRE dhe EE</li>
                        <li>Të sigurojë fonde për zhvillimin e BRE dhe për përmirësimin e efiçiencës së energjisë</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
