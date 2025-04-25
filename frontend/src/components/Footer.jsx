import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#3f0808] text-white">
      <div className="flex flex-col items-center">
      <div className="w-[80%] gap-12 flex px-4 py-8 ">
        <div className="h-60 w-60">
            <h2 className="text-[#ad8815] font-semibold mb-6">HELP CENTER</h2>
            <p className="mb-4 font-semibold">Contact Us</p>
            <p className="mb-4 font-semibold">Founder</p>
            <p className="mb-4 font-semibold">Admin</p>
        </div>
        <div  className="h-60 w-60">
            <h2 className="text-[#ad8815] font-semibold mb-6">LEAGLE</h2>
            <p className="mb-4 font-semibold">Privacy Policy</p>
            <p className="mb-4 font-semibold">Terms of Service</p>
            <p className="mb-4 font-semibold">Return & Refund</p>
            <p className="mb-4 font-semibold">Shipping Policy</p>
        </div>
        </div>

        <div className="py-6 px-4 bg-[#ad8815] w-full min-lg:w-[80%] rounded-lg flex justify-between">
                <p className="text-[#3f0808] font-bold">&copy;2024 David-Prashna. All Rights Reserved. </p>
                <p className="font-bold text-2xl">f</p>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;
