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
    opacity: 0.6;
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: opacity .2s ease-in-out, color .2s ease-in-out;
  }
`;

export default Logo;
