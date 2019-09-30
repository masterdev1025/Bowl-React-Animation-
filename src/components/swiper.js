import React from 'react';
import Swiper from 'react-id-swiper';
import Favorite from './favComp'

class SimpleSwiperWithParams extends React.Component{
    constructor(props){
        super(props);
      }
    render(){
        const params = {
            pagination: '.homePage-wrapper{',
            paginationCustomizedClass: 'customized-swiper-pagination', // Add your class name for pagination container
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            nextButtonCustomizedClass: 'nextButtonCustomizedClass', // Add your class name for next button
            prevButtonCustomizedClass: 'customized-swiper-button-prev', // Add your class name for prev button
            containerClass: 'homePage-wrapper{', // Replace swiper-container with customized-swiper-container
          }

        return(
            <Swiper {...params}> 
            {
                this.props.info.map((item,index)=>{
                    return <Favorite info = {item} key={index}/>
                })
            }
     
           </Swiper>
        )
  } 
 }


export default SimpleSwiperWithParams;