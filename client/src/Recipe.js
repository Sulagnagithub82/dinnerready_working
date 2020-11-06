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


const Recipe = ({_id,title,image,description,CookingTime,imageId}) => {
   // const _id= ObjectId();
    return(
       <div className="Recipe">
       <div key={_id} className={style.recipes}>
          <h3 >{title}</h3>
          {/* <p>{_id}</p>
          <p>{image}</p> */}
          <Image
               publicId={imageId}
               width="750"
               crop="scale"
               style={{ margin: "10px" }}>
               <Transformation quality="auto" />
         </Image>
         {/* <p>ID:{ObjectId({_id}).toString()}</p> */}
          <p>Description:{description}</p>
          <p>Cooking Time:{CookingTime}</p>

        </div>
        </div>

     ) 
 } 

export default Recipe;
 


