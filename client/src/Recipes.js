import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import {Link} from 'react-router-dom';
import AllRecipes from './AllRecipes';

import './Recipe.css';
import { CloudinaryContext } from "cloudinary-react";
import Breadcrumb from 'react-bootstrap/Breadcrumb'




const Recipes = () => {   
const [recipes,setRecipes]= useState([]);

useEffect(()=> {
  console.log('Effect has been run');
  getRecipes();
},[]);
const getRecipes = async () => {
  const response = await fetch("./api/recipes");
  const data = await response.json();
  setRecipes(data);
  console.log(data);
}
//{recipes._id}
    return (
      <div className="Recipes">
        <CloudinaryContext cloudName="dinnerready" >
        <Breadcrumb>
               <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
               <Breadcrumb.Item active>Recipes</Breadcrumb.Item>
        </Breadcrumb>

            {recipes.map((recipes,_id) => 
            <li key={recipes._id}>
            <div>                    
            <Link to={'/allrecipes/'+recipes._id}>{recipes.title }
            <Recipe 
            // key={recipes._id}
            // title={recipes.title } 
            imageId={recipes.image}
            description={recipes.description}
            CookingTime={recipes.CookingTime}/>
            </Link>
            </div>
            </li>
            )}
        </CloudinaryContext>
      </div>
    
    )
}
export default Recipes;
        {/* <button onClick={()=> setModalIsOpen(true)}>open</button> */}
