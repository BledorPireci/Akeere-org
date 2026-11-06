import { Link } from 'react-router-dom';
import artwork from '../newSummer/summer-school-2026.png';
import '../scss/sections/_summerSchool2026.scss';

export default function SummerSchoolAnnouncement() {
    return (
        <article className="summer-announcement" lang="sq">
            <Link to="/summer-school/2026" className="summer-announcement__link">
                <img src={artwork} alt="E ardhmja në lëvizje — Shkolla për tranzicionin e energjisë dhe politikat klimatike" width="1536" height="1024" />
                <div className="summer-announcement__content">
                    <span className="summer-2026__eyebrow">Thirrje për studentë · 2026</span>
                    <h2>Shkolla Verore për Tranzicionin Energjetik dhe Politikat Klimatike</h2>
                    <p>28 nëntor – 4 dhjetor 2026 · Podujevë</p>
                    <p>Shtatë ditë me ekspertë, punë në grupe dhe vizitë studimore. Për studentët në vitin e fundit bachelor dhe në master nga e gjithë Kosova.</p>
                    <strong>Afati i aplikimit: 16 nëntor 2026</strong>
                    <span className="summer-2026__button">Lexo më shumë dhe si të aplikosh <span aria-hidden="true">→</span></span>
                </div>
            </Link>
        </article>
    );
}
