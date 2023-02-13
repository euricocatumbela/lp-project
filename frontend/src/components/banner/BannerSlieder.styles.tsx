import styled from "@emotion/styled";

export const Wrapper = {
    width: '700px',
    height:'550px',
    background: "white",
    boxShadow: "0px 4px 4px rgba(0, 0, 0.12, 0.1)",
    // border
}
export const SliderWrapper = styled('div')`
display:grid;
grid-template-columns: auto auto;
padding: 40px;
`

export const Image = styled('img')`
width: 80%;
`


export const Promotion = styled('h1')`
color: red;
text-transform:uppercase;
`
export const ShopNow = styled('div')`
width:300px;
height: 40px;
display:grid;
align-items:center;
justify-content:center;
background:#0F84F0;
font-size: 32px;
text-transform:uppercase;
color:white;
cursor:pointer;
`
export const TextWrapper = styled('div')`
display:grid;
justify-content:center;
`