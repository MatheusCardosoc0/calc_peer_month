import { initialInformations } from "@/utils/constants/InitialInformations";
import InitialInformationsCard from "./InitialInformationsCard";

const Presentation = () => {
  return (
    <section>
      <div>
        {initialInformations.map((item, i) => (
          <InitialInformationsCard key={i} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Presentation;
