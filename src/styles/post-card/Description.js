import styled from 'styled-components';

const Description = styled.p`
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  height: 48px;
  -webkit-line-clamp: 2;
  display: block;
  display: -webkit-box;
  max-width: 100%;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  /* or 24px */

  margin-top: 10px;
  color: var(--cd-post-card-description-text-color);

  opacity: 0.75;

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color .2s ease-in-out;
  }
`;

export default Description;
