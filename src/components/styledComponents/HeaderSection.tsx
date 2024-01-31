import styled from "styled-components";

export const HeaderSection = styled.div<{background:string}>`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 240px;
background-Image: url(${({background}) => background});
background-size: cover;
background-position: center;
background-repeat: no-repeat;

h1{
    font-size: 60px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: white;
}
`