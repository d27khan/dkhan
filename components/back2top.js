import { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
function BackToTopButton() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`animate-bounce fixed right-4 bottom-4 p-2 rounded-full transition-opacity duration-300 ${
        isHovered ? "opacity-100" : "opacity-0"
      } hover:opacity-100 bg-gray-500 text-white`}
      onClick={handleBackToTop}
    >
      <BsFillArrowUpCircleFill />
    </button>
  );
}

export default BackToTopButton;
