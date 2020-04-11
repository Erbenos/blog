import styled from 'styled-components';

const Container = styled.div`
  background: var(--cd-post-card-container-background-color);
  box-shadow: 0px 4px 14px var(--cd-post-card-container-border-color);
  border-radius: 14px;
  height: 100%;
  
  :hover {
    box-shadow: 0px 8px 18px var(--cd-post-card-container-hover-border-color);
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition:
      background .2s ease-in-out,
      box-shadow .2s ease-in-out;
  }
`;

export default Container;
