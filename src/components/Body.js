import { useState, useContext, useRef } from 'react'
import "./styles/Body.css"
import { reviews, services, portfolios } from '../data'
import Toggle from "./Toggle"
// import "animate.css/animate.min.css"
import { ThemeContext } from '../context/context'
import Icofont from 'react-icofont';
// import emailjs from 'emailjs-com'

const Body = () => {

    const [index, setIndex] = useState(0)
    const [servic, setServic] = useState(services)
    const [portfolio, setPortfolio] = useState(portfolios)
    const {name,job,text,img} = reviews[index]
    const [done, setDone] = useState(false)


    const checkNumber = (number) => {
        if(number > reviews.length - 1) {
            return 0
        }
        if (number < 0) {
            return reviews.length -1
        }
        return number
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newPerson = index + 1
            return checkNumber(newPerson)
        })
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newPerson = index - 1
            return checkNumber(newPerson)
        })
    }

    // DARKMODE
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR TEMPLATE ID', formRef.current, 'YOUR USER ID')
        // .then(
        //    (result) => {
        //     console.log(result.text)
        //     setDone(true)
        // }, (error) => {
        //     console.log(error.text)
        // }) 
    }


    return (
        <>
             {/* ======= Portfolio Section ======= */}
             <Toggle />
            <section id="portfolio" className="portfolio section-bg" style={{background: darkMode ? "#fff" :"#1e1f1f"}}>
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2 style={{color: darkMode ? "#000" :"#fff"}}>Portfolio</h2>
                        <p style={{color: darkMode ? "#000" :"#fff"}}>Here are some jobs I have done in the past. Fully developed by me. using various tools to carry each and every one of them out.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                            <ul id="portfolio-flters">
                                {/* <li data-filter="*" className="filter-active">All</li> */}
                            </ul>
                        </div>
                    </div>


                    
                    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        {portfolios.map((portfolio) => {
                        const { id,title,text,img } = portfolio
                        return (
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={id}>
                                <div className="portfolio-wrap">
                                    <img src={img} className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4 style={{color: darkMode ? "#000" :"#fff"}}>{title}</h4>
                                        <p style={{color: darkMode ? "#000" :"#fff"}}>{text}</p>
                                    </div>
                                    <div className="portfolio-links">
                                        <a href={img} data-gall="portfolioGallery" class="venobox" title="joeladu.com"><i class="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section> 

            {/* ======= Services Section ======= */}
            <section id="services" className="services" style={{background: darkMode ? "#fff" :"#1e1f1f"}}>
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2 style={{color: darkMode ? "#000" :"#fff"}}>Services</h2>
                        <p style={{color: darkMode ? "#000" :"#fff"}}>These are the core services I offer</p>
                    </div>
                    <div className="row">
                        {servic.map((service) => {
                            return (
                                <div className="col-lg-6 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100" key={service.id}>
                                    <div className="icon-box iconbox-blue" style={{background: darkMode ? "#fff" :"#1e1f1f"}}>
                                        <div className="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                                            </svg>
                                            <i className="bx bxl-dribbble"></i>
                                        </div>
                                        <h4 style={{color: darkMode ? "#000" :"#fff"}}>{service.title}</h4>
                                        <p style={{color: darkMode ? "#000" :"#fff"}}>{service.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </section> 

            {/* ======= Testimonials Section =======  */}




            <section id="testimonials" className="testimonials section-bg" style={{background: darkMode ? "#fff" :"#1e1f1f"}}>
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2 style={{color: darkMode ? "#000" :"#fff"}}>Testimonials</h2>
                    </div>

                    <div className="owl-carousel testimonials-carousel" data-aos="zoom-in" data-aos-delay="100">
                        <div className="testimonial-item">
                            <img src={img} className="testimonial-img" alt="Joel Adu" />
                            <h3 style={{color: darkMode ? "#000" :"#fff"}}>{name}</h3>
                            <h4 style={{color: darkMode ? "#000" :"#fff"}}>{job}</h4>
                            <p style={{color: darkMode ? "#000" :"#fff"}}>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            {text}
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                        <div className="toggle-button">
                            <button onClick={prevPerson} style={{color: darkMode ? "#000" :"#fff"}}>prev</button>
                            <button onClick={nextPerson} style={{color: darkMode ? "#000" :"#fff"}}>Next</button>
                        </div>
                    </div>
                </div>
            </section> 

            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact" style={{background: darkMode ? "#fff" :"#1e1f1f"}}>
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2 style={{color: darkMode ? "#000" :"#fff"}}>Contact</h2>
                    </div>

                    <div className="row mt-1">

                        <div className="col-lg-4">
                            <div className="info" style={{background: darkMode ? "#fff" :"#1e1f1f"}}>
                                <div className="address">
                                    <Icofont icon="google-map"/>
                                    <h4 style={{color: darkMode ? "#000" :"#fff"}}>Location:</h4>
                                    <p style={{color: darkMode ? "#000" :"#fff"}}>Lagos, Nigeria</p>
                                </div>

                                <div className="email">
                                    <Icofont icon="envelope" />
                                    <h4 style={{color: darkMode ? "#000" :"#fff"}}>Email:</h4>
                                    <p style={{color: darkMode ? "#000" :"#fff"}}>info@imohcodes.com</p>
                                </div>

                                <div className="phone">
                                    <Icofont icon="phone"/>
                                    <h4 style={{color: darkMode ? "#000" :"#fff"}}>Call:</h4>
                                    <p style={{color: darkMode ? "#000" :"#fff"}}>+234 802 060 0313</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 mt-5 mt-lg-0" style={{background: darkMode ? "#fff" :"#1e1f1f"}}>

                            <form ref={formRef} onSubmit={handleSubmit} novalidate="novalidate" method="post" className="php-email-form" style={{background: darkMode ? "#fff" :"#1e1f1f"}}>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="user_name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="user_email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="col-md-12 form-group mt-3 mt-md-0">
                                        <input type="text" className="form-control" name="user_subject" id="subject" placeholder="Your  Subject" data-rule="subject" data-msg="Please enter your subject" />
                                        <div className="validate"></div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div className="validate"></div>
                                </div>
                                <div className="mb-3">
                                    <div className="loading" style={{color: darkMode ? "#000" :"#fff"}}>Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message" style={{color: darkMode ? "#000" :"#fff"}}>Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit" style={{color: darkMode ? "#000" :"#fff"}}>Send Message</button></div>
                                {done && "Thank You ..."}
                            </form>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default Body