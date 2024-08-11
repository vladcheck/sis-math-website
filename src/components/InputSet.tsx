import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  vertical?: boolean;
}

const InputSet = ({ vertical, children }: Props) => {
  return (
    <div className={`input-set ${vertical ? "vertical" : "horizontal"}`}>
      {children}
    </div>
  );
};

export default InputSet;
