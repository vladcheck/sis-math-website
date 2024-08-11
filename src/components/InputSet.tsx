import { ReactElement } from "react";

interface Probs {
  classes: string[];
  children: ReactElement[];
}

const InputSet = ({ classes, children }: Probs) => {
  return <div className={`input-set, ${classes}`}>{children}</div>;
};

export default InputSet;
