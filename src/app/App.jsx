import NumberBankNums from "../features/numberBank";
import SortedNums from "../features/storedNumbers";
import "./App.css";

const App = () => {
  return (
    <>
      <main>
        <h1>Charles' Bank</h1>
        <NumberBankNums />
        <SortedNums />
      </main>
    </>
  );
};

export default App;
