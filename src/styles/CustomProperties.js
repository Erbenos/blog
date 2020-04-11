import { createGlobalStyle } from 'styled-components';

const CustomProperties = createGlobalStyle`

  :root.is-dark-mode {
    --cd-document-base-font-family: 'Work Sans', sans-serif;
    --cd-document-text-color: #ffffff;
    --cd-document-background-color: #1E1E1E;
    --cd-logo-color: #ffffff;
    --cd-logo-hover-color: #776E63;
    --cd-nav-link-text-color: #ffffff;
    --cd-nav-link-hover-text-color: #776E63;
    --cd-news-card-background-color: #2E2E2E;
    --cd-news-card-box-shadow: 0px 4px 14px rgba(10, 10, 10, 0.07);
    --cd-news-card-divider-box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.07);
    --cd-news-card-link-box-shadow: 0 4px 2px -2px rgba(255, 255, 255, 0.035);
    --cd-news-card-link-hover-box-shadow: 0 4px 2px -2px rgba(255, 255, 255, 0.07);
    --cd-news-card-text-color: #ffffff;
    --cd-news-card-title-text-color: #ffffff;
    --cd-news-card-icon-color: #ffffff;
    --cd-post-background-color: #2E2E2E;
    --cd-post-container-box-shadow-color: rgba(10, 10, 10, 0.07);
    --cd-post-author-text-color: #ffffff;
    --cd-post-button-background-color: #ffffff;
    --cd-post-button-text-color: #ffffff;
    --cd-post-button-border-color: #d3d3d2;
    --cd-post-button-hover-border-color: rgba(0, 0, 0, 0.6);
    --cd-post-content-text-color: #ffffff;
    --cd-post-content-link-border-color: rgba(37, 110, 102, 0.25);
    --cd-post-content-link-text-color: #3ad6c5;
    --cd-post-content-link-hover-text-color: #2ac6b5;
    --cd-post-content-link-visited-text-color: #808080;
    --cd-post-content-link-visited-border-color: #808080;
    --cd-post-description-text-color: #ffffff;
    --cd-post-title-text-color: #ffffff;
    --cd-post-card-author-text-color: #ffffff;
    --cd-post-card-container-background-color: #2E2E2E;
    --cd-post-card-container-border-color: rgba(10, 10, 10, 0.07);
    --cd-post-card-description-text-color: #ffffff;
    --cd-post-card-link-text-color: #ffffff;
    --cd-post-card-link-visited-text-color: #efefef;
    --cd-post-card-container-hover-border-color: rgba(10, 10, 10, 0.07);
    --cd-post-card-heading-border-color: rgba(255, 255, 255, 0.25);
    --cd-post-card-heading-hover-border-color: rgba(255, 255, 255, 0.6);
    --cd-post-button-background-color: #555459;
    --cd-post-button-text-color: #ffffff;
    --cd-post-button-border-color: #555459;
    --cd-post-button-hover-border-color: #ffffff;
    --cd-post-content-link-visited-border-color: #808080;
    --cd-footer-text-color: #ffffff;
    --cd-footer-background-color: #555459;
    --cd-cookies-note-text-color: #ffffff;
  }

  :root {
    --cd-document-base-font-family: 'Work Sans', sans-serif;
    --cd-post-content-text-color: #ffffff;
    --cd-post-card-container-border-color: rgba(10, 10, 10, 0.07);
    --cd-post-card-container-hover-border-color: rgba(10, 10, 10, 0.07);
    --cd-post-card-heading-border-color: rgba(255, 255, 255, 0.25);
    --cd-post-card-heading-hover-border-color: rgba(255, 255, 255, 0.6);
    --cd-post-button-text-color: #ffffff;
    --cd-footer-text-color: #ffffff;
    --cd-footer-background-color: #555459;
    --cd-cookies-note-text-color: #ffffff;
    --cd-document-background-color: #f4e2cc;
    --cd-logo-color: #1a2c29;
    --cd-logo-hover-color: #776E63;
    --cd-nav-link-text-color: #24211d;
    --cd-nav-link-hover-text-color: #776E63;
    --cd-footer-text-color: #ffffff;
    --cd-footer-background-color: #202d33;
    --cd-cookies-note-text-color: #ffffff;
    --cd-news-card-background-color: #ffffff;
    --cd-news-card-box-shadow: 0px 4px 14px rgba(10, 10, 10, 0.07);
    --cd-news-card-divider-box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
    --cd-news-card-link-box-shadow: 0 4px 5px -5px #ffffff;
    --cd-news-card-link-hover-box-shadow: 0 4px 5px -5px #bebebe;
    --cd-news-card-text-color: #2b2b2b;
    --cd-news-card-title-text-color: #000000;
    --cd-news-card-icon-color: #000000;
    --cd-post-background-color: #ffffff;
    --cd-post-container-box-shadow-color: rgba(10, 10, 10, 0.07);
    --cd-post-author-text-color: #000000;
    --cd-post-button-background-color: #ffffff;
    --cd-post-button-text-color: #000000;
    --cd-post-button-border-color: #d3d3d2;
    --cd-post-button-hover-border-color: rgba(0, 0, 0, 0.6);
    --cd-post-content-text-color: #000000;
    --cd-post-content-link-border-color: rgba(37, 110, 102, 0.25);
    --cd-post-content-link-text-color: #256e66;
    --cd-post-content-link-hover-text-color: #226259;
    --cd-post-content-link-visited-text-color: #808080;
    --cd-post-content-link-visited-border-color: #808080;
    --cd-post-description-text-color: #000000;
    --cd-post-title-text-color: #000000;
    --cd-post-card-heading-border-color: rgba(0, 0, 0, 0.25);
    --cd-post-card-heading-hover-border-color: rgba(0, 0, 0, 0.6);
    --cd-post-card-author-text-color: #000000;
    --cd-post-card-container-background-color: #ffffff;
    --cd-post-card-description-text-color: #000000;
    --cd-post-card-link-text-color: #000000;
    --cd-post-card-link-visited-text-color: #808080;
  }

`;

export default CustomProperties;
