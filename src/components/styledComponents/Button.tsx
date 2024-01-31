import styled from "styled-components";

export const Button = styled.button<{background:string,color:string,backgroundHover:string,colorHover:string}>`
border:none;
border-radius:20px;
background-color:${({ background }) => background};
color:${({ color }) => color};
padding:10px 20px;
cursor:pointer;
transition:0.3s;
display:flex;
justify-content:center;
align-items:center;
font-size:15px;
font-family:Poppins;
font-weight:700;
&:hover{
    background-color:${({ backgroundHover }) => backgroundHover};
    color:${({ colorHover }) => colorHover};
}
`