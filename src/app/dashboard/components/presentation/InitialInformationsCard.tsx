import { initialInformationsProps } from "@/utils/constants/InitialInformations";
import Image from "next/image";

interface InitialInformationsCardProps {
  data: initialInformationsProps;
  count: number;
  action1: () => void;
  action2: () => void;
}

const InitialInformationsCard: React.FC<InitialInformationsCardProps> = ({
  data,
  count,
  action1,
  action2 = null,
}) => {
  return (
    <div
      className="
        w-[90%]
        max-w-[640px]
        rounded-xl
        bg-white
        drop-shadow-[1px_1px_2px_#00000071]
      "
    >
      <div
        className="
          flex
          gap-4
          p-4
        "
      >
        <div
          className="
            flex
            flex-col
            gap-8
            text-black
          "
        >
          <h2 className="font-bold text-2xl">{data.title}</h2>
          <p className="text-base font-bold">{data.about}</p>
        </div>
        <Image
          src={data.illustration}
          width={520}
          height={520}
          alt={"image of" + data.title}
          className="w-[200px] mt-10"
        />
      </div>
      <div
        className="
          w-full
          flex
          justify-end
          gap-4
          pr-8
          pb-4
        "
      >
        {count > 0 && action2 !== null && (
          <button
            onClick={() => action2()}
            className="
              bg-blue-400
              text-lg
              font-bold
              text-white
              p-2
              rounded-lg
              hover:brightness-90
            "
          >
            Voltar
          </button>
        )}

        <button
          onClick={() => action1()}
          className="
            bg-green-400
            text-lg
            font-bold
            text-white
            p-2
            rounded-lg
            hover:brightness-90
          "
        >
          Avançar
        </button>
      </div>
    </div>
  );
};

export default InitialInformationsCard;
