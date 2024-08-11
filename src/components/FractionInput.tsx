// interface Props {
//   name: string;
//   id: string;
// }

const FractionInput = () => {
  return (
    <div className="vertical fraction">
      <input type="number" name="enumenator" id="enumenator" />
      <hr />
      <input type="number" name="dinominator" id="dinominator" />
    </div>
  );
};

export default FractionInput;
