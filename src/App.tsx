import InputSet from "./components/InputSet";
import InputSelect from "./components/InputSelect";

export default function App() {
  return (
    <main className="menu">
      <h1>Настройки</h1>
      <InputSet>
        <label htmlFor="topic">Тема</label>
        <InputSelect name="topic" id="topic">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </InputSelect>
      </InputSet>
    </main>
  );
}
