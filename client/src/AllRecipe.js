import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import style from './recipe.module.css';
import { Image, Transformation } from 'cloudinary-react';


const AllRecipe = ({_id,title,image,ingredients,description,serves,PrepTime,cuisine,glutenFree,CookingTime,imageId,method}) => { 

  // const [modalIsOpen, setModalIsOpen] = useState(true)

    return(
      <div className={style.recipes}>
      <AllRecipe>
         <h3>{title}</h3>
         <p>{_id}</p>
         <p>{image}</p>
         <p>Description:{description}</p>
         <p>Cuisine:{cuisine}Gluten Free:{glutenFree}Serves:{serves}Cooking Time:{PrepTime}Cooking Time:{CookingTime}</p>
         <p>{ingredients}</p>
         <p>{method}</p>
         <Image
              publicId={imageId}
              width="350"
              crop="scale"
              style={{ margin: "10px" }}>
              <Transformation quality="auto" />
        </Image>
       </AllRecipe>
       </div>

     ) 
 } 

export default AllRecipe;


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


// import React from 'react'; 
// import style from './recipe.module.css';
// import { Image, Transformation } from 'cloudinary-react';


// const AllRecipe = () => { 
//     return(
//        <div >
//           <h3>all recipes</h3>

//         </div>
//      ) 
//  } 

// export default AllRecipe;
 



