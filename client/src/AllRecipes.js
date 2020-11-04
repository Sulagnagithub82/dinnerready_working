import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import Axios from 'axios';
import AllRecipe from './AllRecipe';
import {Button} from'./components/Button';

import './Recipe.css';
import { Image, Transformation } from 'cloudinary-react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { CloudinaryContext } from "cloudinary-react";

function AllRecipes(props){
  const id = props.match.params.id
  const [allRecipe,setallRecipe]= useState([]);



// const  AllRecipes = () => {   
// const [recipes,setallrecipes]= useState();
// // const [id,setallRecipes]= useState([]);
//?id=${id}&type=single

useEffect(()=> {
    Axios.get(`/api/recipes/id?id=${id}&type=single`)
       .then(response => {
         setallRecipe(response.data[0])
          })
//   console.log('Effect has been run');
//   getAllRecipes();
//   // getAllRecipes();
 },[]);
// const getAllRecipes = async () => {
//     // const response = await fetch("./api/recipes");
//   const response = await fetch("./api/recipes/id");
//   const data = await response.json();
//   setallrecipes(data);
//   console.log(data);
//}

  return (
    <div>
      <div>
        <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/recipe">Recipes</Breadcrumb.Item>
              <Breadcrumb.Item active>Detail Recipe</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="flex-container">

        <h3 className="title">{allRecipe.title }</h3>
         {/* <p>Description:{allRecipe.description}</p> */}
         <p>Cuisine:{allRecipe.cuisine}</p>
         <p>Gluten Free:{allRecipe.glutenFree}</p>
         <p>Serves:{allRecipe.serves}</p>
         <p>Preparation Time:{allRecipe.PrepTime}</p>
         <p>Cooking Time:{allRecipe.CookingTime}</p>
         <p>Ingredients:{allRecipe.ingredients}</p>
         <p>Method:{allRecipe.method}</p>
         <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'  ><a href="/recipe">Back to recipe</a></Button>

         </div>
      </div>
      )
}
      // <div className="Recipes">
      // <div>{allRecipe.title }</div>
      
        //{/* <CloudinaryContext cloudName="dinnerready"  */}
           //{/* <AllRecipe    */}
            //{/* //   key={allRecipe._id}
            //  title={allRecipe.title }
            //  imageId={allRecipe.image}/> */}
             //{/* description={allRecipe.description}
             //CookingTime={allRecipe.CookingTime} */}
             //{/* />  */}
         //{/* </CloudinaryContext>  */}
      //  </div>
    
     
       
export default AllRecipes;
        {/* <button onClick={()=> setModalIsOpen(true)}>open</button> */}
