import React, {FC} from 'react';
import styled from 'styled-components/native';

interface Props {
  countOfDots: number;
  currentIndex: number;
}

export const CarouselPagination: FC<Props> = ({countOfDots, currentIndex}) => {
  console.log(new Array(countOfDots));

  return (
    <Root>
      {Array.from({length: countOfDots}).map((_, index) => (
        <Dot key={index} active={index === currentIndex} />
      ))}
    </Root>
  );
};

const Root = styled.View`
  flex-direction: row;
`;

const Dot = styled.View<{active: boolean}>`
  border: 1px solid #aab2b7;
  border-radius: 100px;
  height: 10px;
  width: 10px;
  margin-right: 10px;
`;
