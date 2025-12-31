
import { GoDotFill } from "react-icons/go";
import Badge from "../components/Badge";

const Header = () => {
  return (
   <>
      <div className="flex gap-3 mb-6 flex-wrap">
      <Badge text="LIVE BUILD IN PROGRESS" color="green" icon={<GoDotFill className="animate-pulse text-sm" />} />

      <Badge text="OPTIMIZED FOR GAMING CAFÉS"  />
    </div>
   </>
  );
};

export default Header;
