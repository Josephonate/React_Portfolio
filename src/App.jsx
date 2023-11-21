// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Nav from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <div>
      <Header />
      <Nav />
    </div>
    <main className="mx-3" style={{ flex: 1 }}>
      <Outlet />
    </main>
    <Footer />
  </div>
);
}
export default App;
