
// import { ImageGrid } from "./components/ImageGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { ImageDetails } from "./pages/ImageDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/"> 
          <h1 className={styles.title}>Portafolio Illustrator - 2024</h1>
        </Link>
        
      </header>
      <main>
        <Switch>
          <Route exact path="/images/:imgId"> 
            <ImageDetails/> 
          </Route>
          <Route path="/">
            <LandingPage/> 
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
