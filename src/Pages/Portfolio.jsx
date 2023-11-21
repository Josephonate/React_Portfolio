import PasswordGen from "../assets/Images/PasswordGen.png";
import Horiseon from "../assets/Images/Horiseon.png";
import CodingQuiz from "../assets/Images/CodingQuiz.png";
import Carousel from "react-bootstrap/Carousel";

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
      </Carousel>
    </div>
  );
}
