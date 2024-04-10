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
import {Button} from '../../ui/buttons/button';
import {Alert} from 'react-native';

export const OnboardingScreen: FC = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = createRef<CarouselRefProps>();
  const {setOnboarded} = useStore().configStore;

  const isLastSlide = currentIndex + 1 === carouselContent.length;

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

  const start = () => {
    Alert.alert(
      'Хранение данных',
      'Данное приложение на текущий момент сохраняет записи только на телефон. При замене телефона, данные невозможно перенести. Сохранение данных в облако будет реализовано в будущем.',
    );
    setOnboarded();
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
        {isLastSlide ? (
          <FinishButton onPress={start}>Войти</FinishButton>
        ) : (
          <IconButton onPress={handleSlidePress} />
        )}
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
  margin-bottom: 8px;
  height: 60px;
  align-items: flex-end;
`;

const FinishButton = styled(Button)`
  align-self: stretch;
`;
