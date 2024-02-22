import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addNumber, sortOne, sortAll, selectedNumBank } from "./numberSlice";

export default function NumberBankNums() {
  const enteredNums = useSelector(selectedNumBank);

  const [inputNum, setInputNum] = useState("");

  const dispatch = useDispatch();

  const onNumEntered = (e) => {
    e.preventDefault();

    const actionType = e.nativeEvent.submitter.name;
    if (actionType === "addNumber") {
      dispatch(addNumber(inputNum));
    } else if (actionType === "sortOne") {
      dispatch(sortOne());
    } else if (actionType === "sortAll") {
      dispatch(sortAll());
    }
  };
  return (
    <>
      <section className='numberBank container'>
        <form onSubmit={onNumEntered}>
          <label>
            Add a Number to the Bank
            <input
              type='number'
              value={inputNum}
              onChange={(e) => setInputNum(e.target.value)}
            />
          </label>
          <button name='addNumber'>Add Number</button>

          <h1>Number Bank</h1>
          <output id='numberBank'>{enteredNums.join(", ")}</output>
          <div>
            <button name='sortOne'>Sort 1</button>
            <button name='sortAll'>Sort All</button>
          </div>
        </form>
      </section>
    </>
  );
}
