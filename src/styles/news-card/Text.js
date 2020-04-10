import styled from 'styled-components';

const Text = styled.span`
  display: block;
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;

  :hover {
    transition: all 200ms ease-in-out;
    opacity: 1;
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: opacity .2s ease-in-out;
  }

  :before {
    display: inline-block;
    content: '►';
    font-family: Work Sans, sans-serif;
    transform: translateX(0);
    font-size: 0.8em;
    margin-right: 8px;
    vertical-align: top;

    @media screen and (prefers-reduced-motion: no-preference) {
      transition: transform .2s ease-in-out;
    }
  }

`;

export default Text;
