import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "./Assets/slide1.png";
import slide2 from "./Assets/slide2.png";
import slide3 from "./Assets/slide3.png";
import slide4 from "./Assets/slide4.png";
import slide5 from "./Assets/slide5.png";
import slide6 from "./Assets/slide6.png";
import slide7 from "./Assets/slide7.png";

const Gallery = () => {
    return (
        <Container>
            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} width={1000} transitionTime={1000}>
                <ImageContainer>
                    <img src={slide1} alt=""></img>
                    <img src={slide2} alt=""></img>
                    <img src={slide3} alt=""></img>
                    <img src={slide4} alt=""></img>

                </ImageContainer>
                <ImageContainer>
                    <img src={slide5} alt=""></img>
                    <img src={slide6} alt=""></img>
                    <img src={slide7} alt=""></img>
                    <img src={slide1} alt=""></img>
                </ImageContainer>
            </Carousel>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
`
const ImageContainer = styled.div`
display: flex;
flex-direction: row;
grid-gap: 10px;
align-items: center;
justify-content: center;
width: 100%;
height: 100px;

img{
    width: 130px;
    height: 70px;
}
`

export default Gallery;