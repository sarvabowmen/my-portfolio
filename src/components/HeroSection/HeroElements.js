import styled from 'styled-components';

export const HeroContainer = styled.div`
height: 800px;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
position: relative;
z-index: 1;
background: #deecdf;
:before {
    content: '';
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%,, rgba(0,0,0,0.2) 100%),
   linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
   z-index: 2;
}
`;

export const HeroBg = styled.div`
position: absolute;
top: 0;
right:0;
left: 0;
bottom: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;
export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`;

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;
export const HeroRow = styled.div`
display: flex;
flex-direction: row;

@media (max-width: 768px) {
      flex-direction: column;
}
`;

export const HeroColumn = styled.div`

`;

export const HeroAvatar = styled.img`
    width: 270px;
    height: 270px;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 50%; 
`;

export const HeroH1 = styled.h1`
    font-family: 'Nunito-Bold';
    font-size: 4em;
    text-transform: capitalize;
    color: #393b3a;
    padding: 0.5em 0 0 0;
`;

export const HeroP = styled.p`
margin-top: 24px;
color: #393b3a;
font-size: 24px;
text-align: center;
max-width: 600px;
font-weight: 700;
@media screen and (max-width: 768px){
    font-size: 24px;
}

@media screen and (max-width: 480px){
    font-size: 18px;
}
`;
