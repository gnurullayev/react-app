import styled from "styled-components";

export const DocumentFormWrapper = styled.div`
  .document__inner {
    display: grid;
    place-items: center;
    padding: 50px 0;
    min-height: calc(100vh - 89px);
  }

  .form_container {
    width: 100%;
    max-width: 600px;
    padding: 26px 30px 30px 30px;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    background: #fff;
    box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.1);
    text-align: start;
  }

  .document__title {
    margin-bottom: 10px;
    font-size: 24px;
    text-align: center;
  }

  .form_item {
    margin-bottom: 30px !important;
  }

  .document__btn {
    display: block;
    margin: 0 auto;
    margin-top: 20px !important;
    width: 100%;
    max-width: 304px !important;
    height: 40px !important;
    border-radius: 10px !important;
    background-color: #322e83 !important;
    color: #fff;
    font-size: 16px;
  }

  .document__btn:disabled {
    color: #fff !important;
    background: #322e83;
    opacity: 0.77;
  }

  .form_item_checkbox {
    display: flex;
    gap: 10px;
  }

  .form_item_checkbox .ant-form-item {
    margin: 0;
  }

  .form_item_checkbox .ant-form-item-control-input {
    display: inline-block;
  }

  @media (max-width: 425px) {
    .form_inner {
      width: 100%;
      max-width: 576px;
    }

    .form_container {
      width: 100%;
      max-width: 576px;
    }
  }

  @media (max-width: 400px) {
    .form_container {
      padding: 20px;
    }

    .document__title {
      margin-bottom: 20px;
      font-size: 16px;
    }
  }
`;
