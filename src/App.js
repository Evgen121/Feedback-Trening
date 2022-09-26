import Header from "./component/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import FeedbcakList from "./component/FeedbcakList";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";
import { FeedbackProvider } from "./contex/FeedbackContex"; 
import About from "./pages/About";
import AboutIconLink from "./component/AboutIconLink";
import Post from "./component/Post";

function App() {
   

  return (
    <FeedbackProvider>
    <Router>
    <Header/>
    <div className="container">
      <Routes>
          <Route  exact path='/'element={
            <>
            <FeedbackForm/>
            <FeedbackStats />
            <FeedbcakList/>
            </>
          }>
            
        </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/post' element={<Post/>}/>
        
      </Routes>
      <AboutIconLink/>
    </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
