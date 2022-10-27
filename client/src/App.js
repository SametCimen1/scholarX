import {Helmet} from 'react-helmet'
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Search from './Search'

function App() {
  return (
    <Routes>
      <Route exact path ="/" component = {Home}/>
      <Route exact path ="/search" component = {Search}/>
    </Routes>

  );
}

export default App;


//check if user exist here