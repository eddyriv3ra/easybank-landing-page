import Image from "next/image";

interface ICardItems {
  imageSrc: string;
  title: string;
  description: string;
}

function CardItems({ imageSrc, title, description }: ICardItems) {
  return (
    <div className="w-[255px] h-[278px]">
      <Image
        src={`/images/${imageSrc}`}
        alt="card image"
        priority={true}
        width={72}
        height={72}
      />
      <div className="h-[166px] mt-[40px]">
        <p className="text-tertiary text-2xl font-light mb-[26px]">{title}</p>
        <p className="text-quaternary text-base font-normal traccking-[-0.25px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CardItems;
