import './App.css';
import left from './picO/left.jpg';
import './Style.css'
import video from './picO/file_example.mp4'

function App() {
  return (
    <div style={{ border:'solid 1px black'}}>
      <h1 className ="title red">Ndifreke</h1>
      <br />
      <h2>Image in public folder</h2>
      <img src="./pic/right.jpg" width="550" height="400" alt="Bird" />
      <br />
      <h2>Image in src folder</h2>
      <img src={left} width="550" height="400" alt="Computers" />
      <video width="320" height="240" controls>
      <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
