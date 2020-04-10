import styled from 'styled-components';
import Text from './Text';

const Link = styled.a`
  display: block;
  padding: 1rem 20px;
  text-decoration: none;
  color: var(--cd-news-card-text-color);
  margin-left: -20px;
  margin-right: -20px;
  width: calc(100% + 40px);
  position: relative;

  :before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 20px;
    bottom: 0;
    left: 20px;
    width: calc(100% - 40px);
    height: 100%;
    box-shadow: 0 4px 5px -5px #ffffff;

    @media screen and (prefers-reduced-motion: no-preference) {
      transition: box-shadow .2s ease-in-out;
    }
  }

  :hover:before {
    box-shadow: 0 4px 5px -5px #bebebe;
  }

  :hover ${Text}:before {
    transform: translateX(5px);
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color .2s ease-in-out;
  }
`;

export default Link;
