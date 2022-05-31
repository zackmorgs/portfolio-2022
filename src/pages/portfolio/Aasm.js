import React from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';

class Aasm extends React.Component {
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
                <h2>AASM</h2>
                <p>During my internship at AASM, I worked on the Sleep 2014 conference website.</p>
                <p>We made the site using Sitefinity CMS and C#.NET. We styled the site with CSS and made it work in IE7 and Chrome.</p>
                <nav className='page-nav'>
                    <a href="/img/portfolio/aasm/sleep2014.jpg">Screenshot</a>
                </nav>
            </main>
        );
    }
}


export default Aasm;