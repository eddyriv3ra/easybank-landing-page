import Article from "@/components/Article";
import CardItems from "@/components/CardItems";
import { Button } from "@/components/ui/button";
import { cardItemsMock, latestArticles } from "@/mock-data";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <main>
      <div className="sm:w-[1440px] mx-auto">
        <div className="flex bg-tertiary-background sm:h-[736px] w-full max-sm:flex-col-reverse">
          <div className="sm:h-[316px] sm:ml-[165px] sm:mt-44 max-sm:flex max-sm:flex-col max-sm:items-center mt-[41px]">
            <div className="sm:w-[447px] max-sm:mx-6">
                <h1 className="text-tertiary text-[56px] leading-[64px] font-light tracking-[-1px] sm:mb-6 max-sm:text-center max-sm:text-[40px] max-sm:leading-none max-sm:tracking-[-0.714px]">
                  Next generation digital banking
                </h1>
              <div className="text-quaternary tracking-[-1px] leading-7 text-lg max-sm:text-center max-sm:text-[15px] max-sm:leading-[25px] max-sm:tracking-[-0.234px] max-sm:mt-4">
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </div>
            </div>
            <Button className="h-11 min-w-[163px] sm:mt-9 max-sm:mt-[32px]">
              Request Invite
            </Button>
          </div>
          <div className="sm:w-full h-1/4">
            <div className="relative w-full h-full overflow-x-clip">
              <Image
                src="/images/bg-intro-desktop.svg"
                alt="background image"
                priority={true}
                width={1340}
                height={1340}
                className="object-contain max-w-none absolute top-[-270px] max-sm:hidden"
              />
              <div className="w-full md:absolute md:top-[-140px] md:right-[-140px]">
                <Image
                  src="/images/small.png"
                  alt="mobile images"
                  priority
                  width={830}
                  height={130}
                  className="object-contain sm:max-w-none sm:hidden"
                />
                <Image
                  src="/images/image-mockups.png"
                  alt="mobile images"
                  priority
                  width={830}
                  height={830}
                  className="object-contain sm:max-w-none max-sm:hidden"
                />
                <Image
                  src="/images/mobiles.png"
                  alt="mobile images"
                  priority
                  width={830}
                  height={830}
                  className="object-contain sm:max-w-none max-sm:absolute max-sm:z-10 max-sm:top-[0] sm:hidden"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:h-[676px] bg-quaternary-background sm:pl-[165px] sm:pt-[96px] max-sm:pt-16 max-sm:px-6">
          <div className="sm:w-[635px] sm:h-[136px] flex sm:justify-between flex-col max-sm:text-center">
            <p className="text-tertiary text-[40px] font-light max-sm:text-[32px] max-sm:tracking-[-0.571px] max-sm:leading-[1.7rem]">
              Why choose Easybank?
            </p>
            <p className="text-quaternary text-lg font-normal tracking-[-0.281px] max-sm:text-[15px] max-sm:leading-[25px] max-sm:tracking-[-0.234px] max-sm:mt-[14px]">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="sm:flex sm:mt-[72px] sm:gap-8 max-sm:mt-14 max-sm:flex max-sm:flex-col max-sm:gap-8">
            {cardItemsMock.map(({ imageSrc, title, description, id }) => {
              return (
                <Fragment key={id}>
                  <CardItems
                    imageSrc={imageSrc}
                    title={title}
                    description={description}
                  />
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className="bg-tertiary-background sm:h-[659px] w-full sm:px-[165px] sm:pt-20 max-sm:px-6 max-sm:my-[88px]">
          <div className="sm:w-[1110px] sm:h-[499px]">
            <div className="sm:h-[64px] max-sm:h-[38px]">
              <p className="text-tertiary sm:text-[40px] max-sm:text-[32px] sm:font-light leading-[64px] tracking[-0.714px] max-sm:text-center max-sm:tracking-[-0.571px]">
                Latest Articles
              </p>
            </div>
            <div className="sm:mt-10 max-sm:mt-[31px] sm:flex gap-[30px] bg-[#FFF] max-sm:flex max-sm:flex-col max-sm:gap-6">
              {latestArticles.map((article) => {
                return (
                  <Article key={article.id} article={article} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
