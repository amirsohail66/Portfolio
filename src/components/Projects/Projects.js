import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/webrtcChat.png";
import shairing from "../../Assets/Projects/shairing.jpg";
import extnsion from "../../Assets/Projects/extension.png";
import empManagement from "../../Assets/Projects/emManagement.jpg";
import suicide from "../../Assets/Projects/teraform.png";
import foodiecart from "../../Assets/Projects/foodiecart.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={empManagement}
              isBlog={false}
              title="Employee-Management-System"
              description="Employee Management System is a desktop based application built using java Swing, Database: MySQL. The main objective of this application is to perform operations like insert, delete, update, print Employee’s data using java Database Connectivity."
              ghLink="https://github.com/amirsohail66/Employee-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodiecart}
              isBlog={false}
              title="FoodieCart"
              description="FoodieCart is a fully authenticated eCommerce website for selling food online. Built using the MEAN stack, it provides a seamless experience for customers to browse, order, and pay for their favorite dishes."
              ghLink="https://github.com/amirsohail66/FoodieCart"
              demoLink="https://foodmine-eakr.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Video-Chat-Socketio-WebRTC"
              description="This project is a video chat application built using Node.js, Express, Socket.io, and PeerJS. It allows users to create and join video chat rooms for real-time communication."
              ghLink="https://github.com/amirsohail66/video-chat-socketio-peerjs"
              demoLink="https://audio-video-chat.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={extnsion}
              isBlog={false}
              title="GNOME-Extension"
              description="This GNOME extension displays the system uptime and network speed (inbound and outbound) in the top bar. It's useful for monitoring system uptime and real-time network speed directly from the GNOME shell."
              ghLink="https://github.com/amirsohail66/GNOME-Extension-For-System-Performance"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="GCP-Serverless-Deployment-Terraform"
              description="Terraform configurations and scripts for deploying and managing serverless functions on Google Cloud Platform (GCP). Includes setup for Cloud Functions, API Gateway, Secret Manager, and IAM roles."
              ghLink="hhttps://github.com/amirsohail66/gcp-serverless-deployment-terraform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shairing}
              isBlog={false}
              title="Media-Share-Platform"
              description="Media Share Platform is a web application that allows users to upload photos and videos either publicly or privately. It includes functionalities for sharing media via QR codes or links, as well as interacting with content through likes and comments. Built with a user module for managing accounts and secure file handling."
              ghLink="https://github.com/amirsohail66/QR-Reader-Generator-Frontend"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
