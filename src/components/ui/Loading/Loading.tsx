import { Flex, Spin, SpinProps } from "antd";
import { FC } from "react";

interface ISpinner extends SpinProps {
  flexPrefixCls?: string;
  flexRootClassName?: string;
  flexVertical?: boolean;
  flexWrap?: boolean | React.CSSProperties["flexWrap"];
  flexJustify?: React.CSSProperties["justifyContent"];
  flexAlign?: React.CSSProperties["alignItems"];
  flex?: React.CSSProperties["flex"];
  flexStyle?: React.CSSProperties;
}

export const Loading: FC<ISpinner> = (props) => {
  const { flexAlign = "center", flexJustify = "center" } = props;
  const flexAttributes = {
    prefixCls: props.flexPrefixCls,
    rootClassName: props.flexRootClassName,
    vertical: props.flexVertical,
    wrap: props.flexWrap,
    justify: flexJustify,
    align: flexAlign,
    flex: props.flex,
    style: props.flexStyle,
  };
  return (
    <Flex {...flexAttributes}>
      <Spin {...props} />
    </Flex>
  );
};
