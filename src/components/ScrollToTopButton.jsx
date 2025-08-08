import React, { useState, useEffect } from "react";
// import { ArrowUp } from "lucide-react"; // optional: you can use any icon

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all"
        aria-label="Scroll to top"
      >
      <span className="text-xl font-bold">↑</span>
        {/* <ArrowUp className="w-5 h-5" /> */}
      </button>
    )
  );
}
