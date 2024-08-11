// interface Props {
//   name: string;
//   id: string;
// }

const FractionInput = () => {
  return (
    <div className="vertical fraction">
      <input type="text" name="enumenator" id="enumenator" />
      <hr />
      <input type="text" name="dinominator" id="dinominator" />
    </div>
  );
};

export default FractionInput;
