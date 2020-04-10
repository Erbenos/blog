import styled from 'styled-components';

const Content = styled.div`
  font-family: Work Sans, sans-serif;
  font-style: normal;

  /* or 26px */

  color: var(--cd-post-content-text-color);

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    color: var(--cd-post-content-text-color);
  }

  p, li {
    line-height: 26px;
  }

  ul, ol {
    padding-left: 1.2em;
  }

  img {
    border-radius: 10px;
    max-width: 100%;
  }

  .picture-note {
    margin-top: -15px;
    margin-left: 5px;
    font-size: 16px;
    line-height: 150%;

    opacity: 0.5;
  }

  a {
    border-bottom: 1px solid rgba(37, 110, 102, 0.25);
    color: var(--cd-post-content-link-text-color);
    text-decoration: none;

    :hover {
      transition: all 200ms ease-in-out;
      color: var(--cd-post-content-link-hover-text-color);
    }

    :visited {
      color: var(--post-content-visited);
      border-bottom: 1px solid var(--cd-post-content-link-visited-text-color);
    }
  }

  h2 {
    margin-top: 50px;
  }

  .volunteers {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .volunteer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px;
    width: 170px;
    text-align: center;
    
    img {
      width: 80px;
      height: 80px;
      border-radius: 40px;
      object-fit: cover;
    }
    
    .name {
      margin-top: 10px;
      margin-bottom: 5px;
    }
    
    .note {
      font-size: 14px;
      opacity: 0.5;
    }
  
  }
`;

export default Content;
