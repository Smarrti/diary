import React, {FC} from 'react';
import {OnboardingCarouselContent} from './data';
import {Image, View} from 'react-native';

interface IProps {
  item: OnboardingCarouselContent;
}

export const OnboardingCarouselItem: FC<IProps> = ({item}) => {
  return (
    <View>
      <Image source={item.image} />
    </View>
  );
};
