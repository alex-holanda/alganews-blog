import { transparentize } from "polished";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
  }

  body {
    background-color: ${(props) => props.theme.pageBackground};
    color: ${(props) => props.theme.pageForeground};
    font-family: "Lato", sans-serif;
  }

  .Pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    gap: 4px;

    li {
      a {
        padding: 0 8px;
        min-width: 28px;
        height: 34px;
        transition: 0.25s ease;

        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;

        background-color: ${(props) => props.theme.inactiveElementBackground};
        color: ${(props) => props.theme.inactiveElementForeground};
        border-radius: ${(props) => props.theme.borderRadius};

        font-size: 12px;
      }

      &.disabled a {
        cursor: not-allowed;
        opacity: ${(props) => props.theme.inactiveElementOpacity};
      }

      &.selected a {
        background-color: ${(props) => props.theme.primaryBackground};
        color: ${(props) => props.theme.primaryForeground};
        cursor: default;

        &::before {
          content: 'Página';
          display: inline-block;
          margin-right: 4px;
        }
      }

      &:not(.selected, .disabled) {
        &:hover,
        &:focus {
          a {
            transform: translateY(-3px);
            box-shadow: 0 3px 6px ${(props) =>
              transparentize(0.9, props.theme.pageForeground)};
          }
        }
      }
    }
  }

  .MarkdownRenderer {
    max-width: 680px;
    margin: 48px auto;

    > * {
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }

    p {
      font-size: 18px;
      line-height: 36px;
    }

    ul {
      font-size: 18px;
      line-height: 36px;
      margin-left: 32px;
    }

    h2 {
      font-size: 48px;
      font-weight: 500;
    }

    h3 {
      font-size: 36px;
      font-weight: 500;
    }

    h4 {
      font-size: 26px;
      font-weight: 500;
    }

    h5 {
      font-size: 18px;
      font-weight: 500;
    }

    h6 {
      font-size: 18px;
      font-weight: 500;
    }

    a {
      color: ${(props) => props.theme.primaryBackground};
      text-decoration: none;

      &:hover, &:focus {
        text-decoration: underline;
      }
    }

    code:not([class^='language']) {
      color: ${(props) => props.theme.pageBackground};
      background-color: ${(props) => props.theme.pageForeground};
      border-radius: ${(props) => props.theme.borderRadius};
      padding: 4px 8px;

      font-family: 'roboto mono', monospace;
      font-weight: 300;
      font-size: 14px;

      white-space: nowrap;
    }

    img {
      max-width: 100%;

    }

    pre {

      color: ${(props) => props.theme.pageBackground};
      background-color: ${(props) => props.theme.pageForeground};
      border-radius: ${(props) => props.theme.borderRadius};

      overflow-x: auto;

      > code {
        display: inline-block;
        white-space: inherit !important;
      }
    }
  }
`;
