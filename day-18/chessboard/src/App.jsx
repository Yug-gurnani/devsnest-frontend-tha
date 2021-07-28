import './App.css';
import Box from './Box';

let odd = '#000';
let eve = '#fff';

function App() {
  return (
    <div className="App">
      <div className="container">
        {
          [...Array(8)].map((ele, index) => {
            [odd, eve] = [eve, odd]
            return [...Array(8)].map((ele2, index2) => {
              if(index2 % 2 === 0){
                return <Box color = {eve} />;
              }
              else{
                return <Box color = {odd} />;
              }
            })
            
          })
        }
      </div>
    </div>
  );
}

export default App;
