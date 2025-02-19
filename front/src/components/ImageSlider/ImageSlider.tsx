import { useEffect, useState } from "react";
import { ContainerStyle, ContentStyled,  SlideStyle } from "./styled";
import { IndicatorSlide } from "./IndicatorSlide";

type propsSlider = {
    Data: {
        image: string;
    }[];
};

export const Slider = ({ Data }: propsSlider) => {
    const [slideIndex, setSlideIndex] = useState<number>(0);

    useEffect(() => {
        const autoplayTime = 3000;
        const timer = setTimeout(() => {
        slideIndex >= Data.length - 1
            ? setSlideIndex(0)
            : setSlideIndex(slideIndex + 1);
        }, autoplayTime);

        return () => clearInterval(timer);
    }, [slideIndex]);

    return (
        <ContainerStyle>
        {Data.map((oneSlide, index) => {
            const { image } = oneSlide;
            console.log(oneSlide)
            return (
            <SlideStyle
                key={index}
                isActive={slideIndex === index ? "active" : ""}
                image={image}
            >
                <ContentStyled>
                </ContentStyled>
                <IndicatorSlide
                slideIndex={slideIndex}
                amountImage={Data.length}
                setSlideIndex={setSlideIndex}
                />
            </SlideStyle>
            );
        })}
        </ContainerStyle>
    );
};

// import React ,{useEffect, useRef, useState } from 'react'
// import {IoMdArrowRoundForward} from 'react-icons/io'
// import styled ,{css} from 'styled-components/macro'
// import{IoArrowForward,IoArrowBack} from 'react-icons/io5'

// const Hero = ({slides}) => {

//     const [current,setCurrent] = useState(0)
//     const length = slides.length
//     const timeout = useRef(0)

//     useEffect(() => {
//         const nextSlide = () => {
//             setCurrent(current => (current === length-1 ? 0 : current + 1))
//         }
//         timeout.current = setTimeout(nextSlide, 4000)

//         return function() {
//             if(timeout.current){
//                 clearTimeout(timeout.current)
//             }
//         }
//     },[current,length])

//     const nextSlide = () => {
//         if(timeout.current){
//             clearTimeout(timeout.current)
//         }

//         setCurrent(current === length-1 ? 0 : current + 1)
//         // console.log(current)
//     }

//     const prevSlide = () => {
//         if(timeout.current){
//             clearTimeout(timeout.current)
//         }
        
//         setCurrent(current === 0 ? length-1 : current - 1)
//         // console.log(current)
//     }

//     if(!Array.isArray(slides) || slides.length <=0){
//         return null;
//     }

//     return (
//         <HeroSection>
//             <HeroWrapper>
//                 {
//                     slides.map((slide,index) => (
//                         <HeroSlide key={index}>
//                             {index === current && (
//                                 <HeroSlider>
//                                 <HeroImage src={slide.image} alt={slide.alt}/>
//                                 <HeroContent>
//                                     <h1>{slide.title}</h1>
//                                     <p>{slide.price}</p>
//                                     <Button to={slide.path} primary='true'
//                                         css={`
//                                             max-width: 160px;
//                                         `}
//                                     >
//                                         {slide.label}
//                                         <Arrow/>
//                                     </Button>
//                                 </HeroContent>
//                             </HeroSlider>
//                             )}
//                         </HeroSlide>
//                     ))
//                 }
//                 <SliderButtons>
//                     <PrevArrow onClick={prevSlide}/>
//                     <NextArrow onClick={nextSlide}/>
//                 </SliderButtons>
//             </HeroWrapper>
//         </HeroSection>
//     )
// }

// export default Hero

// const HeroSection = styled.section`
//     height: 100vh;
//     max-height: 1100px;
//     position: relative;
//     overflow: hidden;
// `

// const HeroWrapper = styled.div`
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     overflow: hidden;
//     position: relative;
// `

// const HeroSlide = styled.div`
//     z-index: 1;
//     width: 100%;
//     height: 100%;
// `

// const HeroSlider = styled.div`
//     position: absolute;
//     top:0;
//     left:0;
//     width: 100%;
//     height: 100%;
//     display:flex;
//     justify-content: center;
//     align-items: center;

//     &::before{
//         content:'';
//         position: absolute;
//         z-index:2;
//         width: 100%;
//         height: 100vh;
//         bottom: 0vh;
//         left:0;
//         overflow: hidden;
//         opacity: 0.4;
//         background: linear-gradient(
//                         0deg, 
//                         rgba(0,0,0,0.2) 0%, 
//                         rgba(0,0,0,0.2) 50%, 
//                         rgba(0,0,0,0.6) 100%);
//     }
// `

// const HeroImage = styled.img`
//     position: absolute;
//     top:0;
//     left:0;
//     width: 100vw;
//     height: 100vh;
//     object-fit: cover;
// `

// const HeroContent = styled.div`
//     position: relative;
//     z-index: 10;
//     display: flex;
//     flex-direction: column;
//     max-width: 1600px;
//     width: calc(100% - 100px);
//     color: #fff;

//     h1{
//         font-size: clamp(1rem, 8vw, 2rem);
//         font-weight: 400;
//         text-transform: uppercase;
//         text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
//         text-align: left;
//         margin-bottom: 0.8rem;
//     }
    
//     p{
//         margin-bottom: 1.2rem;
//         text-shadow: 0px 0px 20px rgba(0,0,0,0.4);

//     }
// `

// const SliderButtons = styled.div`
//     position: absolute;
//     bottom: 50px;
//     right: 50px;
//     z-index: 10;
//     display: flex;
// `
    
// const arrowButtons = css`
//     width: 50px;
//     height: 50px;
//     color: #fff;
//     cursor: pointer;
//     background: #000d1a;
//     border-radius:50px;
//     padding: 10px;
//     margin-right: 1rem;
//     user-select: none;
//     transition: 0.3s;

//     &:hover{
//         background: #cd853f;
//         transform: scale(1.05)
//     }
// `

// const Arrow = styled(IoMdArrowRoundForward)`
//     margin-left: 0.5rem;
// `
// const PrevArrow = styled(IoArrowBack)`
//     ${arrowButtons}
// `
// const NextArrow = styled(IoArrowForward)`
//     ${arrowButtons}

// `