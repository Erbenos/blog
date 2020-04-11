import styled from 'styled-components';
import { Link } from 'gatsby';

const Button = styled(Link)`
  background: var(--cd-post-button-background-color);
  border: 2px solid var(--cd-post-button-border-color);
  box-sizing: border-box;
  border-radius: 26px;

  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 100%;
  /* identical to box height, or 14px */

  margin-top: 50px;
  text-decoration: none;
  width: 240px;
  display: flex;
  align-items: center;
  text-align: center;

  color: var(--cd-post-button-text-color);
  padding: 12px 16px 12px 16px;

  :hover {
    border: 2px solid var(--cd-post-button-hover-border-color);
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition:
      background .2s ease-in-out,
      border .2s ease-in-out,
      color .2s ease-in-out;
  }
`;

export default Button;
