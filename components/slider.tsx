import { Next, Vercel } from "@/public";

export const Slider = () => {
  return (
    <div className="inline-flex h-[10vh] w-full flex-nowrap overflow-hidden border-b-2 border-t-2 border-black">
      <ul className="animate-infinite-scroll flex w-full items-center justify-center py-2 md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        <li>
          <img className="cursor-pointer" src={Next} alt="junky" />
        </li>
        <li>
          <img className="cursor-pointer" src={Vercel} alt="stain" />
        </li>
        <li>
          <img className="cursor-pointer" src={Vercel} alt="mansion" />
        </li>
        <li>
          <img className="cursor-pointer" src={Vercel} alt="ayne" />
        </li>
        <li>
          <img className="cursor-pointer" src={Vercel} alt="kritika" />
        </li>
        <li>
          <img className="cursor-pointer" src={Vercel} alt="bando" />
        </li>
        <li>
          <img className="cursor-pointer" src={Vercel} alt="mustico" />
        </li>
        <li>
          <img className="cursor-pointer" src={Vercel} alt="junky" />
        </li>
        <li>
          <img className="cursor-pointer" src={Vercel} alt="stain" />
        </li>
        <li>
          <img className="cursor-pointer" src={Vercel} alt="mansion" />
        </li>
        <li>
          <img className="cursor-pointer" src={Vercel} alt="ayne" />
        </li>
        <li>
          <img className="cursor-pointer" src={Vercel} alt="kritika" />
        </li>
        <li>
          <img className="cursor-pointer" src={Vercel} alt="bando" />
        </li>
        <li>
          <img className="cursor-pointer" src={Vercel} alt="mustico" />
        </li>
      </ul>
    </div>
  );
};
