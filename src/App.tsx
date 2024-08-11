import InputSet from "./components/InputSet";
import InputSelect from "./components/inputSelect";

export default function App() {
  return (
    <>
      <InputSet classes="horizontal">
        <InputSelect name="topic" id="topic">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </InputSelect>
      </InputSet>
    </>
  );
}
