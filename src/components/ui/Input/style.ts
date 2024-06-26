import { Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import styled from "styled-components";
const { Password } = Input;

export const AntdFormItemWrapper = styled(FormItem)`
  margin-bottom:0;
  
  .ant-form-item-label {
    padding: 0;
  }
`;

export const AntdInputWrapper = styled(Input)`
  border: 1px solid var(--border-color);
  transition: all 0.3s linear;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid var(--grey-50);
  }
`;

export const AntdPasswordWrapper = styled(Password)`
  border: 1px solid var(--border-color);
  transition: all 0.3s linear;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid var(--grey-50);
  }
`;
