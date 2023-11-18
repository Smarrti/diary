import React, {FC, createRef, useState} from 'react';
import styled from 'styled-components/native';
import {defaultColors} from '../../styles/colors';
import {Carousel} from '../../ui/carousel';
import {carouselContent} from './data';
import {OnboardingCarouselItem} from './onboardingCarouselItem';
import {CarouselPagination} from '../../ui/carousel/carouselPagination';
import {HorizontalPaddingScreen} from '../../styles/constants';
import {IconButton} from '../../ui/buttons/iconButton';
import {FlatList} from 'react-native';
import {useStore} from '../../stores';

export const OnboardingScreen: FC = ({}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const flatlistRef = createRef<FlatList>();
  const {configStore} = useStore();

  const handleSlidePress = () => {
    if (carouselIndex === 2) {
      configStore.setOnboarded(true);
    }
    const nextIndex =
      carouselIndex < carouselContent.length
        ? carouselIndex + 1
        : carouselIndex;
    console.log(carouselIndex);

    flatlistRef.current?.scrollToIndex({index: nextIndex, animated: true});
  };

  return (
    <Root>
      <Header>
        <CarouselPagination
          countOfDots={carouselContent.length}
          currentIndex={carouselIndex}
        />
      </Header>
      <Main>
        <Carousel
          ref={flatlistRef}
          data={carouselContent}
          ItemComponent={OnboardingCarouselItem}
          onIndexChanged={index => setCarouselIndex(index)}
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
