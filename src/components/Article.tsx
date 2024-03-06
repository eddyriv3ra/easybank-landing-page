import Image from "next/image";
import React from "react";

interface IArticle {
  article: {
    imageSrc: string;
    author: string;
    title: string;
    description: string;
  }
}


function Article({ article }: IArticle) {
  return (
    <div className="w-[255px] h-[395px] rounded-[5px]">
      <Image
        src={`/images/${article.imageSrc}.png`}
        alt={article.imageSrc}
        width={255}
        height={200}
      />
      <div className="mt-[25px] mx-6">
        <p className="text-quaternary text-[10px] leading-[18px] tracking-[-0.156px] font-normal">
          {article.author}
        </p>
        <p className="text-tertiary text-base font-light leading-5 tracking-[-0.286px] my-2 hover:text-[#30C88F] hover:cursor-pointer">
          {article.title}
        </p>
        <p className="text-quaternary text-[13px] font-normal leading-[18px] tracking-[-0.203px]">
          {article.description}
        </p>
      </div>
    </div>
  );
}

export default Article;
