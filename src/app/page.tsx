import Article from "@/components/Article";
import CardItems from "@/components/CardItems";
import { Button } from "@/components/ui/button";
import { cardItemsMock, latestArticles } from "@/mock-data";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex bg-tertiary-background h-[736px] w-full">
          <div className="ml-[165px] mt-44">
            <div className="w-[447px] h-[316px]">
              <p className="text-tertiary text-[56px] leading-[64px] font-light tracking-[-1px] mb-6">
                Next generation digital banking
              </p>
              <div className="text-quaternary tracking-[-1px] leading-7 text-lg">
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </div>
            </div>
            <Button className="h-11 min-w-[163px] mt-9">Request Invite</Button>
          </div>
          <div className="w-full">
            <div className="relative w-full h-full overflow-x-clip">
              <Image
                src="/images/bg-intro-desktop.svg"
                alt="background image"
                priority={true}
                width={1340}
                height={1340}
                className="object-contain max-w-none absolute top-[-270px]"
              />
              <div className="w-full absolute top-[-140px] right-[-140px]">
                <Image
                  src="/images/image-mockups.png"
                  alt="mobile images"
                  priority={true}
                  width={830}
                  height={830}
                  className="object-contain max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[676px] bg-quaternary-background pl-[165px] pt-[96px]">
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
        <div className="bg-tertiary-background h-[659px] w-full flex justify-center">
          <div className="w-[1110px] h-[499px] mt-20">
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
        </div>
      </div>
    </main>
  );
}
