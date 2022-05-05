import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/Navbar.css"

const Navbar = () => {
    const url = "facebook"

    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <a className="navbar-brand" href={url}>Mouri</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href={url}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={url}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={url}>Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={url}>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={url}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>

        </>
    )
}

export default Navbar