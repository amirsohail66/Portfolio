import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
        LET ME <span className="purple">INTRODUCE</span> MYSELF
      </h1>
      <p className="home-about-body">
        I fell in love with programming and have certainly learned
        a lot along the way… 🤷‍♂️
        <br />
        <br />
        I am fluent in classics like
        <i>
          <b className="purple"> JavaScript, Java, and TypeScript, </b>
        </i>
        and have hands-on experience with modern languages such as
        <i>
          <b className="purple"> C#, HTML/CSS, and SQL. </b>
        </i>
        <br />
        <br />
        My main fields of interest are developing new 
        <i>
          <b className="purple"> Web Technologies and Products, </b>
        </i>
        with a focus on areas related to 
        <i>
          <b className="purple"> AI and Cloud Computing.</b>
        </i>
        <br />
        <br />
        I am passionate about working with <b className="purple">Node.js</b> and leveraging 
        <i>
          <b className="purple"> Modern JavaScript Libraries and Frameworks </b>
        </i>
        such as 
        <i>
          <b className="purple"> React.js and Express.js. </b>
        </i>
        <br />
        <br />
        I also have strong expertise in 
        <i>
          <b className="purple"> GraphQL, REST APIs, and real-time communication tools,</b>
        </i>
        such as 
        <i>
          <b className="purple"> Socket.io, </b>
        </i>
        along with message queuing systems like 
        <i>
          <b className="purple"> Kafka and RabbitMQ.</b>
        </i>
        <br />
        <br />
        When working on cloud solutions, I frequently use 
        <i>
          <b className="purple"> AWS Lambda, Google Cloud Functions, </b>
        </i>
        and storage services like 
        <i>
          <b className="purple"> AWS S3 and Google Cloud Storage. </b>
        </i>
        <br />
        <br />
        I am highly proficient with developer tools and technologies like 
        <i>
          <b className="purple"> Git, Docker, Kubernetes, and Terraform, </b>
        </i>
        helping to streamline development and deployment processes.
      </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/amirsohail66"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AMIRSOH0590987"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amirsohailmd/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/amirsohail.in"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
