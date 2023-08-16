import react, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios'
import HomeScreen from './screens/HomeScreen';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {

      try {
        const { data } = await axios.get('/api/products');
        console.log('Data ', data);
        setProducts(data);
      } catch (err) {
        console.log('Error ', err)
      }
    }
    fetchProducts();

  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>)

}

export default App;
