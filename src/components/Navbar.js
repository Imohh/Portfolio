import { useContext,  } from 'react'
import "./styles/Navbar.css"
import { ThemeContext } from '../context/context'

const Navbar = () => {
    const url = "facebook"

    // DARKMODE
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    return (
        <>
            {/* <nav className="navbar navbar-expand-lg" style={{background: darkMode ? "#fff" :"#1e1f1f"}}>
                <div className="container">
                    <a className="navbar-brand" href={url} style={{color: darkMode ? "#000" :"#fff"}}>Mouri</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href={url} style={{color: darkMode ? "#000" :"#fff"}}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={url} style={{color: darkMode ? "#000" :"#fff"}}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={url} style={{color: darkMode ? "#000" :"#fff"}}>Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={url} style={{color: darkMode ? "#000" :"#fff"}}>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={url} style={{color: darkMode ? "#000" :"#fff"}}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav> */}


                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href={url}>Navbar w/ text</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href={url}>Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={url}>Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={url}>Pricing</a>
                    </li>
                    </ul>
                    <span className="navbar-text">
                    Navbar text with an inline element
                    </span>
                </div>
                </nav>

        </>
    )
}

export default Navbar