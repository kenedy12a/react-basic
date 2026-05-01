import Home from './home';
import NavBar from './navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
       <div className="content">
         <Home />
       </div>
    </div>
   
  );
}

export default App;