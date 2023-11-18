import React, {FC} from 'react';
import styled from 'styled-components/native';
import {defaultColors} from '../../styles/colors';

interface Props {
  countOfDots: number;
  currentIndex: number;
}

export const CarouselPagination: FC<Props> = ({countOfDots, currentIndex}) => {
  return (
    <Root>
      {Array.from({length: countOfDots}).map((_, index) => (
        <Dot key={index} isActive={index === currentIndex} />
      ))}
    </Root>
  );
};

const Root = styled.View`
  flex-direction: row;
`;

const Dot = styled.View<{isActive: boolean}>`
  border: 1px solid ${defaultColors.disabled};
  background-color: ${({isActive}) =>
    isActive ? defaultColors.primary : defaultColors.transparent};
  border-radius: 100px;
  height: 10px;
  width: 10px;
  margin-right: 10px;
`;
