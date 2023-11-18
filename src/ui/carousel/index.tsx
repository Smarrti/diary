import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {FlatList, Dimensions} from 'react-native';
import Animated, {
  interpolate,
  Extrapolate,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import styled from 'styled-components';

const SRC_WIDTH = Dimensions.get('window').width;
const CARD_LENGTH = SRC_WIDTH * 0.8;
const SPACING = SRC_WIDTH * 0.02;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.18) / 2;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface Props {
  data: any[];
  ItemComponent: any;
  onIndexChange: (index: number) => void;
}

interface ItemProps {
  index: number;
  scrollX: number;
  item: any;
  ItemComponent: any;
}

export type CarouselActionOptions = {
  index: number;
  animated?: boolean;
  onFinished?: () => void;
};

export interface CarouselRefProps {
  scrollToIndex: (opt: CarouselActionOptions) => void;
  getCarouselIndex: () => number;
}

const Item = ({item, index, scrollX, ItemComponent}: ItemProps) => {
  const size = useSharedValue(0.8);

  const inputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];

  size.value = interpolate(
    scrollX,
    inputRange,
    [0.8, 1, 0.8],
    Extrapolate.CLAMP,
  );

  const opacity = useSharedValue(1);

  const opacityInputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];

  opacity.value = interpolate(
    scrollX,
    opacityInputRange,
    [0.5, 1, 0.5],
    Extrapolate.CLAMP,
  );

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{scaleY: size.value}, {scaleX: size.value}],
      opacity: opacity.value,
    };
  });

  return (
    <AnimatedView
      style={[
        cardStyle,
        {
          marginLeft: index === 0 ? SIDECARD_LENGTH : SPACING,
          marginRight: index === 2 ? SIDECARD_LENGTH : SPACING,
        },
      ]}>
      <ItemComponent item={item} />
    </AnimatedView>
  );
};

export const Carousel = forwardRef<CarouselRefProps, Props>(
  ({data, ItemComponent, onIndexChange}, ref) => {
    const [scrollX, setScrollX] = useState(0);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const flatlistRef = useRef<FlatList>(null);
    const snapInterval = Math.floor(CARD_LENGTH + SPACING * 1.5);

    const getCarouselIndex = useCallback(() => carouselIndex, [carouselIndex]);

    useImperativeHandle(ref, () => ({
      scrollToIndex: (opt: CarouselActionOptions) => {
        'worklet';

        if (opt.index === carouselIndex) {
          return;
        }
        flatlistRef.current?.scrollToIndex(opt);
        setCarouselIndex(opt.index);
      },
      getCarouselIndex,
    }));

    return (
      <Root>
        <AnimatedFlatList
          ref={flatlistRef}
          initialScrollIndex={0}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0.8}
          snapToInterval={snapInterval}
          disableIntervalMomentum
          disableScrollViewPanResponder
          snapToAlignment={'start'}
          data={data}
          horizontal
          renderItem={({item, index}) => {
            return (
              <Item
                item={item}
                index={index}
                scrollX={scrollX}
                ItemComponent={ItemComponent}
              />
            );
          }}
          // @ts-ignore
          keyExtractor={item => item.id}
          onScroll={event => {
            setScrollX(event.nativeEvent.contentOffset.x);

            const newIndex = Math.round(
              event.nativeEvent.contentOffset.x / snapInterval,
            );
            setCarouselIndex(newIndex);
            onIndexChange(newIndex);
          }}
        />
      </Root>
    );
  },
);

const Root = styled(Animated.View)`
  flex: 1;
`;

const AnimatedView = styled(Animated.View)`
  flex: 1;
  overflow: 'hidden';
  width: ${CARD_LENGTH}px;
`;
