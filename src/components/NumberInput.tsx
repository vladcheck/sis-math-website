interface Props {
  name: string;
  id: string;
  min: number;
  max?: number;
  placeholder?: string;
}

const NumberInput = ({ name, id, min, max, placeholder }: Props) => {
  return (
    <input
      type="number"
      name={name}
      id={id}
      min={min}
      max={max}
      placeholder={placeholder}
    ></input>
  );
};

export default NumberInput;
