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
`;
