import styled from 'styled-components';

const Logo = styled.a`
  display: inline-block;
  width: 134px;
  height: 27px;
  background: url('/logos/logo.svg');
  padding: 0 !important;
  color: var(--cd-logo-text-color);

  &__inner {
    display: none;
  }

  &:hover {
    transition: all 200ms ease-in-out;
    opacity: 0.6;
  }
`;

export default Logo;
