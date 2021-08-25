import React, { useState, useEffect, useCallback, Fragment } from 'react';

import './Category.scss';
import { getCategoryList } from './state/category';
import { ProductCard } from '../../components/product-card/ProductCard';
import { ProductCardList } from '../../components/product-card/ProductCardList';
import { Filter } from '../../components/filter-bar/Filter';

export const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [filterData, setFilterData] = useState(categoryData);
  const [sortingData, setSortingData] = useState(filterData);
  const [showList, setShowList] = useState(false);
  const [value, setValue] = useState('');

  // Filters on category brand
  const handleFilter = useCallback(() => {
    setFilterData(categoryData.filter((category) => 
    category.name.includes(value)));
  }, [categoryData, value]);

  // Initalizing the products
  useEffect(() => {
    const loadedData = getCategoryList();
    setCategoryData(loadedData.products);
    handleFilter();
  }, [handleFilter]);

  // Sorts on price, rating or popularity
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
    <main className='main-container'>
      <h2 className='main-container__category-title'>Mobiltelefoner</h2>
      <section className='container'>
        <Filter 
          onShowAll={() => setFilterData(categoryData)}
          brand={value} 
          onBrandChange={(e) => setValue(e.target.value)}
          onSortPrice={() => handleSorting('price')}
          onSortRating={() => handleSorting('rating')}
          onSortPopular={() => handleSorting('popular')}
          onShowList={() => setShowList(true)}
          onShowIcons={() => setShowList(false)} />
        <div className='product-container'>
          {filterData.map((item) => (
            <Fragment key={item.id}>
              {showList 
                ? <ProductCardList key={item.id} product={item} />
                : <ProductCard key={item.id} product={item} /> 
              }
            </Fragment>
          ))}
        </div>
      </section>
    </main>
  )
};
