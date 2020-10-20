import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

import AllRecipe from './AllRecipe';

import './Recipe.css';
import { CloudinaryContext } from "cloudinary-react";

// import './recipeImages'
// import Image from './Image';
const  AllRecipes = () => {   
const [id,recipes,setallrecipes]= useState();
// const [id,setallRecipes]= useState([]);

useEffect(()=> {
  console.log('Effect has been run');
  getAllRecipes();
  // getAllRecipes();
},[]);
const getAllRecipes = async () => {
    // const response = await fetch("./api/recipes");
  const response = await fetch("./api/recipes/id");
  const data = await response.json();
  setallrecipes(data);
  console.log(data);
}

    return (
      <div className="Recipes">
        <CloudinaryContext cloudName="dinnerready" >
            {/* {recipes.map(recipes => ( */}
            <AllRecipe 
            key={recipes._id}
            title={recipes.title } 
            imageId={recipes.image}
            description={recipes.description}
            CookingTime={recipes.CookingTime}/>
            {/* ),
            )} */}
        </CloudinaryContext>
      </div>
    
    )
}
export default AllRecipes;
        {/* <button onClick={()=> setModalIsOpen(true)}>open</button> */}
