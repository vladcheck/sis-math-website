import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  classes?: string[];
}

const InputSet = ({ classes, children }: Props) => {
  return (
    <div className={classes ? "input-set " + classes.join(" ") : "input-set"}>
      {children}
    </div>
  );
};

export default InputSet;
