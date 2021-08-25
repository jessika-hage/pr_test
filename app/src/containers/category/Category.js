import React, { useState, useEffect } from 'react';

import './Category.scss';
import { getCategoryList } from './state/category';
import { ProductCard } from '../../components/product-card/ProductCard';
import { Filter } from '../../components/filter-bar/Filter';

export const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [filterData, setFilterData] = useState(categoryData);
  const [value, setValue] = useState('');

  useEffect(() => {
    const loadedData = getCategoryList();
    setCategoryData(loadedData.products);
    handleFilter();
  }, [value, categoryData]);

  const handleFilter = () => {
    setFilterData(categoryData.filter((category) => 
    category.name.includes(value)))
  };

  return (
    <>
      <Filter 
        brand={value} 
        onBrandChange={(e) => setValue(e.target.value)} />
      <main className='main-container'>
        {filterData.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </main>
    </>
  )
};
