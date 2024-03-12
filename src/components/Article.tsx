import Image from "next/image";
import React from "react";

interface IArticle {
  article: {
    imageSrc: string;
    author: string;
    title: string;
    description: string;
  };
}

function Article({ article }: IArticle) {
  return (
    <div className="sm:w-[255px] sm:h-[395px] rounded-[5px]">
      <Image
        alt={article.imageSrc}
        src={`/images/${article.imageSrc}.png`}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full"
        quality={100}
      />
      <div className="mt-[25px] sm:mx-6 max-sm:mx-[31px]">
        <p className="text-quaternary text-[10px] leading-[18px] tracking-[-0.156px] font-normal">
          {article.author}
        </p>
        <p className="text-tertiary text-base font-light sm:leading-5 tracking-[-0.286px] my-2 hover:text-[#30C88F] hover:cursor-pointer max-sm:leading-[20px]">
          {article.title}
        </p>
        <p className="text-quaternary text-[13px] font-normal leading-[18px] tracking-[-0.203px] max-sm:min-h-[72px] max-sm:pb-6">
          {article.description}
        </p>
      </div>
    </div>
  );
}

export default Article;
