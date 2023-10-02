import logo from "../help_assets/help_logo.svg";
import profile from "../help_assets/profile-circle.png";
import arrowDown from "../help_assets/arrow-down.png";
import search from "../help_assets/search-normal.png";
import videoFrame from "../help_assets/video-frame.png";
import copy from "../help_assets/copy.svg";
import facebook from "../help_assets/facebook.svg";
import telegram from "../help_assets/telegram.svg";
import whatsapp from "../help_assets/whatsapp.svg";

const VideoDetail = () => {
  return (
    <div>
      <header className="flex px-[100px] justify-between py-[20px] my-10 items-center">
        <a href="http://" className="flex gap-2 items-center">
          <img src={logo} alt="Help me out logo" />
          <p className="text-[#100A42] font-bold">Help me Out</p>
        </a>
        <ul className="flex px-0">
          <li className="flex gap-2 items-center">
            <img src={profile} alt="" />
            <span>John Mark</span>
            <img src={arrowDown} alt="" />
          </li>
        </ul>
      </header>
      <div className="px-[100px] flex gap-2">
        <a href="http://">Home /</a>
        <a href="http://">Recent Videos /</a>
        <a href="http://">How To Create A Facebook Ad Listing </a>
      </div>
      <div className="px-[100px] mt-[32px]">
        <img className="w-full" src={videoFrame} alt="" />
      </div>
      <div className="flex px-[100px] mt-10 items-center gap-[90px]">
        <div className="p-[12px] bg-[#E7E7ED] rounded-[16px] flex justify-between w-full">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter email of receiver"
            className="bg-transparent outline-none"
          />
          <button className="bg-[#605C84] px-[18px] py-[10px] rounded-[8px] text-white">
            Send
          </button>
        </div>
        <div className="flex w-full justify-between items-center border-solid rounded-[12px] border-2 p-[12px] border-[#929292] bg-[#FAFAFA]">
          <span className="text-[16px]">random whatever</span>
          <button className="border-[#120B48] border-solid border-2 px-[18px] py-[10px] rounded-[8px] flex gap-[8px]">
            <img src={copy} alt="copy icon" />
            <span>copy</span>
          </button>
        </div>
      </div>
      <div className="px-[100px] mt-10">
        <p className="text-[16px] text-[#08051E] font-semibold">
          Share your Video
        </p>
        <div className="flex gap-4 mt-3">
          <button className="flex gap-2 py-[8px] px-[12px] border-solid border-2 border-[#0A0628] rounded-[6px]">
            <img src={facebook} alt="facebook icon" />
            <span>Facebook</span>
          </button>
          <button className="flex gap-2 py-[8px] px-[12px] border-solid border-2 border-[#0A0628] rounded-[6px]">
            <img src={whatsapp} alt="whatsapp icon" />
            <span>Whatsapp</span>
          </button>
          <button className="flex gap-2 py-[8px] px-[12px] border-solid border-2 border-[#0A0628] rounded-[6px]">
            <img src={telegram} alt="telegram icon" />
            <span>Telegram</span>
          </button>
        </div>
      </div>
      <div className="px-[100px] mt-10">
        <div className="mt-[80px]">
          <h2 className="text-[24px] font-semibold">Transcript</h2>
        </div>
        <div className="mt-[40px] h-[250px] overflow-y-scroll flex flex-col gap-4">
          <div className="flex gap-10">
            <span className="text-[#777777]">0.01</span>
            <p className="font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              inventore sint iste fugit debitis animi?
            </p>
          </div>
          <div className="flex gap-10">
            <span className="text-[#777777]">0.01</span>
            <p className="font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              inventore sint iste fugit debitis animi?
            </p>
          </div>
          <div className="flex gap-10">
            <span className="text-[#777777]">0.01</span>
            <p className="font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              inventore sint iste fugit debitis animi?
            </p>
          </div>
          <div className="flex gap-10">
            <span className="text-[#777777]">0.01</span>
            <p className="font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              inventore sint iste fugit debitis animi?
            </p>
          </div>
          <div className="flex gap-10">
            <span className="text-[#777777]">0.01</span>
            <p className="font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              inventore sint iste fugit debitis animi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
