import Onate from "../assets/Images/Onate.png"

export default function Resume() {
  const imageStyle = {
    display: "flex",
    maxWidth: "100%", // Set the maximum width of the image to 100% of its container
    maxHeight: "770px", // Set the maximum height of the image
    margin: "auto", // Center the image horizontally
  };
    return (
      
      <div>
        <a href="https://docs.google.com/document/d/0By180X7ieOkScDUzUC10aFJSX1VCdW5HVGpVSXNjajhsN053/edit?usp=sharing&ouid=109692363536536030450&resourcekey=0-VjZ4-mDcjXBIj7hYJ-KO-A&rtpof=true&sd=true">
                <img src={Onate} alt="Resume" style={imageStyle}/>
                </a>
      </div>
    );
  }