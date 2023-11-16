import React, {FC, useState} from 'react';
import styled from 'styled-components/native';
import {defaultColors} from '../../styles/colors';
import {Carousel} from '../../ui/carousel';
import {carouselContent} from './data';
import {OnboardingCarouselItem} from './onboardingCarouselItem';
import {CarouselPagination} from '../../ui/carousel/carouselPagination';
import {HorizontalPaddingScreen} from '../../styles/constants';

export const OnboardingScreen: FC = ({}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <Root>
      <Header>
        <CarouselPagination
          countOfDots={carouselContent.length}
          currentIndex={carouselIndex}
        />
      </Header>
      <Carousel
        data={carouselContent}
        ItemComponent={OnboardingCarouselItem}
        onIndexChanged={index => setCarouselIndex(index)}
      />
    </Root>
  );
};

const Root = styled.SafeAreaView`
  background-color: ${defaultColors.background[0]};
  flex: 1;
`;

const Header = styled.View`
  height: 16px;
  margin: 40px 0 20px;
  padding: 0 ${HorizontalPaddingScreen}px;
`;
