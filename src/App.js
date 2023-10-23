
import './App.css';
import { TodoList } from './TodoList';
import image from './imageTwo.avif';
import imageTwo from './imageFour.webp';

function App() {
  return (
    <div className="App">
      <div>
      <h1>Your daily planner<img src={ imageTwo } width="40px" alt='rose'/></h1>
      </div>
      <TodoList/>
      <div>
        <img className='image' src={ image } width="250 px" alt='plan'/>
      </div>
    </div>

  );
}

export default App;
