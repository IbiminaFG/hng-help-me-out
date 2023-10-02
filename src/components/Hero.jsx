import "../App.css";
import arrow from "../help_assets/arrow-right.svg";
import woman_blue from "../help_assets/woman_blue.png";
import woman_orange from "../help_assets/woman_orange.png";
import father_son from "../help_assets/father_son.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="px-[100px] py-[162px] flex items-center justify-between">
      <div className="max-w-[548px]">
        <h1 className="text-[#141414] text-[64px] font-bold show_h1 mb-5">
          Show Them
          <br />
          Don’t Just Tell
        </h1>
        <p className="text-[20px] mb-5">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <Link to="/installer">
          <button
            type="button"
            className="bg-[#120B48] flex gap-2 text-white items-center rounded-[8px] p-[22px]"
          >
            Install HelpMeOut <img src={arrow} alt="right arrow" />
          </button>
        </Link>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <img src={woman_blue} alt="a lady in blue" />
          <img src={father_son} alt="father and son" />
        </div>
        <img
          src={woman_orange}
          alt="a lady in orange"
          className="pic_grid_span"
        />
      </div>
    </section>
  );
};

export default Hero;
