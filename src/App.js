import './App.css';
import Header from "./Header.js"
import Card from "./Card.js"
import {data} from "./data.js"

function App() {
  const card = data.map(item => {
    return (
      <Card 
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      {card}
      <footer><small>Created by</small> <span>Sree</span></footer>
    </div>
  );
}

export default App;
