import React from 'react'
import { HeroContainer, HeroBg, HeroAvatar, HeroContent, HeroP, HeroRow, HeroColumn } from './HeroElements';

export const HeroSection = ({ img, alt }) => {
    return (
        <HeroContainer id="home">
            <HeroBg>
            </HeroBg>
            <HeroContent>
                <HeroRow>
                    <HeroColumn>
                        <HeroAvatar src={img.default} alt={alt} ></HeroAvatar>
                    </HeroColumn>
                   
                </HeroRow>
                <HeroRow>
                <HeroColumn>
                        <HeroP>Hi I'm Sarvabowmen (Sarva), a <strong style={ { color: 'green' } }>Full Stack</strong> developer / <strong style={ { color: 'green' } }>Architect</strong>, loves to works with Javascript
                            React, C# and Azure
                        </HeroP>
                        <HeroP>I love building products which makes an impact in people's day to day life.</HeroP>
                        <HeroP>Having passion to learn web & cloud development in depth and share my learnings either by teaching or by blogging </HeroP>
                    </HeroColumn>
                </HeroRow>
            </HeroContent>
        </HeroContainer>
    )
}
