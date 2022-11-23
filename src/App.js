import './App.css';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import Java from '../src/assets/javascript.png'
import Node from '../src/assets/node.png'
import Python from '../src/assets/python.png'
import reactImg from '../src/assets/react.png'

function App() {
  const galleryImage = {
    img:Java,
    img:Node,
    img:Python,
    img:reactImg
  }

  return (
    <div>
      <Navbar />
      <Gallery 
        galleryImage = {galleryImage}
      />
    </div>
  );
}

export default App;
