import Card from "react-bootstrap/Card";

export default function Contact() {
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
          <Card.Title>Contact Me</Card.Title>
          <Card.Text style={{ fontSize: "30px" }}>
           <a href="mailto:josephonate@yahoo.com">josephonate@yahoo.com</a>
           <p>My Cell is (951) 816-8897</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}