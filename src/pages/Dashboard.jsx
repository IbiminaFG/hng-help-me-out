import logo from "../help_assets/help_logo.svg";
import profile from "../help_assets/profile-circle.png";
import arrowDown from "../help_assets/arrow-down.png";
import search from "../help_assets/search-normal.png";
import videoFrame from "../help_assets/video-frame.png";

const Dashboard = () => {
  return (
    <div className="">
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
      <div className="flex px-[100px] pb-[43px] justify-between border-b-2 border-gray-400 border-solid">
        <div>
          <h1 className="text-[32px] font-bold">Hello, John Mark</h1>
          <p className="text-[18px] text-[#5a5959b2]">
            Here are your recorded videos
          </p>
        </div>
        <div className="bg-[#E7E7ED] px-6 py-2 rounded-3xl flex gap-3 items-center w-[400px] ">
          <img src={search} alt="" />
          <input
            className="w-full bg-transparent outline-none"
            type="text"
            name=""
            id=""
            placeholder="Search for a particular video"
          />
        </div>
      </div>
      <section className="px-[100px] mt-6">
        <h2 className="text-[18px] font-medium">Recent files</h2>
        <div className="grid grid-cols-2 gap-9 mt-5">
          <div className="p-4 border-2 border-solid border-gray-400 rounded-[24px]">
            <div>
              <img src={videoFrame} alt="" />
            </div>
            <h3 className="text-[20px] font-medium mt-4">
              How to create Facebook Ad listing
            </h3>
            <h4 className="text-[#B6B3C6]">SEPTEMBER 23, 2023</h4>
          </div>
          <div className="p-4 border-2 border-solid border-gray-400 rounded-[24px]">
            <div>
              <img src={videoFrame} alt="" />
            </div>
            <h3 className="text-[20px] font-medium mt-4">
              How to create Facebook Ad listing
            </h3>
            <h4 className="text-[#B6B3C6]">SEPTEMBER 23, 2023</h4>
          </div>
          <div className="p-4 border-2 border-solid border-gray-400 rounded-[24px]">
            <div>
              <img src={videoFrame} alt="" />
            </div>
            <h3 className="text-[20px] font-medium mt-4">
              How to create Facebook Ad listing
            </h3>
            <h4 className="text-[#B6B3C6]">SEPTEMBER 23, 2023</h4>
          </div>
          <div className="p-4 border-2 border-solid border-gray-400 rounded-[24px]">
            <div>
              <img src={videoFrame} alt="" />
            </div>
            <h3 className="text-[20px] font-medium mt-4">
              How to create Facebook Ad listing
            </h3>
            <h4 className="text-[#B6B3C6]">SEPTEMBER 23, 2023</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
