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
    margin: 1em auto;
  }

  p, li {
    line-height: 26px;
  }

  ul, ol {
    list-style-type: disc;
    padding-left: 1.2em;
  }

  img {
    border-radius: 10px;
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: block;
    font-weight: bold;
  }

  h1 {
    margin: 0.75em 0;
    font-size: 2em;
  }

  h2 {
    margin: 1em 0;
    font-size: 1.5em;
  }

  h3 {
    margin: 1.1em 0;
    font-size: 1.17em;
  }

  h4 {
    margin: 1.3em 0;
  }

  h5 {
    margin: 1.7em 0;
    font-size: 0.83em;
  }

  h6 {
    margin: 2.3em 0;
    font-size: 0.67em;
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
      color: var(--cd-post-content-link-hover-text-color);
    }

    :visited {
      color: var(--post-content-visited);
      border-bottom: 1px solid var(--cd-post-content-link-visited-text-color);
    }

    @media screen and (prefers-reduced-motion: no-preference) {
      transition: 
        color .2s ease-in-out,
        border .2s ease-in-out;
    }
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

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color .2s ease-in-out;
  }
`;

export default Content;
