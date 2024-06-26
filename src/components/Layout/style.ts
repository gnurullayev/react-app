import styled from "styled-components";

export const LayoutWrapper = styled.div`
  background-color: #F8FAFC;
  max-width: 100%;
  min-height: 100vh;

  .container {
    width: 100%;
    max-width: 1480px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .inner {
    display: grid;
    grid-template-columns: 250px 1fr;
  }
`;
