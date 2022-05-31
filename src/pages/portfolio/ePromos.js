import React from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';

class EPromos extends React.Component {
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
                <h2>ePromos</h2>
                <p>During my internship at Trinity Insight, I worked on UX tests for <a href="https://epromos.com">ePromos</a>.</p>
                <p>I made the UX changes using HTML, CSS, and JavaScript.</p>
                <p>The test was a success and one of our variations won.</p>
                <nav className="page-nav">
                    <a href="/img/portfolio/epromos/EP-customize-mobile-control.png">Customization (Control)</a>
                    <a href="/img/portfolio/epromos/EP-customize-mobile-variation.png">Customization (Variation)</a>
                </nav>
            </main>
        );
    }
}


export default EPromos;