import { useContext, useState } from 'react'
import "./styles/Navbar.css"
import { ThemeContext } from '../context/context'

const Navbar = () => {
    const url = "facebook"
    const [nav, setNav] = useState(false)

    // DARKMODE
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    return (
        <>
            


            <header>

                <nav className="navbar navbar-expand-lg" style={{background: darkMode ? "#fff" :"#1e1f1f"}}>
                    <div className="container">
                        <a className="navbar-brand" href={url} style={{color: darkMode ? "#000" :"#fff"}}>Imoh</a>
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
                </nav>

            </header>






        </>
    )
}

export default Navbar