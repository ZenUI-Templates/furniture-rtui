import { CiShoppingCart } from "react-icons/ci";
import { IoStarOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";
const ExclusiveFurniture = () => {
  const cards = [
    {
      id: 1,
      img: "https://s3-alpha-sig.figma.com/img/9ef9/57c8/174fb6c496ff9595419cb071cbb8e28d?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GSZdUdO4v9PJekGT7gyfq9CQ2VVMOEM0QkbWmgyVOX6TYMZSKxmlUBsMxf3PU8MWDhFvWe3gThjohYRZkNKICJnxp~eaaAf93A0O5rTXSp3KivjtybdWwe4~GvkfhMKmr6odA6v1RH6Sd0-3eOOYH3zecT489vWTt-BHdytJiPo~K~tusGGwA2T~hxDHxQQsQkU5NsWOh1Xoiap5WIkBLWRfUODWj6YZmkC1rF5ZphpHBCaML~WecxH~nUJgJQRvtNU~hBdwt9QEa4eW83l6WOciLfnBzv4yTBHSVBh9PX~p3AnfdOH3CpWHXxFQns~PxNMIRqDYqRegIF6~vlZXFQ__",
      title: "Modern Chair",
      price: "$399",
    },
    {
      id: 2,
      img: "https://s3-alpha-sig.figma.com/img/3e59/c197/58840a49f831779a8dbeed801b32cddd?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XNeBsg0966v1IuocuYxKt6lHS9kmGygwa-eanzM53t0RbEzakZeGnlCVVV0k57Qx602OvE~z5DnvhByORmrWz2MA-Hk0vEYzOHdSGIG7mzySQYqHSO6KMZClqwfNXP2~AiQBiYANJbdrsrmhZDCsW1BV0L-4baiMuQstZ~i-crq2FePKMol9Hm-53YcdjefFvuPu9uUDluof~4~5-6a7zlyJcUiXZ94VQGWT0hk3mXEJch0cNRrLqNxkEBW04w4psxzRX15Ir2hqrnYsEV9-RFIE9jNsKTmjl57FLADlkXfuJSRbqEjILrHUuQv~-yE6mv2mJRcc-9xyelPthWA-rQ__",
      title: "Stol",
      price: "$499",
    },
    {
      id: 3,

      img: "https://s3-alpha-sig.figma.com/img/da94/3a68/bc24b893d8f27c9d1b40eb9184726abe?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=caCy6unKWxQM4lCe3d6EEllLgJAGG8BaKExHQeCz-9AYIZTc8zbXYj5nvG9pGSYXa9P0b7VDE5z1AmN7CiMkeKppZJF9CeuMgiKxsPY859aVE1SmmpjnknbHr8wO7CMteLRkMCFz7furFSpA~JdVvUGhlMM9-fKdIsh~AmzdxQjF8CCEeGurljYCpwK-KPWY8m8PjdwPKEEkoXN3nNjozW70-3PgHAL9NQW7uzzgzfAtWKzXXJXJjXF05PSRsjKs~cu0W9cZwA9zHIKApKWZAveKLgnvvUYnyr79nvTUPUMrASNW5HQgxZNExLwXx1UmU-vWG8Mxqe4dmtSPjN9TIw__",
      title: "Fabric sofa",
      price: "$890",
    },
    {
      id: 4,

      img: "https://s3-alpha-sig.figma.com/img/3e59/c197/58840a49f831779a8dbeed801b32cddd?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XNeBsg0966v1IuocuYxKt6lHS9kmGygwa-eanzM53t0RbEzakZeGnlCVVV0k57Qx602OvE~z5DnvhByORmrWz2MA-Hk0vEYzOHdSGIG7mzySQYqHSO6KMZClqwfNXP2~AiQBiYANJbdrsrmhZDCsW1BV0L-4baiMuQstZ~i-crq2FePKMol9Hm-53YcdjefFvuPu9uUDluof~4~5-6a7zlyJcUiXZ94VQGWT0hk3mXEJch0cNRrLqNxkEBW04w4psxzRX15Ir2hqrnYsEV9-RFIE9jNsKTmjl57FLADlkXfuJSRbqEjILrHUuQv~-yE6mv2mJRcc-9xyelPthWA-rQ__",
      title: "Chair",
      price: "#670",
    },
  ];
  const [sliderSettings, setSliderSettings] = useState(getSliderSettings());

  useEffect(() => {
    function handleResize() {
      setSliderSettings(getSliderSettings());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function getSliderSettings() {
    return {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      slidesToShow: window.innerWidth < 768 ? 1 : 3,
      slidesToScroll: 1,
    };
  }

  return (
    <div className="bg-[#04021B] my-5 ">
      <div className="container  mx-auto px-10">
        <h1 className="text-white text-2xl py-4">Exclusive Furniture</h1>
      
          <Slider {...sliderSettings} className="mx-5 gap-2">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col relative  items-center  justify-center h-96  rounded-tr-3xl    hover:text-white  "
              >
                  
                  <img src={card.img} className="h-full w-full md:w-11/12 bg-cover rounded-tr-3xl border " alt="" />
                  <div className="text-white absolute flex flex-col justify-end bottom-0  w-full md:w-11/12 rounded-tr-3xl h-1/4 border-2 bg-gray-500 backdrop-blur-sm px-3">
                  <div className="flex flex-row justify-between py-2">
                    <p className="text-xl text-start ">{card.title}</p>
                    <IoStarOutline />
                  </div>
                  <div className="flex flex-row justify-between ">
                    <p className="text-l">{card.price}</p>
                    <button className="flex flex-row justify-around bg-[#C0BA26] rounded-lg px-2 py-1">
                      Add to cart <CiShoppingCart className="text-2xl" />
                    </button>
                  </div>
                
                  </div>
               
              </div>
            ))}
          </Slider>
        
      </div>
    </div>
  );
};

export default ExclusiveFurniture;
