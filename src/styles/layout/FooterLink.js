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
    transition: all 200ms ease-in-out;
    opacity: 0.6;
  }

  ${props => (props.bold ? 'font-weight: bold;' : '')}
`;

export default FooterLink;
