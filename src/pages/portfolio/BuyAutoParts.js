import React from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';

class BuyAutoParts extends React.Component {
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
                <h2>BuyAutoParts</h2>
                <p>During my internship at Trinity Insight, I worked on UX tests for <a href="https://BuyAutoParts.com">BuyAutoParts</a>.</p>
                <p>We decided to work on their cart UI for the site.</p>
                <p>I made the UX changes using HTML, CSS, and JavaScript.</p>
                <p>The test was a success and one of our variations won.</p>
                <nav className="page-nav">
                    <a href="/img/portfolio/buy-auto-parts/cart/BAP-CartPagePresentation-control.png">Cart Page Presentation Test Control (Original)</a>
                    <a href="/img/portfolio/buy-auto-parts/cart/BAP-CartPagePresentation-variation.png">Cart Page Presentation Test Variation</a>
                </nav>
            </main>
        );
    }
}


export default BuyAutoParts;