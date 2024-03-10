import Article from "@/components/Article";
import CardItems from "@/components/CardItems";
import { Button } from "@/components/ui/button";
import { cardItemsMock, latestArticles } from "@/mock-data";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="sm:w-[1440px] mx-auto">
        <div className="flex bg-tertiary-background sm:h-[736px] w-full max-sm:flex-col-reverse">
          <div className="sm:h-[316px] sm:ml-[165px] sm:mt-44 max-sm:flex max-sm:flex-col max-sm:items-center mt-[41px] max-sm:h-[261px] max-sm:justify-between">
            <div className="sm:w-[447px] min-w-[327px] max-sm:mx-6">
              <div className="max-sm:h-[94px]">
                <p className="text-tertiary text-[56px] leading-[64px] font-light tracking-[-1px] sm:mb-6 max-sm:text-center max-sm:text-[40px] max-sm:leading-none max-sm:tracking-[-0.714px]">
                  Next generation digital banking
                </p>
              </div>
              <div className="text-quaternary tracking-[-1px] leading-7 text-lg max-sm:text-center max-sm:text-[15px] max-sm:leading-[25px] max-sm:tracking-[-0.234px]">
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </div>
            </div>
            <Button className="h-11 min-w-[163px] sm:mt-9">
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
                  className="object-contain sm:max-w-none max-sm:absolute max-sm:z-10 max-sm:top-[0] md:hidden"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="h-[676px] bg-quaternary-background pl-[165px] pt-[96px]">
          <div className="w-[635px] h-[136px] flex justify-between flex-col">
            <p className="text-tertiary text-[40px] font-light">
              Why choose Easybank?
            </p>
            <p className="text-quaternary text-lg font-normal tracking-[-0.281px]">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="flex mt-[72px] gap-8">
            {cardItemsMock.map(({ imageSrc, title, description, id }) => {
              return (
                <div key={id}>
                  <CardItems
                    imageSrc={imageSrc}
                    title={title}
                    description={description}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-tertiary-background h-[659px] w-full px-[165px] pt-20">
          <div className="w-[1110px] h-[499px]">
            <div className="h-[64px]">
              <p className="text-tertiary text-[40px] font-light leading-[64px] tracking[-0.714px]">
                Latest Articles
              </p>
            </div>
            <div className="mt-10 flex gap-[30px] bg-[#FFF]">
              {latestArticles.map((article) => {
                return (
                  <Article key={article.id} article={article} />
                );
              })}
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
