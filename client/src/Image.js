// // import React, { useEffect, useState } from 'react';

// // const Image =()=>{
// // const [image,setImages]=useState([]);


// // useEffect(()=> {
// //   console.log('Effect has been run');
// //   getImages();
// // },[]);


// // const getImages = async () => {
// //   // const response = await fetch("./api/recipes");
// //   const response = await fetch ("http://res.cloudinary.com/dinnerready/image/upload/v1601533852/IMG_4277_dervkk.jpg");
// //   const data = await response.json();
// //   // const images= await image.json();
// //   // setRecipes(data);
// //   setImages(data);
// //   console.log(data);
// //   // console.log(images)
// // }
// // return (getImages)
// // }
// // export default Image;



// // import React, { Component } from 'react';

// // // import './recipeImages';

// // class Image extends Component {
// //   constructor(props){
// //     super(props);
// //     this.state = {
// //       Data: [
// //         {"Ititle":"Cake",
// //         "src": "../public/recipeImages/IMG_4274.jpg"
// //         },
// //         {"Ititle":"Cake",
// //         "src": "../public/recipeImages/IMG_4275.jpg"
// //         },
// //         {"Ititle":"Cake",
// //         "src": "../public/recipeImages/IMG_4276.jpg"
// //         },
// //         {"Ititle":"Cake",
// //         "src": "../public/recipeImages/IMG_4277.jpg"
// //         },
// //         {"Ititle":"Cake",
// //         "src": "../public/recipeImages/IMG_4278.jpg"
// //         },
// //         {"Ititle":"Cake",
// //         "src": "../public/recipeImages/IMG_4279.jpg"
// //         },
// //         {"Ititle":"Cake",
// //         "src": "../public/recipeImages/IMG_4280.jpg"
// //         },
// //         {"Ititle":"Cake",
// //         "src": "../public/recipeImages/IMG_4281.jpg"
// //         },
// //         {"Ititle":"Cake",
// //         "src": "../public/recipeImages/IMG_4282.jpg"
// //         },
// //         {"Ititle":"Cake",
// //         "src": "../public/recipeImages/IMG_4283.jpg"
// //         },
// //         {"Ititle":"Cake",
// //         "src": "../public/recipeImages/IMG_4284.jpg"
// //         },
// //         {"Ititle":"Cake",
// //         "src": "../public/recipeImages/IMG_4285.jpg"
// //         },
// //       ]
// //     }
// //   }

// // render() {
// //   return (
// //     <div>
// //       {
// //         this.state.Data.map((item, src)=>(
// //           <p>{item.src}</p>
// //       ))}
// //     </div> 
// //   );
// // }
// // }



// import React from 'react';
// // import './Cards.css';
// // import ImageCard from './ImageCard';

// function Image() {
//   return (
//     <div className='cards'>
//           <ul>
//           <li>
//             <img
//               src='./recipeImages/IMG_4274.jpg' height="80" width="100"
              
//             />
//             <img
//               src='./recipeImages/IMG_4275.jpg' height="80" width="100"
              
//             />
//             <img
//               src='./recipeImages/IMG_4276.jpg' height="80" width="100"
              
//             />
//             <img
//               src='./recipeImages/IMG_4277.jpg' height="80" width="100"
              
//             />
//             <img
//               src='./recipeImages/IMG_4278.jpg'  height="80" width="100"
//             />
//             </li>
//           </ul>
//     </div>
//   );
// }


// export default Image