import React, {forwardRef, useState} from 'react';
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
  onIndexChanged?: (index: number) => void;
}

interface ItemProps {
  index: number;
  scrollX: number;
  item: any;
  ItemComponent: any;
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
      transform: [{scaleY: size.value}],
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

export const Carousel = forwardRef<FlatList, Props>(
  ({data, ItemComponent, onIndexChanged}, ref) => {
    const [scrollX, setScrollX] = useState(0);
    const snapInterval = Math.floor(CARD_LENGTH + SPACING * 1.5);

    return (
      <Root>
        <AnimatedFlatList
          ref={ref}
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
            onIndexChanged &&
              onIndexChanged(
                Math.round(event.nativeEvent.contentOffset.x / snapInterval),
              );
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
