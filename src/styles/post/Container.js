import styled from 'styled-components';

const Container = styled.div`
  background: var(--cd-post-background-color);
  box-shadow: 0px 4px 14px var(--cd-post-container-box-shadow-color);
  border-radius: 14px;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition:
      background .2s ease-in-out,
      box-shadow .2s ease-in-out;
  }
`;

export default Container;
