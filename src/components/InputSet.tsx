import { ReactNode } from "react";

interface Props {
  classes: string;
  children: ReactNode;
}

const InputSet = ({ classes, children }: Props) => {
  return <div className={"input-set, " + classes}>{children}</div>;
};

export default InputSet;
