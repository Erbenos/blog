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
    transition: 0.25s box-shadow ease-out;
  }

  :hover:before {
    box-shadow: 0 4px 5px -5px #bebebe;
  }

  :hover ${Text}:before {
    transform: translateX(5px);
  }
`;

export default Link;
