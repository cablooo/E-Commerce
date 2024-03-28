import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import products from '../data'; // Remove the unnecessary ".js" extension
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 92vh;
  width: 100%;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 3em;
  color: #333;
  text-align: center;
  margin-bottom: 50px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #3e8e41;
  }
`;

const StyledSlider = styled(Slider)`
  width: 80%; /* Adjust the width */
  margin: 70px auto; /* Center the slider */
  overflow: hidden;

  .slick-slide img {
    width: 100%;
    height: auto;
  }

  .slick-dots {
    bottom: 20px; /* Adjust the position of the dots */
  }

  .slick-dots li {
    margin: 0 5px; /* Adjust the space between dots */
  }

  .slick-dots li button {
    font-size: 10px; /* Adjust the dot size */
    color: #333; /* Dot color */
  }

  .slick-dots li.slick-active button {
    color: #4CAF50; /* Active dot color */
  }
`;

const Home = () => {

  const selectedProducts = products.slice(4, 8); // Use the products array directly

  // Previous Arrow component
  const PrevArrow = (props) => {
    const { onClick } = props;
    return <div className="slick-prev" onClick={onClick}>Previous</div>; // Replace with your arrow icon or content
  };

  // Next Arrow component
  const NextArrow = (props) => {
    const { onClick } = props;
    return <div className="slick-next" onClick={onClick}>Next</div>; // Replace with your arrow icon or content
  };

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <HomeContainer
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
    >
      <StyledSlider {...settings}>
        {selectedProducts.map((product, index) => (
          <Link key={index} to={`/E-Commerce/product/${product.id}`}>
            <img src={product.src} alt={product.name} />
          </Link>
        ))}
      </StyledSlider>

      <Title>
        Welcome to our store!
      </Title>
      <Button>
        <Link to='/products'>Shop now</Link>
      </Button>
    </HomeContainer>
  );
};

export default Home;
