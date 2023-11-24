import React, {FC, createRef, useState} from 'react';
import styled from 'styled-components/native';
import {Carousel, CarouselRefProps} from '../../ui/carousel';
import {carouselContent} from './data';
import {OnboardingCarouselItem} from './onboardingCarouselItem';
import {CarouselPagination} from '../../ui/carousel/carouselPagination';
import {HorizontalPaddingScreen} from '../../styles/constants';
import {IconButton} from '../../ui/buttons/iconButton';
import {useStore} from '../../stores';
import {CommonScreenLayout} from '../../ui/layout/commonScreenLayout';

export const OnboardingScreen: FC = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = createRef<CarouselRefProps>();
  const {setOnboarded} = useStore().configStore;

  const handleSlidePress = () => {
    if (currentIndex + 1 === carouselContent.length) {
      setOnboarded();
      return;
    }

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
    <CommonScreenLayout>
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
    </CommonScreenLayout>
  );
};

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
