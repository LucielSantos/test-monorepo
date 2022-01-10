import styled, { css } from 'styled-components';

interface FlexProps {
  column?: boolean;
  flex?: number;
  wrap?: boolean;
  maxWidth?: number | string;
  width?: number;
  justifyContent?: 'space-between' | 'space-around' | 'flex-start' | 'flex-end' | 'center';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  gap?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number | 'auto';
  marginBottom?: number | 'auto';
  marginLeft?: number | 'auto';
  marginRight?: number | 'auto';
  fullWidth?: boolean;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content: ${props => props.justifyContent || 'stretch'};
  flex: ${props => props.flex || 'stretch'};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  gap: ${props => `${props.gap}rem` || 'stretch'};
  margin-top: ${props =>
    props.marginTop === 'auto' ? props.marginTop : `${props.marginTop || 0}rem`};
  margin-right: ${props =>
    props.marginRight === 'auto' ? props.marginRight : `${props.marginRight || 0}rem`};
  margin-bottom: ${props =>
    props.marginBottom === 'auto' ? props.marginBottom : `${props.marginBottom || 0}rem`};
  margin-left: ${props =>
    props.marginLeft === 'auto' ? props.marginLeft : `${props.marginLeft || 0}rem`};
  ${props =>
    (props.marginVertical || props.marginHorizontal) &&
    css`
      margin: ${props.marginVertical || 0}rem ${props.marginHorizontal || 0}rem;
    `};

  max-width: ${({ maxWidth }) =>
    maxWidth ? (typeof maxWidth === 'string' ? maxWidth : `${maxWidth}rem`) : 'none'};
  width: ${props =>
    (props.fullWidth ? '100%' : 'auto') || props.width ? `${props.width}rem` : 'auto'};
`;
