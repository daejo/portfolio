import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

//-- FADE IN DOWN ANIMATION START --//
const fadeInDownAnimation = keyframes`${fadeInDown}`;

export const FadeInDownDiv = styled.div`
  animation: 1s ${fadeInDownAnimation};
`;
//-- FADE IN DOWN ANIMATION END --//