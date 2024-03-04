import React, {FC} from 'react';
import styled from 'styled-components/native';
import {defaultColors} from '../../../styles/colors';
import {fontSizes} from '../../../styles/constants';
import {Text} from '../../../ui/text';
import {Notes} from '../../../stores/diary';

interface IProps {
  plans: Notes | undefined;
  summary: Notes | undefined;
}

const Field = styled.View`
  margin-top: 16px;
`;

const FieldContentContainer = styled.View`
  background-color: ${defaultColors.background[2]};
  border-radius: 16px;
  margin-top: 12px;
  min-height: 200px;
  padding: 12px;
`;

const emptyFieldText = 'Поле не заполнено';

export const PlanFields: FC<IProps> = ({plans, summary}) => {
  return (
    <>
      <Field>
        <Text fontSize={fontSizes.fs18}>Чтение Библии</Text>
        <FieldContentContainer>
          <Text>{plans?.reading ?? emptyFieldText}</Text>
        </FieldContentContainer>
      </Field>
      <Field>
        <Text fontSize={fontSizes.fs18}>Заучивание наизусть</Text>
        <FieldContentContainer>
          <Text>{plans?.memorization ?? emptyFieldText}</Text>
        </FieldContentContainer>
      </Field>
      <Field>
        <Text fontSize={fontSizes.fs18}>Молитвенные нужды</Text>
        <FieldContentContainer>
          <Text>{plans?.pray ?? emptyFieldText}</Text>
        </FieldContentContainer>
      </Field>
      <Field>
        <Text fontSize={fontSizes.fs18}>Планы в служении</Text>
        <FieldContentContainer>
          <Text>{plans?.plans ?? emptyFieldText}</Text>
        </FieldContentContainer>
      </Field>
      <Field>
        <Text fontSize={fontSizes.fs18}>Итоги месяца</Text>
        <FieldContentContainer>
          <Text>{summary?.notes ?? emptyFieldText}</Text>
        </FieldContentContainer>
      </Field>
    </>
  );
};
