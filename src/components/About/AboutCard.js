import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="purple">AMIR SOHAIL </span>
            from <span className="purple"> Kolkata, West Bengal, India.</span>
            <br />
            I am currently employed as a software engineer at Brainvire infotech.
            <br />
            I have completed Bachelor of technology in Electronics and Communication Engineering (ECE) at Aliah University (Kolkata)
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Open source contributions
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem solving on different platform like leetcode, CodeChef, GFG etc
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Amir Sohail</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
