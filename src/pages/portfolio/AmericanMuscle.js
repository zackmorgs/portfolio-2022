import React from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import AmericanMuscleLogo from './american-muscle-logo.svg'
class AmericanMuscle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageFit: true
        };
    }
    handleImageFitClick = () => {
        this.setState({
            imageFit: !this.state.imageFit
        });
    }
    render() {
        return (
            <main>
                <Link to="/portfolio">Back to Portfolio</Link>
                <br />
                <br />
                <img src={AmericanMuscleLogo} alt="American Muscle Logo" style={{ maxWidth: 175 }} />
                <h2>American Muscle</h2>
                <p>During my internship at Trinity Insight, I worked on UX tests for <a href="https://americanmuscle.com">American Muscle</a>.</p>
                <p>I made the UX changes using HTML, CSS, and JavaScript.</p>
                <p>The test was a success and one of our variations won.</p>
                <nav className="page-nav">
                    <a href="/img/portfolio/american-muscle/Mobile Product Page Test 1/AM-MobilePDPLayoutTest-control.png">Mobile Product Page Test 1, Control (Original)</a>
                    <a href="/img/portfolio/american-muscle/Mobile Product Page Test 1/AM-MobilePDPLayoutTest-variation2.png">Mobile Product Page Test, Variation 2</a>
                    <a href="/img/portfolio/american-muscle/Mobile Product Page Test 1/AM-MobilePDPLayoutTest-variation3.png">Mobile Product Page Test, Variation 3</a>
                    <a href="/img/portfolio/american-muscle/Mobile Product Page Test 1/AM-MobilePDPLayoutTest-variation4.png">Mobile Product Page Test, Variation 4</a>
                </nav>
            </main>
        );
    }
}


export default AmericanMuscle;