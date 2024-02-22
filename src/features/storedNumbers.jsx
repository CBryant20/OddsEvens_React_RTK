import { useSelector } from "react-redux";

import { selectOdds, selectEvens } from "./numberSlice";

export default function SortedNums() {
  const oddNums = useSelector(selectOdds);
  const evenNums = useSelector(selectEvens);
  return (
    <>
      <section id='sortedNumbers'>
        <h1>Sorted Numbers</h1>
        <section>
          <h2>Odds</h2>
          <output>{oddNums.join(", ")}</output>
        </section>
        <section>
          <h2>Evens</h2>
          <output>{evenNums.join(", ")}</output>
        </section>
      </section>
    </>
  );
}
