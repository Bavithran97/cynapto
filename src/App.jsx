import "./App.css";
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Content from "./Components/Content";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Review from "./Components/Review";
import Royalty from "./Components/Royalty";
import Watermark from "./Components/Watermark";

function App() {
  return (
    <>
      <div className="msg">
        <span className="cont">Clipchamp is now part of Microsoft.Read more</span>
      </div>
      <Navbar />
      <Banner />
      <Content />
      <Royalty />
      <Watermark />
      <Card />
      <Edit />
      <Create />
      <Review />
      <Footer />
    </>
  )
}

export default App