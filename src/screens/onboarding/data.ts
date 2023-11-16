import {ImageProps} from 'react-native';

export interface OnboardingCarouselContent {
  id: number;
  image: ImageProps;
  title: string;
  content: string;
}

export const carouselContent: OnboardingCarouselContent[] = [
  {
    id: 1,
    image: require('../../assets/images/emoji_wave.png'),
    title: 'Добро пожаловать!',
    content:
      'Ежедневник предназначен в помощь тем, кто желает иметь порядок в общении с Богом через Библию и в служении, а также стабильную молитвенную жизнь.',
  },
  {
    id: 2,
    image: require('../../assets/images/emoji_book.png'),
    title: 'Читайте Библию',
    content:
      'Ежедневник предлагает план чтения Священного Писания на каждый день, следуя которому, в течение одного года можно прочитать всю Библию целиком.',
  },
  {
    id: 3,
    image: require('../../assets/images/emoji_hand.png'),
    title: 'Записывайте мысли',
    content:
      'После ежедневного чтения Писания можно записать личные впечатления от чтения текста, выделить отдельные мысли или отметить вопросы для дальнейшего исследования.\nКаждый день можно также записывать особые молитвенные нужды, чтобы впоследствии анализировать Божьи ответы и выражать Ему благодарность.',
  },
];
