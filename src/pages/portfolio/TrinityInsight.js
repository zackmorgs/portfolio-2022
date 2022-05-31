import React from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';

class TrinityInsight extends React.Component {
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
                <h2>Trinity Insight</h2>
                <p>During my internship at Trinity Insight, I worked on making the <a href="https://trinity.one/">website</a>.</p>
                <p>I made the UX changes using PHP, HTML, CSS, and JavaScript.</p>
                <p>The site was up for a while and did well.</p>
                <nav className="page-nav">
                    <a href="/img/portfolio/trinity-insight/current.png">Screenshot of homepage</a>
                </nav>
            </main>
        );
    }
}


export default TrinityInsight;