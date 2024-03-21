const Subscribe = () => {
  return (
    <div className="container mx-auto px-2">
      <div className="flex flex-col justify-center items-center py-10 my-5 px-4 text-white gap-4 border-2">
        <h1 className="text-3xl font-semibold">Subscribe our newsletter</h1>
        <h2 className="text-red-700 font-bold text-2xl">Get 10% off</h2>
        <h3 className="text-wrap text-center">
          We’ll email you a voucher worth 10% off your first order. By
          subscribing you agree <br /> to our Terms & Conditions and Privacy &
          Cookies Policy
        </h3>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Enter Email Address"
            className="bg-black border px-2 w-9/12"
          />
          <button className="flex flex-row justify-around bg-[#C0BA26] text-black text-xl px-5 py-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
