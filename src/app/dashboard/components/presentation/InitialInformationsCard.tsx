import { initialInformationsProps } from "@/utils/constants/InitialInformations";
import Image from "next/image";

interface InitialInformationsCardProps {
  data: initialInformationsProps;
}

const InitialInformationsCard: React.FC<InitialInformationsCardProps> = ({
  data,
}) => {
  return (
    <div>
      <div>
        <h2>{data.title}</h2>
        <p>{data.about}</p>
      </div>
      <Image
        src={data.illustration}
        width={520}
        height={520}
        alt={"image of" + data.title}
      />
    </div>
  );
};

export default InitialInformationsCard;
