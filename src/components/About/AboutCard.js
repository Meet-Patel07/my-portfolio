import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Meet Patel </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />
            <br />
            I have completed my schooling in Secondary School at Shree C. P. Patel Fellowship High School in the year of 2009-2017 & Higher Secondary School at Saraswati Vidhya Mandir in the year of 2017-2020 and also I have completed my study in Bachelors of Commerce (B.Com) at Sardar Vallabhbhai Vanijya Mahavidhyalaya in the year of 2020-2023.
            <br />
            <br />
            I am currently completed my course at the Red and White Multimedia Education.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Meet Patel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
