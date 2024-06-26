import styled from "styled-components";

export const DocumentsTableWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  .document_inner {
    width: 100%;
    max-width: 1400px;
  }

  .document_header {
    display: flex;
    justify-content: flex-end;
    padding: 30px 0;
  }

  .document_header_link {
    color: var(--white);
    padding: 10px 15px;
    background-color: var(--blue);
    border-radius: 10px;
  }

  .actions {
    color: var(--blue);
  }
  .ant-table-thead .ant-table-cell {
    text-align: center;
  }

  .ant-table-cell {
    text-align: center;
  }

  .actions_link {
    color: var(--blue);
  }

  .pagination_box {
    display: flex;
    justify-content: center;
    padding: 40px 0;
  }
`;
