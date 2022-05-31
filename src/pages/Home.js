import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <main>
                <img className="img-fit img-circle" src="/img/homepage/profile.jpg" style={{maxWidth: 300}}/>
                <h2>I'm Zack Morgenthaler</h2>
                <p>A web designer and developer.</p>
            </main>
            <nav className="page-nav">
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </>
    );
}

export default Home;