"use client";

import { initialInformations } from "@/utils/constants/InitialInformations";
import InitialInformationsCard from "./InitialInformationsCard";
import { useCallback, useState } from "react";

const Presentation = () => {
  const [count, setCount] = useState(0);

  const NextInfo = useCallback(() => {
    if (count === initialInformations.length - 1) {
      return null;
    }

    setCount((prev) => prev + 1);
  }, [count]);

  const PreviousInfo = useCallback(() => {
    if (count === 0) {
      return null;
    }

    setCount((prev) => prev - 1);
  }, [count]);

  return (
    <section
      className="
        flex
        min-h-screen
        justify-center
        items-center
        w-full
      "
    >
      <div
        className="
          flex
          justify-center
          items-center
        "
      >
        <InitialInformationsCard
          data={initialInformations[count]}
          action1={NextInfo}
          action2={PreviousInfo}
          count={count}
        />
      </div>
    </section>
  );
};

export default Presentation;
