import React, { ReactNode } from "react";

type LayoutProps = {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ header, footer, children }) => {
  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </>
  );
};

export default Layout;
