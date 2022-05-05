import "./styles/Hero.css"
import image from "../images/header.jpg"

const Hero = () => {
    return (
        <>
            <section className="fh5co-about-me">
                <div className="about-me-inner site-container">
                    <article className="portfolio-wrapper wow slideInLeft">
                        <div className="portfolio__img">
                            <img src={image} className="about-me__profile" alt="about me profile" />
                        </div>
                        <div className="portfolio__bottom">
                            <div className="portfolio__name">
                                <span>I</span>
                                <h2 className="universal-h2">moh</h2>  <span>P</span><h2 className="universal-h2">recious</h2>
                            </div>
                            <p>I am a Fullstack Developer with experience in working on a variety of web development projects as well as mobile apps. I work on all aspects of the development life cycle. My past work includes building user-focused, dynamic, innovative and functional websites using responsive / adaptive / mobile-first design and development. I like to use my knowledge of tech to solve real life problems and find solutions, build products and help people.</p>
                        </div>
                    </article>
                    <div className="about-me__text">
                        <div className="about-me-slider">
                            <div className="about-me-single-slide">
                                <h2 className="universal-h2 universal-h2-bckg">About me</h2>
                                <p>I am a Fullstack Developer with experience in working on a variety of web development projects as well as mobile apps. I work on all aspects of the development life cycle. My past work includes building user-focused, dynamic, innovative and functional websites using responsive / adaptive / mobile-first design and development. I like to use my knowledge of tech to solve real life problems and find solutions, build products and help people.</p>

                                <p>If i am not writing codes then I am on Twitter. I have 2 dogs, Rex and Bella and they mean the world to me, although they get annoying now and then.</p>

                                <p>Lately, the way i view life has changed drastically. I am currently doing personal research on happiness and what makes people happy because of the things I see around me. A friend of mine introduced me to Positive psychology and that has changed my mindset and also shaped my thinking towards life and happiness. We all need this type of information in our day to day life., and as a result of that I intend to write articles and talk more about happiness.</p>

                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="about-me-bckg"></div>
            </section> 
        </>
    )
}

export default Hero