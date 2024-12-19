import React from "react";

function Banner() {
  return (
    <div className="w-full h-[25rem] relative">
      <img
        className="object-cover w-full h-full opacity-50"
        src="https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-with-digital-circuit-lines-background_1017-33592.jpg?t=st=1734546255~exp=1734549855~hmac=482339a11b24db47601e1fcde364f61c76fbdf3b19c54666e73978086844e06b&w=900"
      />

      <div className="absolute top-20 left-0 right-0 mx-auto w-[20rem]">
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-white text-[50px]">
            Crypto Tacker
          </div>
          <div className="text-white font-semibold text-[17px] text-center">
            get all infi regarding crypto currancies..
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
