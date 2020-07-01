//React
import React from 'react';
//Assets
import dominicBkgImage from '../../assets/20200613_202127.jpg';
import spadeLogo from '../../assets/SPADE FINAL SVG.svg';
import ShowcaseButton from '../showcase-button/showcase-button.component';
//Styles
import './landing.styles.scss';

class Landing extends React.Component {
    state = {
        backgroundImages: {
            0: dominicBkgImage,
        }
    }
    
    render() {
        return (
            <section className="landing">
                <div className="landing-img" style={{backgroundImage: `url(${this.state.backgroundImages[0]})`}} />
                {/* <img src={this.state.backgroundImages[0]} alt="Landing Img" className="landing-img"/> */}
                <article className="landing-showcase">
                    <img src={spadeLogo} alt="Showcase SPADE Logo" className="showcase-spade-logo" />
                    <section className="spade-btns">
                        <ShowcaseButton title="Suicide" />
                        <ShowcaseButton title="Post Traumatic Stress Disorder" />
                        <ShowcaseButton title="Anxiety" />
                        <ShowcaseButton title="Depression" />
                        <ShowcaseButton title="Epilepsy" />
                    </section>
                </article>
            </section>
        );
    }
}

export default Landing;