import React, { useEffect, useState } from 'react'
import FeatureCard from '../FeatureCards';


const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const fetchCategories = async () => {
        const response = await fetch(
          'https://fakestoreapi.com/products/categories'
        );
        const data = await response.json();
        console.log(data);
        setCategories(data);
      };
  
      fetchCategories();
    }, []);
  
    if(categories.length === 0){
      return <div>Loading.....</div>
    }
  
    return (
      <div>
        <FeatureCard cards={categories}/>
      </div>
    );

}

export default Categories