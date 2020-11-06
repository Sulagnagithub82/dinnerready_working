
//START OF FETCHING DOG PICS FROM API 
  // import React, {Component} from "react";
  // import AjaxRecipe from "./AjaxRecipe";

  // class UsingAjax extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       dogImages: []
  //     }
  //   }
  //   componentDidMount(){
  //     fetch("https://dog.ceo/api/breeds/image/random/3")
  //     .then(res => res.json())
  //     .then((data) => {
  //       this.setState({dogImages: data.message})

  //     })
  //   }
  //   render(){
  //     const dogList = this.state.dogImages.map((url,i) => {
  //       return <AjaxRecipe key={i} url={url}/>
  //     })
  //   return(
  //     <div className="App">
  //       <h1>Dog Images</h1>
  //       {dogList}
  //     </div>
  //     );
  //   }
  // };

  // export default UsingAjax;
//END OF FETCHING DOG PICS FROM API 



import React, { useState, useEffect } from 'react';
import { Heading } from './Heading';
import { UnsplashImage } from './UnsplashImage';
import { Loader } from './Loader';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import './AjaxApi.css';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function UsingAjax() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    // const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=L2IZVXt7mfxzSZlMBNpfX50D0GCkHos5czCkyMWmIvg&count=${count}`)
      .then(res => {
        setImage([...images, ...res.data]);
      })
  }


  return (
    <div>
      <Heading />
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImages>
          {images.map(image => (
            <UnsplashImage url={image.urls.thumb} key={image.id} />
          ))}
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default UsingAjax;
