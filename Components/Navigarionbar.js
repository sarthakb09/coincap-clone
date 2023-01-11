import { HiSearch } from "react-icons/hi";
import {AiOutlineSetting} from 'react-icons/ai'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles.css";


function Navigarionbar() {
  return (
    <Navbar className="Navbar-fixed">
      <Container className="navBar"> 
      <Navbar.Brand href="#home" className="img">
          <img
            src="https://coincap.io/static/logos/black.svg"
            alt="logo"
            width="80"
            height="80"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="navEle" href="https://coincap.io/">Coins</Nav.Link>
          <Nav.Link className="navEle" href="https://coincap.io/exchanges">Exchanges</Nav.Link>
          <Nav.Link className="navEle" href="https://coincap.io/chart">Chart</Nav.Link>
          <Nav.Link className="navEle" href="https://coincap.io/swap">Swaps</Nav.Link>
        </Nav>
        <div className="icon">
        <HiSearch className="search" />
        <AiOutlineSetting className="setting"/>
        </div>
        <div className="btn-wallet">
        <button className="btn-dash">Connect Wallet</button>
        </div>
      </Container>
    </Navbar>
    
  );
}


export default Navigarionbar;
