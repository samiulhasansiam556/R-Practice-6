import { useEffect, useState } from 'react';
import './App.css';
import Products from './Products';
import Search from './Search';

function App() {
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setCategory(data);      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setCategory]);
   
   console.log(search);

  const searchHandle = (value) => {
    if (!value) return; // handle empty or null value

    const filtered = category.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setSearch(filtered);
  };

  return (
    <>
      <Search search={searchHandle} />
      {category ? <Products data={search || category} /> : <p>Loading...</p>}
    </>
  );
}

export default App;