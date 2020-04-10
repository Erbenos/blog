import styled from 'styled-components';

const Card = styled.div`
  background: var(--cd-news-card-background-color);
  box-shadow: 0px 4px 14px rgba(10, 10, 10, 0.07);
  border-radius: 14px;
  padding: 20px 20px 0 20px;
  max-height: 740px;
  height: 100%;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: background .2s ease-in-out;
  }
`;

export default Card;
