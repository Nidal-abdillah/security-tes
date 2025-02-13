import { Route, Routes } from 'react-router';
import './App.css';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { ErorrPage } from './pages/ErorrPage';
import { Aboute } from './pages/About';

// type Teacher = {
//   name: string;
//   job: string;
//   age: number;
//   city: string;
//   id: number;
// };

// const teachers: Teacher[] = [
//   {
//     job: 'Dosen',
//     name: 'pak dika',
//     age: 34,
//     city: 'bandung',
//     id: 1,
//   },
//   {
//     job: 'creator',
//     name: 'pak eko',
//     age: 16,
//     city: 'jakarta',
//     id: 2,
//   },
//   {
//     job: 'Tech Lead',
//     name: 'pak venta',
//     age: 24,
//     city: 'semarang',
//     id: 3,
//   },
//   {
//     job: 'pengangguran',
//     name: 'pak vio',
//     age: 28,
//     city: 'Surabaya',
//     id: 4,
//   },
// ];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:name" element={<ProductPage />} />
        <Route path="/*" element={<ErorrPage />} />
        <Route path="/about" element={<Aboute />} />
      </Routes>
    </>
  );
}

export default App;
