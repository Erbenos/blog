import styled from 'styled-components';

export const ToolbarLink = styled.a`
  vertical-align: middle;
  color: var(--cd-nav-link-text-color);
  margin: 20px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 400;
  line-height: 1.4;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: min-content;

  ${props =>
    props.underline ? 'border-bottom: solid 1px rgba(0,0,0,0.5);' : ''}

  &:hover {
    opacity: 0.6;
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: opacity .2s ease-in-out, color .2s ease-in-out;
  }

  @media (max-width: 768px) {
    margin: 0 25px 10px 0;
  }
`;

export default ToolbarLink;
