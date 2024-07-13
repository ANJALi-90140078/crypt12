import './App.css';
import { Routes, Route} from "react-router-dom"
import Exchanges from './component/Exchanges';
import Coins from './component/Coins';
import CoinsDetail from './component/CoinsDetail';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Exchanges/>} />
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/coins/:id' element={<CoinsDetail/>}  />
    </Routes>
  );
}

export default App;
