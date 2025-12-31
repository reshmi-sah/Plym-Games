import Header from "../sections/Header";
import HeroContent from "../sections/HeroContent";
import DashboardPanel from "../sections/DashboardPanel";

const Home = () => {
  return (
    <div className="max-w-7xl w-full mx-auto p-4 md:p-10 text-white">
      <div className="bg-gradient-to-br from-[#23133A] via-[#281336] to-[#280F24] 
                      backdrop-blur-xl rounded-3xl shadow-2xl 
                      grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 p-6 md:p-10 place-items-center">

        <div className="flex flex-col ">
          <Header />
          <HeroContent />
        </div>

<div className="flex flex-col md:scale-[0.95] md:origin-top">
  <DashboardPanel />
</div>
      </div>
    </div>
  );
};

export default Home;
