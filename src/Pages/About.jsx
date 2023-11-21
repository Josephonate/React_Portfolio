import Card from "react-bootstrap/Card";

export default function About() {
  return (
    <div
      style={{
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Card style={{ backgroundColor: "#EAE1DF",width: "60rem" }}>
        <Card.Body>
          {/* <Card.Title>About Page</Card.Title> */}
          <Card.Text style={{ fontSize: "30px" }}>
            Hi my name is Joseph Oñate I'm 34 years old I'm originally from
            California.
            <br />
            Now live in central Florida happily married with two crazy kids.
            <br />I was in the Air Force as an active duty member for 10 years
            and now I'm in the reserves. I'm currently a Project Engineer for
            View inc. <br />
            I went to school for Electronic Engineer I have my
            AAS and I want to learn more about coding so that I can progress in
            my job and future endeavors.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
