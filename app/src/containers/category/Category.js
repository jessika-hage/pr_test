import React, { useState, useEffect } from 'react';

import './Category.scss';
import { getCategoryList } from './state/category';
import { ProductCard } from '../../components/product-card/ProductCard';
import { Filter } from '../../components/filter-bar/Filter';

export const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [filterData, setFilterData] = useState(categoryData);
  const [sortingData, setSortingData] = useState(filterData);
  const [value, setValue] = useState('');

  useEffect(() => {
    const loadedData = getCategoryList();
    setCategoryData(loadedData.products);
    handleFilter();
    handleSorting();
  }, [value, categoryData]);

  const handleFilter = () => {
    setFilterData(categoryData.filter((category) => 
    category.name.includes(value)));
  };

  const handleSorting = (type) => {
    setSortingData(filterData.sort((a, b) => {
      if (type === 'price') {
        return a.cheapestPrice.amount - b.cheapestPrice.amount;
      } else if (type === 'rating') {
          return b.rating.averageRating - a.rating.averageRating;
        } else {
            return b.numberOfMerchants - a.numberOfMerchants;
        }
    }))
  };

  return (
    <div className='product-container'>
      <Filter 
        brand={value} 
        onBrandChange={(e) => setValue(e.target.value)}
        onSortPrice={() => handleSorting('price')}
        onSortRating={() => handleSorting('rating')}
        onSortPopular={() => handleSorting('popular')} />
      <main className='main-container'>
        {filterData.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </main>
    </div>
  )
};
