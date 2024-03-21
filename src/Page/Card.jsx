

import { FaAward, FaGetPocket, FaHeadset, FaTruck } from "react-icons/fa";


const Card = () => {
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
  ];
  return (
    <div className="bg-[#04021B] py-10 text-white">
     
      <div
        id="About"
        className="container  mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 px-3"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center justify-center  hover:bg-sky-500 hover:text-white gap-5"
          >
            <div>
              <p className=" text-3xl    text-white flex justify-center rounded-xl p-3 ">
                {card.icon}
              </p>
            
              <p className="text-2xl text-center font-semibold mx-auto">{card.title}</p>
             
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
