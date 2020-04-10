import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 20px;
  background: var(--cd-footer-background-color);
  padding: 30px;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: background .2s ease-in-out;
  }
`;

export default StyledFooter;
