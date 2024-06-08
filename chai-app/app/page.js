import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] ">
        <div className="font-bold flex gap-2 text-5xl justify-center items-center">
          Buy Me a Chai{" "}
          <span>
            <Image src="/tea.gif" alt="A cup of tea" width={44} height={44} />
          </span>
        </div>

        <p>
          A crowfunding platform For creators.Get Funded By Your Fans And
          Followers. Start Now!
        </p>
        <div>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
            font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
            font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className="text-3xl font-bold text-center mb-14">
          your Fans Can buy You a chai{" "}
        </h2>
        <div className="flex gap-5 justify-around ">
          <div className="item space-y-2  flex flex-col items-center justify-center">
            <Image
              className="bg-slate-400 rounded-full p-2"
              src="/study.gif"
              width={99}
              height={99}
              alt=""
            />
            <p className="font-bold">Fans want to help </p>
            <p className=" text-center">
              Your fans are avilable for you to help you{" "}
            </p>
          </div>

          <div className="item space-y-2  flex flex-col items-center justify-center">
            <Image
              className="bg-slate-400 rounded-full p-2"
              src="/study.gif"
              width={99}
              height={99}
              alt=""
            />

            <p className="font-bold">Fans want to help </p>
            <p className=" text-center">
              Your fans are avilable for you to help you{" "}
            </p>
          </div>

          <div className="item space-y-2  flex flex-col items-center justify-center">
            <Image
              className="bg-slate-400 rounded-full p-2"
              src="/study.gif"
              width={99}
              height={99}
              alt=""
            />

            <p className="font-bold">Fans want to help </p>
            <p className=" text-center">
              Your fans are avilable for you to help you{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">
          Learn More about us{" "}
        </h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/eBnNuC73QS8?si=_PKgj9aqKVMztKvv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  );
}
