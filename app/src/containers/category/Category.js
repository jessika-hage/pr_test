import React, { useState, useEffect } from 'react';

import './Category.scss';
import { getCategoryList } from './state/category';
import { ProductCard } from '../../components/product-card/ProductCard';

export const Category = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const loadedData = getCategoryList();
    setCategoryData(loadedData.products);
  }, []);

  return (
    <main className='main-container'>
      {categoryData.map((item) => (
        <ProductCard product={item} />
      ))}
    </main>
  )
};
