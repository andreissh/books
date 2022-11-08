import React, { ReactNode } from "react";

type ButtonProps = {
  styles: string;
  onBooksLoad: () => void;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ styles, onBooksLoad, children }) => {
  return (
    <>
      <button className={styles} onClick={onBooksLoad}>
        {children}
      </button>
    </>
  );
};

export default Button;
