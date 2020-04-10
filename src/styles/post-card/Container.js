import styled from 'styled-components';

const Container = styled.div`
  background: var(--cd-post-card-container-background-color);
  box-shadow: 0px 4px 14px rgba(10, 10, 10, 0.07);
  border-radius: 14px;
  height: 100%;
  transition: all 250ms ease-in-out;
  :hover {
  box-shadow: 0px 8px 18px rgba(10, 10, 10, 0.12);
  }
`;

export default Container;
