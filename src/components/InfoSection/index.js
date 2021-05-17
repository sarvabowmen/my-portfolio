import React from 'react';
import { InfoContainer, InfoRow, InfoWrapper, Column1, 
    TextWrapper, TopLine, Subtitle, Heading, Column2, Img, ImgWrap,
BtnWrap } from './InfoElements';
import { Button } from '../ButtonElements';

export const InfoSection = ({lightBg, imgStart, topLine, lightText, darkText, headline, description, buttonLabel, id, img, alt, dark, dark2, primary}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                    <Column1>
                      <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <Subtitle darkText={darkText}>{description}</Subtitle>
                          <BtnWrap>
                              <Button to='home' 
                              smooth={true}
                              duration={500} 
                              spy={true} 
                              exact="true"
                              offset={-80}
                              primary={primary ? 1 : 0}
                              dark={ dark ? 1 : 0}
                              dark2={dark2 ? 1: 0}>{buttonLabel}</Button>
                          </BtnWrap>
                      </TextWrapper>
                    </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img.default} alt={alt} />
                            </ImgWrap>
                        </Column2>
                  </InfoRow>
              </InfoWrapper>
              </InfoContainer>  
        </>
    )
}
