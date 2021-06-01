import React  from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';
import * as ReactBootStrap from'react-bootstrap';
import Footer from './Components/Footer';
require('./Components/style.css');
class App extends React.Component{
    render (){
        return(

//           <div className="App">
//             {/* <Link to="./List" className="nav-link">List</Link> */}
//              <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//             <ReactBootStrap.Navbar.Brand href="/">Beranda </ReactBootStrap.Navbar.Brand>
//             <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
//               <ReactBootStrap.Nav className="Utama">
//                 <ReactBootStrap.Nav.Link href="/tentangsaya">Tentang Saya</ReactBootStrap.Nav.Link>
//                 <ReactBootStrap.Nav.Link href="/karya">Karya</ReactBootStrap.Nav.Link>
//                 <ReactBootStrap.Nav.Link href ="/kontak">Kontak</ReactBootStrap.Nav.Link>
//                 <ReactBootStrap.Nav.Link href="/list">List</ReactBootStrap.Nav.Link></ReactBootStrap.Nav>
//             </ReactBootStrap.Navbar.Collapse>
// </ReactBootStrap.Navbar>
// <p ><Utama /></p>
//           </div>  
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar fixed-top">
              <div className="container-fluid">
                <a className="navbar-brand" Link href="/" >Beranda</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#responsive-navbar-nav" aria-controls="responsive-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="responsive-navbar-nav">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link "Link href="/tentangsaya" aria-current="page"  >Tentang Saya</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"Link href="/karya" >Karya</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" Link href="/list" >List</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" Link href="/kontak" >Kontak</a>
                    </li>
                  </ul>
                </div>
              </div>
              </nav>
            <p class="isi"><Utama/></p>
            <div>
            <p></p>
           <p><Footer/></p>
           </div>
           </div>
        );
    }
}
export default App;