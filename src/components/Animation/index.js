import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

const fadeInDownAnimation = keyframes`${fadeInDown}`;

export const FadeInDownDiv = styled.div`
  animation: 1s ${fadeInDownAnimation};
`;