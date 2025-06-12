import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Phone from './pages/Phone';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phone" element={<Phone />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
