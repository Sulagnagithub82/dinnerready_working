// import React from 'react';
// import {Link } from 'react-router-dom';
// import '../App.css';
// // import { Button } from './Button';
// import Menu from '../actions/recipeActions';
// import CardItem from './CardItem';
// import './Recipe.css'

// const Recipes = () => {
//   return (
//     <div className='recipe-container'>
//       <CardItem/>,
//       <Menu />
//     </div>  
//   ) 
// }

// export default Recipes  


import React from 'react'; 
import style from './recipe.module.css';
import { Image, Transformation } from 'cloudinary-react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'


const Recipe = ({_id,title,image,description,CookingTime,imageId}) => { 
    return(
       <div>
            <Breadcrumb>
               <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
               <Breadcrumb.Item active>Recipes</Breadcrumb.Item>
            </Breadcrumb>

       <div className={style.recipes}>
          <h3>{title}</h3>
          <p>{_id}</p>
          <p>{image}</p>
          <Image
               publicId={imageId}
               width="350"
               crop="scale"
               style={{ margin: "10px" }}>
               <Transformation quality="auto" />
         </Image>
          <p>Description:{description}</p>
          <p>Cooking Time:{CookingTime}</p>
          <a href="./allrecipes">More</a>

        </div>
        </div>

     ) 
 } 

export default Recipe;
 


