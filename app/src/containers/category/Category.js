import React, { useState, useEffect } from 'react';

import { getCategoryList } from './state/category';
import './Category.scss';

export const Category = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const loadedData = getCategoryList();
    setCategoryData(loadedData.products);
  }, []);

  return (
    <>
      {categoryData.map((item) => (
        <div key={item.id} className="hello-world">
          <p>{item.name}</p>
        </div>
      ))}
    </>
  )
};
