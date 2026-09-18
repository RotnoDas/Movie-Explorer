import { Routes, Route } from 'react-router';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Movies from './pages/Movies';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Route>
    </Routes>
  );
}

export default App;
