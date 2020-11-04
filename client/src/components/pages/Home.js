import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import PostMessages from '../BlogPost';
import {Provider} from 'react-redux';
import {store } from '../../actions/store';
import {  Container } from '@material-ui/core';



function Home () {
  return (
    <>
        <HeroSection/>
 
        <Provider store={store}>
          <Container maxWidth="lg">
          <h4> Share your valuable feedback</h4>
          <PostMessages/>
          </Container>
        </Provider> 
        <Footer />
    </>
  )
}
export default Home;