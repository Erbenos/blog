import styled from 'styled-components';

const FooterLink = styled.a`
  vertical-align: middle;

  font-size: 16px;
  text-decoration: none;
  font-weight: 400;
  line-height: 1.4;
  text-overflow: ellipsis;
  overflow: hidden;
  color: var(--cd-footer-text-color);
  white-space: nowrap;
  width: min-content;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: opacity .2s ease-in-out, color .2s ease-in-out;
  }

  ${props => (props.bold ? 'font-weight: bold;' : '')}
`;

export default FooterLink;
