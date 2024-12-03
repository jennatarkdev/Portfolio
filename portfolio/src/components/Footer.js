import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from "../assets/img/resume.svg";
import headerImg2 from "../assets/img/banner.svg"
import Resume  from "../assets/files/resume.pdf";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}> 
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/jenna-tarkington/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/jennatarkdev"><img src={navIcon2} alt="" /></a>
                <a href={Resume} download="JennaTarkingtonResume" target="_blank"><img src={navIcon3} alt=""/></a>
                <p>Copyright 2024. All Rights Reserved</p>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <img id="www" src={headerImg2} alt="jenna tark" />            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}