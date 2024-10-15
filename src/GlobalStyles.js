import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
	padding: 0;
	box-sizing: border-box;
    }

    html, body {
        font-family: "Inter", sans-serif;
        font-size: 0.85rem;
        background-color: #1b1d1c;
        color: #f8f8f8;
    }

    /* Custom styles for react-toastify toasts */
    .custom-toast-container {
        font-family: "Inter", sans-serif;
        font-size: 0.758rem;
        color: #000;
    }

    .custom-toast {
        background-color: #ddd;
        border: 1px solid #1b1d1c;
        color: #fff;
        padding: 10px;
        border-radius: 0;
    }

    /* Custom scrollbar styles */
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #ff56b1;
        border-radius: 0;
    }

    ::-webkit-scrollbar-track {
        background-color: #1b1d1c;
    }

    /* Custom scrollbar styles for Firefox */
    scrollbar-width: thin;
    scrollbar-color: #ff56b1 transparent;

    /* Custom selection styles */
    ::selection {
        background-color: #ff56b1 !important;
        color: #f8f8f8 !important; /* Ensure the text is readable on a #ff56b1 background */
    }

    ::-moz-selection {
        background-color: #ff56b1 !important;
        color: #f8f8f8 !important; /* Ensure the text is readable on a #ff56b1 background */
    }

    /* Higher specificity to ensure selection color applies */
    body::selection,
    body *::selection {
        background-color: #ff56b1 !important;
        color: #f8f8f8 !important; /* Ensure the text is readable on a #ff56b1 background */
    }

    body::-moz-selection,
    body *::-moz-selection {
        background-color: #ff56b1 !important;
        color: #f8f8f8 !important; /* Ensure the text is readable on a #ff56b1 background */
    }
`;
