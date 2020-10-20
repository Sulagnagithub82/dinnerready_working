import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

import AllRecipes from './AllRecipes';

import './Recipe.css';
import { CloudinaryContext } from "cloudinary-react";

// import './recipeImages'
// import Image from './Image';
const Recipes = () => {   
const [recipes,setRecipes]= useState([]);
// const [id,setallRecipes]= useState([]);

useEffect(()=> {
  console.log('Effect has been run');
  getRecipes();
  // getAllRecipes();
},[]);
const getRecipes = async () => {
  const response = await fetch("./api/recipes");
  const data = await response.json();
  setRecipes(data);
  console.log(data);
}
// const getAllRecipes = async () => {
//   // const response = await fetch("./api/recipes/id");
//   // const data = await response.json();
//   // setallRecipes(data);
//   // console.log(data);
// }

    return (
      <div className="Recipes">
        <CloudinaryContext cloudName="dinnerready" >
            {recipes.map(recipes => (
            <Recipe 
            key={recipes._id}
            title={recipes.title } 
            imageId={recipes.image}
            description={recipes.description}
            CookingTime={recipes.CookingTime}/>
            ),
            )}
        </CloudinaryContext>
      </div>
    
    )
}
export default Recipes;
        {/* <button onClick={()=> setModalIsOpen(true)}>open</button> */}
