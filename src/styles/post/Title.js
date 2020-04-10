import styled from 'styled-components';

const Title = styled.h1`
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 150%;
  /* identical to box height, or 36px */

  color: var(--cd-post-title-text-color);
  margin: 0;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color .2s ease-in-out;
  }
`;

export default Title;
