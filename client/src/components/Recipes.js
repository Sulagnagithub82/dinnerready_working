// import React from 'react';
// import {Link} from 'react-router-dom';
// const Recipes = props =>(

//     <div className="container">
//     <div className="row" >
    
// 		if(props.recipes){
//       props.recipes.map(recipe=> {
           
//               return( 
//                 <div className="col-md-4" key={recipe.recipe_id} style={{marginBottom:"2em"}}>
//                 <div className="recipes__box">
//                     <img className="recipes__box-img" src={recipe.image_url} alt={recipe.title}/>
//                     <div className="recipes__text">
//                     <h5 className="recipes__title">
//                     {recipe.title.lenght < 20 ? `${recipe.title}` : `${recipe.title.substring(0,25)}`}</h5>
//                     <p className="recipes__subtitle">Publisher: <span>
//                         {recipe.publisher}</span> </p>
//                         <button className="recipes_buttons">
//                         <Link to={{pathname:`/recipe/${recipe.recipe_id}`,
//                         state : {recipe:recipe.title}    
//                     }} 
//                          >View Recipe</Link>
                        
//                         </button>
//                     </div>
                    
//                 </div>              
//                </div>)
//       }
		
//       )
//     } 
//     </div>
//     </div>
      
// );

// export default Recipes;