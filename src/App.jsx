// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Nav from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh',backgroundColor: "#667761" }}>
    <header style={{ display: 'flex', justifyContent:"space-evenly", backgroundColor: "#545E56"}}>
      <Header />
      <Nav />
    </header>
    <main className="mx-3" style={{ flex: 1 }}>
      <Outlet />
    </main>
    <Footer />
  </div>
);
}
export default App;
