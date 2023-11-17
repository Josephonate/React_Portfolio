import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import '../styles/Footer.css';
function Footer() {
  return (
    
    <Container fluid="lg" className="footer">
      <Row>
        <Col className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Josephonate"
                style={{ color: "black"}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareGithub size={30}/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/joseph-onate-a55081275/"
                style={{ color: "black" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30}/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
