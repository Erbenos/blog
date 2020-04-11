import styled from 'styled-components';

const Logo = styled.a`
  display: inline-block;
  width: 134px;
  height: 27px;
  padding: 0;

  > svg {
    fill: var(--cd-logo-color);
  }

  &:hover > svg {
    fill: var(--cd-logo-hover-color);
  }

  @media screen and (prefers-reduced-motion: no-preference) {

    > svg {
      transition: fill .2s ease-in-out;
    }
  }
`;

export default Logo;
