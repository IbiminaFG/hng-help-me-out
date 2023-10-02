import record from "../help_assets/record-circle.svg";
import send from "../help_assets/send.png";
import refresh from "../help_assets/refresh-square.png";
import videoRepo from "../help_assets/Video Repository.svg";

const Features = () => {
  return (
    <section id="features" className="px-[100px] py-[80px]">
      <h2 className="text-[#141414] text-[40px] font-bold text-center">
        Features
      </h2>
      <p className="text-[#616163] text-[20px] text-center mb-[64px]">
        Key Highlights of Our Extension
      </p>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-[42px]">
          <div className="flex gap-[16px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#413C6D] flex justify-center items-center">
              <img src={record} alt="icon for circle" />
            </div>
            <div>
              <h3 className="text-[#1B233D] text-[28px] font-semibold">
                Simple Screen Recording
              </h3>
              <p className="text-[#616163] text-[20px]">
                Effortless screen recording for everyone. Record
                <br /> with ease, no tech expertise required.
              </p>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#413C6D] flex justify-center items-center">
              <img src={send} alt="icon for send" />
            </div>
            <div>
              <h3 className="text-[#1B233D] text-[28px] font-semibold">
                Easy-to-Share URL
              </h3>
              <p className="text-[#616163] text-[20px]">
                Share your recordings instantly with a single link.
                <br /> No attachments, no downloads.
              </p>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#413C6D] flex justify-center items-center">
              <img src={refresh} alt="icon for circle" />
            </div>
            <div>
              <h3 className="text-[#1B233D] text-[28px] font-semibold">
                Revisit Recordings
              </h3>
              <p className="text-[#616163] text-[20px]">
                Access and review your past content effortlessly.
                <br /> Your recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={videoRepo} alt="video repository" />
        </div>
      </div>
    </section>
  );
};

export default Features;
