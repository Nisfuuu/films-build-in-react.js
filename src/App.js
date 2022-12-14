import "./App.css";
import NavigationBar from "./componens/NavigationBar";
import Intro from "./componens/Intro";
import Trending from "./componens/Trending";
import Superhero from "./componens/Superhero";
import "./style/LandingPage.css";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
