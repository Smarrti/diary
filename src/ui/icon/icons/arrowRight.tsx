import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {}

export const ArrowRight: FC<Props> = ({}) => {
  return (
    <Svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <Path
        d="M25.5857 18.3487C25.4143 18.1846 25.2 18.1026 24.9643 18.1026C24.7286 18.1026 24.5143 18.1846 24.3429 18.3487C24 18.6769 24 19.2103 24.3429 19.5385L35.2714 30L24.3429 40.4616C24 40.7898 24 41.3231 24.3429 41.6513C24.6857 41.9795 25.2429 41.9795 25.5857 41.6513L37.1572 30.5949C37.5 30.2667 37.5 29.7334 37.1572 29.4052L25.5857 18.3487V18.3487Z"
        fill="white"
      />
    </Svg>
  );
};
