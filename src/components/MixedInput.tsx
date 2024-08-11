import FractionInput from "./FractionInput";

const MixedInput = () => {
  return (
    <div className="fraction mixed horizontal">
      <input type="text" name="integer" id="integer" />
      <FractionInput></FractionInput>
    </div>
  );
};

export default MixedInput;
