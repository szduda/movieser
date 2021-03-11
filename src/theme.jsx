/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { ReactComponent as AddIcon } from './assets/icons/add.svg';
import { forwardRef } from 'react';

export const colors = {
  red: '#A03A29',
  yellow: '#E0993D',
  green: '#2A756B',

  white: '#eae6cb',
  black: '#11243A',

  grayLighter: '#99bdb9',
  grayLight: '#808E88',
  gray: '#59706E',
  grayDark: '#2B3B3A',
  darken: color => colors[`${Object.keys(colors).find(key => colors[key] === color)}Dark`] || color,
  lighten: color => colors[`${Object.keys(colors).find(key => colors[key] === color)}Light`] || color
}

export const Icons = {
  Add: ({ color = colors.white, ...rest }) =>
    <AddIcon css={css`fill: ${color}`} {...rest} />
}

const Col = forwardRef(({ align, valign, ...props }, ref) => (
  <div 
  ref={ref}
  css={css`
    display: flex;
    flex-direction: column;
    justify-content: ${valign || 'flex-start'};
    align-movies: ${align || 'flex-start'}
  `} {...props} />
))

const Row = ({ align, valign, wide, wrap, grow, ...props }) => (
  <div css={css`
    display: flex;
    justify-content: ${align || 'space-between'};
    align-items: ${valign || 'flex-start'};
    ${grow && `flex-grow: ${grow};`}
    width: ${wide ? '100%' : 'auto'};
    ${wrap && 'flex-wrap: wrap;'}
    >:last-of-type {
      margin-right: 0 !important;
    }
  `} {...props} />
)

export const Flex = {
  Col,
  Row
}

export const Theme = props => (
  <div css={css`
    font-family: 'Arial';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.gray};
    color: ${colors.black};
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    
    header {
      position: fixed;
      top: 0;
      z-index: 1000;
      width: 100%;
      max-width: 800px;
    }
    
    div {
      box-sizing: border-box;
    }

    label {
      display: inline-flex;
      flex-direction: column;
      color: ${colors.grayLight};
      margin: 0 16px 0 0;

      span:first-of-type {
        min-height: 19px;
      }
    }

    textarea, input {
      background: ${colors.white};
      color: ${colors.black};
      border-radius: 4px;
      border: 1px solid ${colors.grayLight};
      padding: 6px 4px 0;
      min-width: 24px;
      font-size: 12px;
      line-height: 16px;
      font-weight: 700;

      &::placeholder {
        color: ${colors.gray};
        font-weight: 400;
      }

      &:focus {
        outline: ${colors.yellow} auto 1px;
      }
    }

    input {
      height: 24px;
    }

    input:disabled {
      color: ${colors.grayLight};
    }

    .InputDisabled {
      background: ${colors.gray};
      opacity: 0.8;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }

    input[type="checkbox"] {
      margin: 8px 16px 20px 0;
    }

    h1, h2, h3, h4, h5 {
      margin: 0;
      font-size: 16px;
      line-height: 1.25;
    }

    h1 {
      margin-top: 4px;
      font-size: 24px;
    }

    h2 {
      font-size: 32px;
      line-height: 0.75;
      margin: 0 0 8px;
    }

    h3 {
      font-size: 16px;
      color: ${colors.grayDark}
    }

    p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 300;
      margin: 0 0 8px 0;
    }

    a, a:visited, a:active {
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
  `} {...props} />
)

export const Button = ({ ...rest }) => (
  <button css={css`      
    border-radius: 4px;
    border: none;
    font-weight: 500;
    font-size: 12px;
    background: none;
    outline: none;
    display: flex;
    justify-content: center;
    transition: transform 100ms ease-out;
    padding: 8px;
    
    *:active, :active {
      transform: scaleX(0.97);
    }
  `} {...rest} />
)
