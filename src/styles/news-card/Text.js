import styled from 'styled-components';

const Text = styled.span`
  display: block;
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
  /* or 24px */
  :hover {
    transition: all 200ms ease-in-out;
    opacity: 1;
  }
  :before {
    display: inline-block;
    content: '►';
    font-family: Work Sans, sans-serif;
    transform: translateX(0);
    font-size: 0.8em;
    margin-right: 8px;
    vertical-align: top;
    transition: 0.25s transform ease-out;
  }
`;

export default Text;
