import how_it_works from "../help_assets/how_it_works.png";

const HowItWorks = () => {
  return (
    <section id="how_it_works" className="px-[100px] py-[100px]">
      <h2 className="text-[#141414] text-[40px] font-bold text-center mb-[59px]">
        How It Works
      </h2>
      <div className="flex gap-[83px]">
        <div className="flex flex-col items-center text-center">
          <p className="mb-[32px] text-white rounded-full text-[32px] w-[68px] h-[68px] bg-[#120B48] flex justify-center items-center">
            1
          </p>
          <h3 className="mb-[16px] text-[#1B233D] text-[28px] font-semibold">
            Record Screen
          </h3>
          <p className="mb-[19px] text-[#616163] text-[20px]">
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </p>
          <img src={how_it_works} alt="how it works" />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="mb-[32px] text-white rounded-full text-[32px] w-[68px] h-[68px] bg-[#120B48] flex justify-center items-center">
            2
          </p>
          <h3 className="mb-[16px] text-[#1B233D] text-[28px] font-semibold">
            Share Your Recording
          </h3>
          <p className="mb-[19px] text-[#616163] text-[20px]">
            We generate a shareable link for your video. Simply send it to your
            audience via email or copy the link to send via any platform.
          </p>
          <img src={how_it_works} alt="how it works" />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="mb-[32px] text-white rounded-full text-[32px] w-[68px] h-[68px] bg-[#120B48] flex justify-center items-center">
            3
          </p>
          <h3 className="mb-[16px] text-[#1B233D] text-[28px] font-semibold">
            Learn Effortlessly
          </h3>
          <p className="mb-[19px] text-[#616163] text-[20px]">
            Recipients can access your video effortlessly through the provided
            link, with our user-friendly interface suitable for everyone.
          </p>
          <img src={how_it_works} alt="how it works" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
