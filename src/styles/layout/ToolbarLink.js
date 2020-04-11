import styled from 'styled-components';

export const ToolbarLink = styled.a`
  vertical-align: middle;
  margin: 20px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 400;
  line-height: 1.4;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: min-content;
  color: var(--cd-nav-link-text-color);

  ${props =>
    props.underline ? 'border-bottom: solid 1px var(--cd-nav-link-hover-text-color);' : ''}

  &:hover {
    color: var(--cd-nav-link-hover-text-color);
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color .2s ease-in-out;
  }

  @media (max-width: 768px) {
    margin: 0 25px 10px 0;
  }
`;

export default ToolbarLink;
