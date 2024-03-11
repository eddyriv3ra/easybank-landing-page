import Image from "next/image";

interface ICardItems {
  imageSrc: string;
  title: string;
  description: string;
}

function CardItems({ imageSrc, title, description }: ICardItems) {
  return (
    <div className="sm:w-[255px] sm:h-[278px] max-sm:h-[215px] max-sm:flex max-sm:flex-col max-sm:items-center">
      <Image
        src={`/images/${imageSrc}`}
        alt="card image"
        priority={true}
        width={72}
        height={72}
      />
      <div className="h-[166px] mt-[40px] max-sm:mt-6 max-sm:text-center">
        <p className="text-tertiary text-2xl font-light mb-[26px] max-sm:mb-4">{title}</p>
        <p className="text-quaternary text-base font-normal traccking-[-0.25px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CardItems;
