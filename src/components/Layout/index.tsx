import { FC, ReactNode } from "react";
import { LayoutWrapper } from "./style";

interface ILayout {
  children: ReactNode;
}
const Layout: FC<ILayout> = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
