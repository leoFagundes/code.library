import styled from "styled-components";

export const DropdownContainer = styled.label`
  --burger-bg: transparent;
  --burger-color: ${({ theme }) => theme.mainBlack};
  --burger-btn-border-radius: calc(1.2em / 2);
  --burger-transition: all 0.1s ease-in-out;
  --nav-padding-x: 0.25em;
  --nav-padding-y: 0.625em;
  --nav-border-radius: 0.375em;
  --nav-border-color: #ccc;
  --nav-border-width: 0.0625em;
  --nav-shadow-color: rgba(0, 0, 0, 0.2);
  --nav-bg: #eee;
  --nav-font-family: Menlo, Roboto Mono, monospace;
  --nav-default-scale: 0.8;
  --nav-active-scale: 1;
  --nav-title-size: 0.625em;
  --nav-title-color: #777;
  --nav-title-padding-x: 1rem;
  --nav-title-padding-y: 0.25em;
  --nav-button-padding-x: 1rem;
  --nav-button-padding-y: 0.375em;
  --nav-button-border-radius: 0.375em;
  --nav-button-font-size: 12px;
  --nav-button-hover-bg: ${({ theme }) => theme.tertiaryColor};
  --nav-button-hover-text-color: #fff;
  --nav-button-distance: 0.875em;

  display: inline-block;
  text-rendering: optimizeLegibility;
  position: relative;

  input {
    display: none;
  }

  .burger {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background: var(--burger-bg);
    width: 1.2em;
    height: 1.2em;
    border-radius: var(--burger-btn-border-radius);
    border: none;
    cursor: pointer;
    overflow: hidden;
    transition: var(--burger-transition);
    outline: 0.125em solid transparent;
    outline-offset: 0;
    transform: translateY(1px);

    span {
      height: 0.125em;
      width: 1.125em;
      background: var(--burger-color);
      border-radius: 0.1875em;
      position: absolute;
      transition: 0.3s;
    }
  }

  .popup-window {
    transform: scale(var(--nav-default-scale));
    visibility: hidden;
    opacity: 0;
    position: absolute;
    padding: var(--nav-padding-y) var(--nav-padding-x);
    background: var(--nav-bg);
    font-family: var(--nav-font-family);
    color: var(--nav-text-color);
    border-radius: var(--nav-border-radius);
    box-shadow: 0 1px 5px var(--nav-shadow-color);
    border: var(--nav-border-width) solid var(--nav-border-color);
    right: 0;
    bottom: 15px;
    transition: var(--burger-transition);
    overflow-y: scroll;
    max-height: 150px;

    legend {
      padding: var(--nav-title-padding-y) var(--nav-title-padding-x);
      margin: 0;
      color: var(--nav-title-color);
      font-size: var(--nav-title-size);
      text-transform: uppercase;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
      margin: 0;
      padding: 0;
      list-style-type: none;

      li {
        width: 100%;
      }

      button {
        outline: none;
        width: 100%;
        border: none;
        background: none;
        display: flex;
        align-items: center;
        color: var(--burger-color);
        font-size: var(--nav-button-font-size);
        padding: var(--nav-button-padding-y) var(--nav-button-padding-x);
        white-space: nowrap;
        border-radius: var(--nav-button-border-radius);
        cursor: pointer;
        column-gap: var(--nav-button-distance);

        &.current-option {
          background: var(--nav-button-hover-bg);
          color: var(--nav-button-hover-text-color);

          svg {
            color: var(--nav-button-hover-text-color);
          }
        }
      }
    }

    hr {
      margin: 0.3125em 0;
      border: none;
      border-bottom: 0.0625em solid #ccc;
    }
  }

  .popup-window ul button:hover,
  .popup-window ul button:focus-visible,
  .popup-window ul button:hover svg,
  .popup-window ul button:focus-visible svg {
    color: var(--nav-button-hover-text-color);
    background: var(--nav-button-hover-bg);
  }

  input:checked ~ nav {
    transform: scale(var(--nav-active-scale));
    visibility: visible;
    opacity: 1;
  }
`;
