import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { GrReactjs } from "react-icons/gr";
import { RiJavascriptLine } from "react-icons/ri";
import { TbFileTypeHtml } from "react-icons/tb";
import { PiFileCssBold } from "react-icons/pi";
import { TbBrandTypescript } from "react-icons/tb";
import { BsBootstrapFill } from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { PiFileCSharpBold } from "react-icons/pi";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TbBrandMongodb } from "react-icons/tb";
import { RiFirebaseLine } from "react-icons/ri";
import { SiApachespark } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { TbUxCircle } from "react-icons/tb";
import { FaJenkins } from "react-icons/fa";



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p> From front-end frameworks like React, to back-end solutions with Python and Java, I build dynamic, full-stack applications. I’m skilled in database management, API design, cloud services, and version control, ensuring scalable and efficient solutions.</p>
              <div className="carosuel">
                <h3>Frontend</h3>
                <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2500} infinite={true} className="owl-carousel owl-theme skill-slider">
                  <div className="item">
                    <GrReactjs class="icon" />
                    <h5>ReactJS</h5>
                  </div>
                  <div className="item">
                    <RiJavascriptLine class="icon" />
                    <h5>Javascript</h5>
                  </div>
                  <div className="item">
                    <TbFileTypeHtml class="icon" />
                    <PiFileCssBold class="icon" />
                    <h5>HTML & CSS</h5>
                  </div>
                  <div className="item">
                    <TbBrandTypescript class="icon" />
                    <h5>Typescript</h5>
                  </div>
                  <div className="item">
                    <BsBootstrapFill class="icon" />
                    <h5>Bootstrap</h5>
                  </div>
                  <div className="item">
                    <TbUxCircle class="icon" />
                    <h5>UX/UI Design</h5>
                  </div>
                </Carousel>
              </div>
              <div className="carosuel">
                <h3>Backend</h3>
                <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={1800} autoPlayDirection="ltr" infinite={true} className="owl-carousel owl-theme skill-slider">
                  <div className="item">
                    <FaJava class="icon" />
                    <h5>Java</h5>
                  </div>
                  <div className="item">
                    <AiOutlinePython class="icon" />
                    <h5>Python</h5>
                  </div>
                  <div className="item">
                    <PiFileCSharpBold class="icon" />
                    <h5>C#</h5>
                  </div>
                  <div className="item">
                    <AiOutlineConsoleSql class="icon" />
                    <h5>SQL</h5>
                  </div>
                  <div className="item">
                    <TbBrandMongodb class="icon" />
                    <h5>MongoDB</h5>
                  </div>
                  <div className="item">
                    <RiFirebaseLine class="icon" />
                    <h5>Firebase</h5>
                  </div>
                  <div className="item">
                    <SiApachespark class="icon" />
                    <h5>Apache Suite</h5>
                  </div>
                  <div className="item">
                    <FaAws class="icon" />
                    <h5>Amazon Web Services</h5>
                  </div>
                  <div className="item">
                    <DiGoogleCloudPlatform class="icon" />
                    <h5>Google Cloud Platform</h5>
                  </div>
                  <div className="item">
                    <FaJenkins  class="icon" />
                    <h5>Jenkins</h5>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}