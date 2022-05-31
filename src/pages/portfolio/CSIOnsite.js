import React from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import AmericanMuscleLogo from './american-muscle-logo.svg'
class CSIOnSite extends React.Component {
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
                <h2>CSI OnSite</h2>
                <p>During my job at <a href="http://csionsite.com/">CSI OnSite</a>, I made an internal website for their client, <a href="https://bridging.org/">Bridging</a>.</p>
                <p>It was a calendar and appointment app for their clients written in C#, Blazor, and MVC.</p>
                <p>The site was designed and developed by me and the team and is now deployed and is running successfully.</p>
                <nav className="page-nav">
                    <a href="/img/portfolio/csi-onsite/screenshot-1.jpg">Screenshot 1</a>
                    <a href="/img/portfolio/csi-onsite/screenshot-2.jpg">Screenshot 2</a>
                    <a href="/img/portfolio/csi-onsite/screenshot-3.jpg">Screenshot 3</a>
                </nav>
            </main>
        );
    }
}


export default CSIOnSite;