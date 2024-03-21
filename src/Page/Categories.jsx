import { FaAward, FaBed, FaGetPocket, FaHeadset, FaRestroom, FaTruck } from "react-icons/fa";

const Categories = () => {
  const cards = [
    {
      id: 1,
      icon: <FaAward />,
      title: "High Quality",
    },
    {
      id: 2,
      icon: <FaGetPocket />,
      title: "Warrany Protection",
    },
    {
      id: 3,
      icon: <FaTruck />,
      title: "Free Shipping",
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: "24/7 Support",
    },
    {
      id: 5,
      icon: <FaRestroom />,
      title: "Living Room",
    },
    {
      id: 6,
      icon: <FaBed />,
      title: "BedRoom",
    },
  ];
  return (
    <div className="bg-[#04021B] my-5">
      <div className=" container mx-auto">
       
        <div className=" grid grid-cols-1 md:grid-cols-12  gap-5 py-5 px-4">
          <div className="grid md:col-span-6">
            <img
              src="https://s3-alpha-sig.figma.com/img/ec94/044a/7b34c36c9a1944b6579615d721f31e67?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M1Zw5Gr09-WXP4702ckX05u3BrKVPocoyLfbkjM4a5uE0moJIf-Bz0ZmMpX0n1rglYnxs6xFfCeRp1gWNq7X17~vsJgw16cr1~tTGO5Lydygrewv94vyuAxSXM2Oy1Z-Em6TexKM65~reGIlEI0~bhDFrOy3nxCx2Au30DTEcNIR24hnBCdZBnbjq9zYI35lXcC-GBBHZ6~1mu97-A7uFL90BAhEiq3n8q~WO~~tibH~1W0aUG8~jEXZYpFqnasznjybMPD50ZoPY8L-SMTQ2ftvkqiL~ouJGP55ChbuWsioYl-40OROpAyAGpkPMKW-MANHCMMyjNcfmBU2oeNPGQ__"
              alt=""
              className="h-full rounded-xl"
            />
          </div>
          <div className="grid md:col-span-6 gap-5  justify-center items-center">
            <div
              id="About"
              className="  mx-auto grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="flex flex-col items-center justify-center rounded-xl border-2 py-3 hover:bg-sky-500 hover:text-white gap-5"
                >
                  <p className=" text-3xl    text-white  rounded-xl ">
                    {card.icon}
                  </p>

                  <p className="text-2xl text-center  text-white font-semibold ">
                    {card.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
