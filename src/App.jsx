import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import MyDemo from "./MyDemo.jsx";
import Clock from "./Clock.jsx";

function App(){

  return(
    <>
      <Header/>
      <Clock/>
      <MyDemo/>
      <Card name="Bob Smith" background="I am a chill guy"/>
      <Card name="Jill Jones" background="I am a chill gal"/>
      <Card/>
      <Footer/>
    </>
  );
}

export default App