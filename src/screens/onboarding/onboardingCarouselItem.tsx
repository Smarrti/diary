import React, {FC} from 'react';
import {OnboardingCarouselContent} from './data';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {Text} from '../../ui/text';
import {fontSizes, lineHeights} from '../../styles/constants';
import {defaultColors} from '../../styles/colors';

interface IProps {
  item: OnboardingCarouselContent;
}

export const OnboardingCarouselItem: FC<IProps> = ({item}) => {
  const {image, title, content} = item;

  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <StyledImage source={image} />
      <Title fontSize={fontSizes.fs34}>{title}</Title>
      <Text
        fontSize={fontSizes.fs20}
        color={defaultColors.grayText}
        lineHeight={lineHeights.lh24}>
        {content}
      </Text>
    </ScrollView>
  );
};

const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  margin: 60px 0;
`;

const Title = styled(Text)`
  margin-bottom: 20px;
`;
