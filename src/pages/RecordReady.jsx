import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import edit from "../help_assets/edit.svg";
import copy from "../help_assets/copy.svg";
import facebook from "../help_assets/facebook.svg";
import telegram from "../help_assets/telegram.svg";
import whatsapp from "../help_assets/whatsapp.svg";
import testimonial from "../help_assets/testimonial.mp4";

const RecordReady = () => {
  return (
    <div>
      <Header />
      <section className="flex px-[100px] py-[50px]">
        <div className="flex flex-col gap-[40px] pr-[72px] border-r-2 border-gray-500 min-w-[500px]">
          <h1 className="text-[#141414] text-[45px] font-bold">
            Your video is ready!
          </h1>
          <div>
            <p>Name</p>
            <div className="flex gap-2">
              <span className="text-[#413C6D] text-[24px] font-semibold">
                random name
              </span>
              <img
                src={edit}
                alt="edit-icon"
                className="w-[32px] cursor-pointer"
              />
            </div>
          </div>
          <div className="p-[12px] bg-[#E7E7ED] rounded-[16px] flex justify-between">
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
          <div>
            <p className="text-[20px] font-semibold text-[#141414]">
              Video Url
            </p>
            <div className="flex justify-between items-center border-solid rounded-[12px] border-2 p-[12px] border-[#929292] bg-[#FAFAFA]">
              <span className="text-[16px]">random whatever</span>
              <button className="border-[#120B48] border-solid border-2 px-[18px] py-[10px] rounded-[8px] flex gap-[8px]">
                <img src={copy} alt="copy icon" />
                <span>copy</span>
              </button>
            </div>
          </div>
          <div>
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
        </div>
        <div className="pl-[40px]">
          <div>
            <video className="w-full" src={testimonial} controls></video>
          </div>
          <div className="mt-[80px]">
            <h2 className="text-[24px] font-semibold">Transcript</h2>
          </div>
          <div className="mt-[40px] h-[250px] overflow-y-scroll flex flex-col gap-4">
            <div className="flex gap-3">
              <span className="text-[#777777]">0.01</span>
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                inventore sint iste fugit debitis animi?
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#777777]">0.01</span>
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                inventore sint iste fugit debitis animi?
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#777777]">0.01</span>
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                inventore sint iste fugit debitis animi?
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#777777]">0.01</span>
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                inventore sint iste fugit debitis animi?
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#777777]">0.01</span>
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                inventore sint iste fugit debitis animi?
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RecordReady;
