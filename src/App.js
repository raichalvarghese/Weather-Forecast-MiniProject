import './App.css';
import background from "./bg2.jpg";
import Main from './components/Main';

function App() {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`}}>
      <Main></Main>
      </div>
  );
}

export default App;