import { CiShoppingCart } from "react-icons/ci";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";

const BestOffer = () => {
  return (
    <div className="container mx-auto text-white px-2 my-5">
      <p className="flex justify-end text-3xl py-2">Best Offer</p>
      <div className="grid grid-cols-1 md:grid-cols-12 py-10 gap-10 border-2 px-10">
        <div className="grid grid-rows-12 col-span-6 justify-center items-center">
          <div className="grid row-span-10 justify-center items-center">
            <img
              src="https://i.ibb.co/nwTnrrP/design-08649f96-81d6-4554-90a8-ce46abbd18a4-2.png"
              alt=""
              className="bg-white bg-cover rounded-full"
            />
          </div>
          <div className="grid row-span-2">
            <img src="https://i.ibb.co/vYywpxb/detailofpic.png" alt="" />
          </div>
        </div>
        <div className="grid col-span-6  text-white mx-auto">
          <div className="flex flex-col  justify-center gap-10">
          <h1 className="text-2xl font-bold">Prof Chair</h1>
          <p className="text-2xl font-bold">$180</p>
          <p>
            This side chair adds a touch of elegance and mid-century modern
            charm. Its curved back frame a wide seat, while no arms. Naturally
            strong frame with supportive foam cushioning provide comfort and
            support.
          </p>
          <div className="flex flex-row gap-3"  >
            {" "}
            <p>
              Color:</p>
               <FaStar  className="text-2xl"/>
              <FaStar className="text-2xl"/>
              <FaStar className="text-2xl"/>
              <FaStar className="text-2xl"/>
              <FaStar className="text-2xl"/>
            
          </div>

          <div className="flex flex-row justify-between">
            <button className="border px-4 py-2 flex flex-row gap-4 ">
                <FaMinus className="border  my-auto"/>
               <p className="p-2"> 1</p>
                <FaPlus className="border my-auto"/>

            </button>
            <button className="flex flex-row justify-around bg-[#C0BA26] rounded-lg p-4">
              Add to cart <CiShoppingCart className="text-2xl" />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOffer;
