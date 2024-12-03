import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import headerImg from "../assets/img/programing.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 10);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Web Developer", "Game Developer", "Frontend Designer", "Full-stack Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1 id="my-name">{`Jenna Tarkington`} <br></br> <span className="txt-rotate" dataPeriod="1000" data-rotate='["Software Engineer", "Web Developer", "Game Developer"]'><span className="wrap">{text}</span></span></h1>
                  <p>Welcome to my portfolio! I’m a full-stack developer with a passion for crafting modern, scalable, and user-centered digital solutions. With a strong focus on clean, efficient code and creative design, I build seamless web applications that not only look great but also perform flawlessly across all devices. From front-end experiences to back-end architecture, I specialize in creating end-to-end solutions that elevate user experiences and drive business success. Explore my work to see how I combine innovative design with cutting-edge technologies to deliver powerful, full-stack solutions. Let’s connect and build something amazing together!</p>
                  <button><Nav.Link href="#connect">Contact Me!<ArrowRightCircle size={25} /></Nav.Link></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}