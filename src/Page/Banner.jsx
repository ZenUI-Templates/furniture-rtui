

const Banner = () => {
    return (
        <div
      style={{
        backgroundImage: `url(${"https://s3-alpha-sig.figma.com/img/6480/7b4d/1bac71c26615649f93104cc242d13f7d?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8HPnfXICYC0Q0ggjXoAeFBn00UdkcStYPOP-f67tOUKAaybGl4RHvDZb83Oqbq507qjf1pCn~LRMA2QDWU8zuN8Y62cZ0B-BoqdhC5vfU~O9fQj4VSJF11Uy3bXBNTn7YwS898Dzs8X1rFlQ~sZcBlfFLJIrjknlm78oR4nqZw7k8X6xeY6Nlh3HqXrGyVJH7~kvBnPhtHGiN~~jAkJEkxJRoAppJwEanmkSyp--bJWvqJqMD51j2Tf5xf2BE6RQ1vF0U~3t6vZTyP3v9jbyyLoBdAeHsPAsVkULL2oqTdFOdjSBxPumYGHqD-NVsu3WjXRr~bp5Pm5MVM8USAWGQ__"})`,
        backgroundPosition: "left",
        backgroundAttachment: 'fixed',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
        height: "80vh",
      }}
      className=" mx-auto  grid grid-cols-12  h-full  w-full items-start "
    >
      <div className="grid col-span-6 lg:col-span-4  h-full">
        <div className=" flex flex-col justify-center items-start text-white bg-[#04021B] opacity-50 backdrop-blur-sm px-10 h-full ">
          <h1 className="text-3xl font-bold ">
            Make Your Home <br /> with beautiful <br />Furniture
          </h1>
          <p className="py-2 hidden md:flex">
          Your Home Should Tell  The Story of Who you are & be a collection of what you love.Your Home Should Tell  The Story of Who you are & be a collection of what you love.
          </p>
          <button className="bg-[#C0BA26] my-5 text-white py-3 px-5 rounded-lg font-bold hover:bg-blue-700 hover:text-white">
            Explore More{" "}
          </button>
          
        </div>
      </div>
      {/* <div className="grid col-span-7 relative">
      <div 
           style={
            {backgroundImage: `url(${"https://i.ibb.co/C5mfdv1/Vector-3.png"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "left",
           
             }  } className=" h-44 w-72 bg-cover absolute left-11 top-40">
            <h1 className="font-[Fraktur] uppercase flex justify-center text-white items-center text-5xl">DREAM Furniture</h1>
      </div>
      </div> */}
    </div>
    );
};

export default Banner;