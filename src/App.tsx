import InputSet from "./components/InputSet";
import InputSelect from "./components/InputSelect";
import NumberInput from "./components/NumberInput";

export default function App() {
  return (
    <main className="menu">
      <h1>Настройки</h1>
      <hr />
      <InputSet>
        <label htmlFor="topic">Тема</label>
        <InputSelect name="topic" id="topic">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </InputSelect>
      </InputSet>
      <InputSet>
        <label htmlFor="amountOfProblems">Количество заданий</label>
        <NumberInput
          min={1}
          max={50}
          placeholder="10"
          name="amountOfProblems"
          id="amountOfProblems"
        />
      </InputSet>
      <InputSet>
        <label htmlFor="highestNumber">
          Самое большое возможное число в задании
        </label>
        <NumberInput
          min={10}
          max={100}
          placeholder="100"
          name="highestNumber"
          id="highestNumber"
        />
      </InputSet>
    </main>
  );
}
