import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'


function Veggie() {
  const [veggie, setVeggie] = useState([]);


  useEffect(() => {
    getVeggie();
  },[]);
  
  const getVeggie = async () => {
    const check = localStorage.getItem('veggie');
    if(check) {
      setVeggie(JSON.parse(check));
    }else {
        const response = await fetch (
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
          );
          if (!response.ok) {
            throw new Error("Error fetching users");
          } 
        const result = await response.json();
       //console.log(result);
        localStorage.setItem("veggie", JSON.stringify(result.recipes));
        setVeggie(result.recipes);
        //console.log(result.recipes);
    }
  }


  return (
    <div>
      <Wrapper> 
        <h2>Our Vegetarian Picks</h2>
        <Splide options={{
          perPage:3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: "9rem"
        }}>
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div `
  margin: 2rem 0rem;
`;


const Card = styled.div `
  min-height: 20rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%,0%);
    color: green;
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

  }

`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;


export default Veggie;