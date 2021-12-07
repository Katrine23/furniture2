
import React from 'react';

function Nav() {
    return(
        <div id="Nav" className="container-fluid mb-1 pt-3 pb-3 ps-3 pe-3">
            <div className="row" style={{backgroundColor:"rgb(64, 64, 64)"}}>
                <div className="col-2 pt-2 pb-2">
                    <div className="dropdown" style={{textAlign:'center'}}>
                        <button id="id_dropdown" className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"rgb(64, 64, 64)", color:'white'}}>ALL TYPES</button>
                        <ul className="dropdown-menu" aria-labelledby="id_dropdown">
                            <li><a className="dropdown-item" href="">Action 1</a></li>
                            <li><a className="dropdown-item" href="">Action 2</a></li>
                            <li><a className="dropdown-item" href="">Action 3</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col pt-2 pb-2">
                    <ul className="nav" style={{textAlign:'center'}}>
                        <li className="nav-item"><a className="nav-link active" href="">Popular Products</a></li>
                        <li className="nav-item"><a className="nav-link" href="" style={{color:'white'}}>Low Price</a></li>
                        <li className="nav-item"><a className="nav-link" href="" style={{color:'white'}}>High Price</a></li>
                    </ul>
                </div>

                <div className="col-2  pt-2 pb-2">
                    <div className="dropdown" style={{textAlign:'center'}}>
                        <button id="id_dropdown" className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"rgb(64, 64, 64)", color:'white'}}>PRICE</button>
                        <ul className="dropdown-menu" aria-labelledby="id_dropdown">
                            <li><a className="dropdown-item" href="">Action 1</a></li>
                            <li><a className="dropdown-item" href="">Action 2</a></li>
                            <li><a className="dropdown-item" href="">Action 3</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
