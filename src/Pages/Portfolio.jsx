import Carousel from "react-bootstrap/Carousel";
import PasswordGen from "../assets/Images/PasswordGen.png";
import Horiseon from "../assets/Images/Horiseon.png";
import CodingQuiz from "../assets/Images/CodingQuiz.png";
import Weather from "../assets/Images/Weather.png";
import JATE from "../assets/Images/JATE.png";
import NoteTaker from "../assets/Images/NoteTaker.png";

export default function Portfolio() {
  const imageStyle = {
    display: "flex",
    maxWidth: "100%", // Set the maximum width of the image to 100% of its container
    maxHeight: "700px", // Set the maximum height of the image
    margin: "auto", // Center the image horizontally
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Carousel fade data-bs-theme="dark" style={{ width: "50%" }}>
        <Carousel.Item style={{ margin: "auto" }}>
          <a href="https://josephonate.github.io/Module_1_challenge/">
            <img src={Horiseon} alt="Horiseon" style={imageStyle} />
          </a>
          <Carousel.Caption style={{ color: "black" }}>
            <a href="https://github.com/Josephonate/Module_1_challenge">
              <h3>Horiseon</h3>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://josephonate.github.io/Module_3_Challenge/">
            <img
              src={PasswordGen}
              alt="Password Generator"
              style={imageStyle}
            />
          </a>
          <Carousel.Caption style={{ color: "black" }}>
            <a href="https://github.com/Josephonate/Module_3_Challenge">
              <h3>Password Generator</h3>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://josephonate.github.io/Quiz-using-JS/">
            <img src={CodingQuiz} alt="Quiz challange" style={imageStyle} />
          </a>
          <Carousel.Caption style={{ color: "black" }}>
            <a href="https://github.com/Josephonate/Quiz-using-JS">
              <h3>Coding Quiz</h3>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://josephonate.github.io/Weather_Dashboard_app/">
            <img src={Weather} alt="Weather Dashboard" style={imageStyle} />
          </a>
          <Carousel.Caption style={{ color: "black" }}>
            <a href="https://github.com/Josephonate/Weather_Dashboard_app">
              <h3>Weather Dashboard</h3>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://text-editor-jo-1f3b00675733.herokuapp.com/">
            <img src={JATE} alt="JATE" style={imageStyle} />
          </a>
          <Carousel.Caption style={{ color: "black" }}>
            <a href="https://github.com/Josephonate/Text_Editor">
              <h3>JATE</h3>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://github.com/Josephonate/Express.js">
            <img src={NoteTaker} alt="Note Taker" style={imageStyle} />
          </a>
          <Carousel.Caption style={{ color: "black" }}>
            <a href="https://github.com/Josephonate/Express.js">
              <h3>Note Taker</h3>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
