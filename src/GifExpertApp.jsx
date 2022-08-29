import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    
  const [categories, setCategories] = useState(['Kenobi'])

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([...categories, newCategory])
  }
  
  return (
        <>
          <h1>GifExpertApp</h1> 

          <AddCategory onNewCategory={ addCategory } />

            {categories.map((category) => (
              <GifGrid 
                category={category}
                key={category} 
              />
            ))}

        </>
    )
}
