import react, { useState, useEffect } from 'react'
import axios from 'axios'

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
    products && (<div>
      {products.map(product => (
        <div key={product.slug}>{product.name}<img src={product.image} alt='products' width={300} /></div>
      ))}
    </div>)
  )
}

export default App;
