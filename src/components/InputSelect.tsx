import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  name: string;
  id: string;
}

const InputSelect = ({ children, name, id }: Props) => {
  return (
    <select name={name} id={id}>
      {children}
    </select>
  );
};

export default InputSelect;
