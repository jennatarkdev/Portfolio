import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import marketplace from "../assets/img/marketplace.png";
import weed from  "../assets/img/weed.jpg"
import starFighter from "../assets/img/star_fighter.png";
import gabeGarden from "../assets/img/garden.png";
import s3Util from "../assets/img/coding.jpg";
import glueUtil from "../assets/img/python.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "ASU Marketplace",
      description: "Online Student Marketplace - ReactJS Desktop and Mobile",
      imgUrl: marketplace,
    },
    {
      title: "Women Weed World",
      description: "Blog Site - Developed and Hosted in Wordpress",
      imgUrl: weed,
    },
    {
      title: "Star Fighter",
      description: "3D First Person Dogfight Game - Unity, C#, AI",
      imgUrl: starFighter,
    },
    {
      title: "Gabe's Garden",
      description: "2D Logic Maze Game - GameMaker, Adobe Suite",
      imgUrl: gabeGarden,
    },
    {
      title: "S3 Rewrite Utility",
      description:"Parquet Rewrite Utility - Java, Spark, Airflow, Harness",
      imgUrl: s3Util,
    },
    {
      title: "AWS Glue Data Catalog Backup",
      description:"Glue Data Catalog Export and Import Data Backup - Python, AWS Glue, Jenkins ",
      imgUrl: glueUtil,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <div className="project-bx">
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Projects</h2>
                    <p>
                      In this section, you'll find a collection of projects that
                      showcase my work across front-end, back-end, and game
                      development. From building responsive, interactive web
                      applications with modern JavaScript frameworks to
                      designing robust server-side solutions, each project
                      highlights my full-stack development skills. I also
                      explore the world of game development, creating immersive,
                      engaging experiences with game engines such as Unity.
                      These projects reflect my ability to solve complex
                      problems, implement creative solutions, and deliver
                      high-quality results across diverse development domains.
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Overview</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="front">Frontend</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="back">Backend</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="game">Game Development</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content 
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="game">
                          <Row>
                            <Col>
                            <h4> Star Fighter</h4>
                              <p>
                                Star Fighter is a FPS dogfighting game with
                                in-depth 3D movement mechanics fucnitoning in an anti-gravity environment. Developed in
                                Unity and C#, this game displays various
                                advanced game programming techniques,
                                integrations with AI resources and complex world
                                and plot design. Within my team, my primary
                                responsibilities were focused on aspects
                                such as power-ups, scoring, health, model
                                creation and acquisition, sound and UI design,
                                with additoanll contributions to multiplyer gameplay.<br></br>
                                <a href="https://rdgh0st.itch.io/star-fighter"> Game Profile </a>
                              </p>
                            </Col>
                            <Col>
                              <h4> Gabe's Garden</h4>
                              <p>
                              Gabe’s Garden is a 2D logic puzzle and maze game modeled after an old Club Penguin minigame. Developed in GameMaker2 with art resources created in Adobe Suite using Photoshop and Illustrator, Gabe’s Garden displays fun problem solving challenges delivered with a child-centric art design, fit for all ages! This was an indivually developed project as part of my Game Development Certification. 
                              </p>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="front">
                          <Row className="row">
                            <Col>
                              <h4>ASU Marketplace</h4>
                              <p>
                                ASU Marketplace is an online second-hand hub for
                                ASU Students to buy and sell merchandise,
                                similar to OfferUp but with the added security
                                of being an ASU Student and ensuring the
                                products are local. I worked with my team to
                                complete the application built in React with a
                                live connection to Google Firebase with back-end
                                hosting infrastructure utilizing Google Cloud
                                Platform. This application featured a live
                                product listings feed, user account creation,
                                login and account settings as well as a
                                functional in-app chat feature to connect buyers
                                and sellers.
                              </p>
                            </Col>
                            <Col>
                              <h4>Women Weed World Blog</h4>
                              <p>
                                Women Weed World is a Word press blog site that
                                allows users to be a part of a community with
                                shared interests, provide informative research
                                and share options. This was developed on behalf
                                of a client, however is no longer publicly
                                accessible.
                              </p>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="back">
                          <Row>
                            <Col>
                              <h4>
                                Glue Metastore Data Catalog Export Utility
                              </h4>
                              <p>
                                This utility was created as part of a resilience
                                effort to generate and store a back of AWS Glue
                                Data Catalog metastore. This data catalog stores
                                metadata of database schemas, column details and
                                S3 locations that are leveraged by Apache Hive
                                to create a usable and interactive database.
                                This utility was built entirely in Python
                                utilizing boto3 and ran in an AWS Glue job
                                regularly, and has an import counterpart in the
                                event of an outage.
                              </p>
                            </Col>
                            <Col>
                              <h4>S3 Parquet Rewrite Utility</h4>
                              <p>
                                This utility was also created for infrastructure
                                resiliency, to allow users to mutate what are
                                otherwise immutable parquet files in AWS S3.
                                This utility, built in Java and embedded Apache
                                Spark dataframes, accesses S3 files, queries
                                them based on user inputs and outputs the edited
                                files, in replacement of what was in S3. This
                                gives users the ability to filter out corrupted,
                                unwanted or protected data from ingested data
                                sets.{" "}
                              </p>
                            </Col>
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </div>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
