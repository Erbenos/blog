import styled from 'styled-components';

const Divider = styled.div`
  height: 1px;
  width: 100%;
  box-shadow: var(--cd-news-card-divider-box-shadow);

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: box-shadow .2s ease-in-out;
  }
`;

export default Divider;
