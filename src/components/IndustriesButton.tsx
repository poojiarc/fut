import { Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IndustriesButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("industries-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-secondary text-secondary font-semibold text-sm hover:bg-secondary hover:text-secondary-foreground transition-colors"
    >
      <Factory className="h-4 w-4" />
      Industries
    </button>
  );
};

export default IndustriesButton;
