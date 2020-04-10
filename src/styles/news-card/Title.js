import styled from 'styled-components';

const Title = styled.h2`
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;

  /* identical to box height, or 36px */
  color: var(--cd-news-card-title-text-color);
  margin: 0;
  opacity: 0.75;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color .2s ease-in-out;
  }
`;

export default Title;
