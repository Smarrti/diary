import React, {FC, useState} from 'react';
import {CommonScreenLayout} from '../../ui/layout/commonScreenLayout';
import {Text} from '../../ui/text';
import {HorizontalPaddingScreen, fontSizes} from '../../styles/constants';
import styled from 'styled-components/native';
import {Textarea} from '../../ui/textarea';
import {Button} from '../../ui/buttons/button';
import {defaultColors} from '../../styles/colors';
import dayjs from 'dayjs';

const Root = styled.ScrollView`
  padding: 22px ${HorizontalPaddingScreen}px;
`;

const Title = styled(Text)`
  margin-bottom: 22px;
`;

const Disclaimer = styled(Text)`
  margin-bottom: 22px;
`;

const FormField = styled.View`
  margin-bottom: 22px;
`;

const StyledTextarea = styled(Textarea)`
  margin-top: 8px;
  min-height: 200px;
`;

export const MonthlyPlan: FC = () => {
  const currentMonth = dayjs().format('MMMM');

  const [textd, seTextd] = useState('');

  return (
    <CommonScreenLayout>
      <Root>
        <Title fontSize={fontSizes.fs34} fontWeight={500}>
          Мои планы на {currentMonth}
        </Title>

        <FormField>
          <Text fontSize={fontSizes.fs20}>Чтение Библии</Text>
          <StyledTextarea
            fontSize={fontSizes.fs18}
            value={textd}
            onChange={seTextd}
          />
        </FormField>

        <FormField>
          <Text fontSize={fontSizes.fs20}>Заучивание наизусть</Text>
          <StyledTextarea
            fontSize={fontSizes.fs18}
            value={textd}
            onChange={seTextd}
          />
        </FormField>

        <FormField>
          <Text fontSize={fontSizes.fs20}>Молитвенные нужды</Text>
          <StyledTextarea
            fontSize={fontSizes.fs18}
            value={textd}
            onChange={seTextd}
          />
        </FormField>

        <FormField>
          <Text fontSize={fontSizes.fs20}>Планы в служении</Text>
          <StyledTextarea
            fontSize={fontSizes.fs18}
            value={textd}
            onChange={seTextd}
          />
        </FormField>

        <FormField>
          <Disclaimer color={defaultColors.grayText}>
            В течении месяца вы можете редактировать планы
          </Disclaimer>
          <Button>Сохранить</Button>
        </FormField>
      </Root>
    </CommonScreenLayout>
  );
};
