import styled from 'styled-components';

export const SkillSectionContainer = styled.div`
min-height: 800px;
background: lightblue;
position: relative;
`;
export const SkillSectionWrapper = styled.div`
display: flex;
z-index: 1;
width: 100%;
padding: 0 24px;
justify-content: center;
background: lightblue;
`;
export const Title = styled.h1`
padding: 80px 0px;
font-family: 'Nunito-Bold';
text-align:center;
`;

export const SkillContentWrapper = styled.div`
padding: 0 80px;
font-family: 'Nunito-Bold';
display: flex;
flex-direction: row;
justify-content: center;
`;
export const SkillContainer = styled.div`
position:relative;
min-width: 1200px;
display:flex;
justify-content:space-around;
align-items: center;
display: flex;
flex-direction: row;

@media screen and (max-width: 768px){
    flex-direction: column;
}
`;

export const SkillWrapper = styled.div`
display: flex;
z-index: 1;
min-height: 860px;
width: 100%;
min-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;

`;

export const SkillCard = styled.div`
  position:relative;
  width:200px;
  background:linear-gradient(0deg,#1b1b1b,#222,#1b1b1b);
  display:flex;
  justify-content:center;
  align-items:center;
  height:300px;
  border-radius:4px;
  text-align:center;
  overflow:hidden;
  transition:0.5s;
  margin: 0px 20px;
  :hover
  {
    transform:translateY(-10px);
    box-shadow:0 15px 35px rgba(0,0,0,.5);
  }
  :before
  {
  content:'';
  position:absolute;
  top:0;
  left:-50%;
  width:100%;
  height:100%;
  background:rgba(255,255,255,.03);
  pointer-events:none;
}

:first-child:hover h2
{
  color:#fff;
  font-size: 48px;
}

`;
export const SkillBox = styled.div`
`;
export const PercentSection = styled.div`
  position:relative;
  width:150px;
  height:150px;
  border-radius:50%;
  box-shadow: inset 0 0 50px #000;
  background:#222;
  z-index:1;
`;
export const Svg =  styled.svg`
position:relative;
  width:150px;
  height:150px;
  z-index:1000;
  
  circle:nth-child(2)
  {
    stroke-dasharray:440;
  }
    circle:nth-child(2)
    {
    stroke-dashoffset:calc(440 - (440 * ${({ percent }) => percent || 0 }) / 100);
    ${({ percent }) => percent > 90 && `
    stroke:#00ff43;
    `}
    ${({ percent }) => percent > 70 && percent <= 90 && `
    stroke:lightgreen;
    `}
    ${({ percent }) => percent > 40 && percent <= 70 && `
    stroke:yellow;
    `}
    ${({ percent }) => percent <= 40 && `
    stroke:red;
    `}
    }
  `;

export const Circle =  styled.circle`
  width:100%;
  height:100%;
  fill:none;
  stroke:#191919;
  stroke-width:10;
  stroke-linecap:round;
  transform:translate(5px,5px);
  
`;

export const NumberWrapper = styled.div`
position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:50%;
  `;

export const H2 = styled.h2`
  color:#777;
  font-weight:700;
  font-size:40px;
  transition:0.5s;
  :hover {
    color:#fff;
    font-size:60px;
  }
  `
  export const SkillLabel = styled.div`
  position:relative;
  color:#777;
  margin-top:10px;
  font-weight:700;
  font-size:18px;
  letter-spacing:1px;
  text-transform:uppercase;
  transition:0.5s;
  :hover {
    color:#fff;
  }
  `;