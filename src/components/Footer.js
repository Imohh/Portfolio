import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/Footer.css"

class Footer extends React.Component {


    render() {
        return (
            <>
                <div className="footer-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 left">
                                <button>^</button>
                            </div>
    
                            <div className="col-lg-8 middle">
                                <p>© Copyright IMOH PRECIOUS. All Rights Reserved</p>
                            </div>
    
                            <div className="col-lg-2 right">
                                <button onClick="">instagram</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    
}

export default Footer