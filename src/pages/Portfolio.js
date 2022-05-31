import { Link } from "react-router-dom";
function Portfolio() {
    return (
        <>
            <main>
                <h2>I'm Zack Morgenthaler</h2>
                <p>This is my portfolio.</p>
            </main>

            <nav className="page-nav">
                <h3>Companies</h3>
                <Link to="/portfolio/aasm/">AASM</Link>
                <Link to="/portfolio/american-muscle/">American Muscle</Link>
                <Link to="/portfolio/buy-auto-parts/">BuyAutoParts</Link>
                <Link to="/portfolio/csi-onsite/">CSI OnSite</Link>
                <Link to="/portfolio/epromos/">ePromos</Link>
                <Link to="/portfolio/evan-moor/">Evan-Moor</Link>
                <Link to="/portfolio/trinity-insight/">Trinity Insight</Link>
            </nav>
        </>
    );
}

export default Portfolio;