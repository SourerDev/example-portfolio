//components
import H_Title from "../../components/headers/H_Title";

import { icons } from "../../assets";
import { pages } from "../../information/english";

export default function About({}) {
  const { ABOUTME} = pages;
  return (
    <div className="bg-main text-textOne min-h-screen px-6 sm:min-h-[600px]" id="about">
      <H_Title title={ABOUTME.title} sub={ABOUTME.sub}/>
      <div className="flex flex-col-reverse gap-6 min-h-[60vh] md:flex-row md:px-[50px] md:gap-12">
        <section className="flex-1 flex flex-col items-center justify-center gap-8">
          <p className="text-xl text-justify">{ABOUTME.descrip}</p>
          <a
            href={""}
            download="Cv_Yhonier_Alegria"
            className=" bg-txSecond w-[210px] h-[60px] flex items-center justify-around p-2 rounded-lg hover:bg-hvSecond"
          >
            <span className="pl-2 text-lg text-white font-bold whitespace-nowrap">
              Download CV
            </span>
            <icons.Download fill="#fff" />
          </a>
        </section>
        <picture className="grid place-content-center">
          <img className="max-w-[300px] md:max-w-[500px] rounded" src={ABOUTME.img} width={400} height={400}/>
        </picture>
      </div>
    </div>
  );
}
