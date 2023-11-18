import React, {FC, createRef, useState} from 'react';
import styled from 'styled-components/native';
import {defaultColors} from '../../styles/colors';
import {Carousel, CarouselRefProps} from '../../ui/carousel';
import {carouselContent} from './data';
import {OnboardingCarouselItem} from './onboardingCarouselItem';
import {CarouselPagination} from '../../ui/carousel/carouselPagination';
import {HorizontalPaddingScreen} from '../../styles/constants';
import {IconButton} from '../../ui/buttons/iconButton';

export const OnboardingScreen: FC = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = createRef<CarouselRefProps>();

  const handleSlidePress = () => {
    if (!flatlistRef.current) {
      return;
    }

    const {getCarouselIndex, scrollToIndex} = flatlistRef.current;
    const carouselIndex = getCarouselIndex();
    const index =
      carouselIndex < carouselContent.length
        ? carouselIndex + 1
        : carouselIndex;

    scrollToIndex({
      index,
      animated: true,
      onFinished: () => setCurrentIndex(index),
    });
  };

  return (
    <Root>
      <Header>
        <CarouselPagination
          countOfDots={carouselContent.length}
          currentIndex={currentIndex}
        />
      </Header>
      <Main>
        <Carousel
          ref={flatlistRef}
          data={carouselContent}
          ItemComponent={OnboardingCarouselItem}
          onIndexChange={(index: number) => setCurrentIndex(index)}
        />
      </Main>
      <Footer>
        <IconButton onPress={handleSlidePress} />
      </Footer>
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

const Main = styled.View`
  flex: 1;
`;

const Footer = styled.View`
  padding: 0 ${HorizontalPaddingScreen}px;
  height: 60px;
  align-items: flex-end;
`;
