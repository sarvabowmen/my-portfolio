import React from 'react';
import { SkillContainer, SkillCard, SkillBox, PercentSection, SkillSectionContainer, Title, SkillContentWrapper, Svg, Circle, NumberWrapper, H2, SkillLabel, SkillSectionWrapper  } from './SkillElements';


export const SkillsSection = ({ heading, skills }) => {
    return ( // eslint-disable
        <>
        <SkillSectionContainer>
        <SkillContentWrapper>
               <Title>
                {heading}
                </Title>
        </SkillContentWrapper> 
        <SkillSectionWrapper>
         
            <SkillContentWrapper>
                <SkillContainer>
                    { skills.map((a, i) => {
                        return(
                            <SkillCard key={i}>
                                <SkillBox>
                                    <PercentSection>
                                        <Svg percent={a.percent}>
                                            <Circle cx="70" cy="70" r="70" ></Circle>
                                            <Circle cx="70" cy="70" r="70" ></Circle>
                                        </Svg>
                                        <NumberWrapper> 
                                            <H2>&gt;{a.percent}</H2>
                                        </NumberWrapper>   
                                    </PercentSection>
                                    <SkillLabel>{a.label}</SkillLabel>
                                </SkillBox>
                            </SkillCard>
                            );

                    }
                    )}
                </SkillContainer>
            </SkillContentWrapper>
        </SkillSectionWrapper>  
        </SkillSectionContainer>
        </>
    )
}
