import React, { ReactNode } from "react";

type LayoutProps = {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ header, footer, children }) => {
  return (
    <div className="flex flex-col h-screen">
      <header>{header}</header>
      <main className="flex-grow">{children}</main>
      <footer>{footer}</footer>
    </div>
  );
};

export default Layout;
