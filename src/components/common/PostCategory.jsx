import React, { useState, useEffect } from 'react';

function PostCategory({ onCategoryChange }) {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('none');
  // const [error, setError] = useState(null);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        
        const response = await fetch('https://olaniyijoe.pythonanywhere.com/api/categories/', {
          headers: {
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } 
    };

    fetchCategories();
  }, []);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    onCategoryChange(selectedValue);
  };




  return (
    <div>
      
        <select
          value={selectedCategory}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="none">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
    </div>
  )
}

export default PostCategory
