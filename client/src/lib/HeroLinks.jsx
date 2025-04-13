
export const Tagline = ({ text1, text2, fontSizeClass }) => (
    <h1 className={`text-3xl sm:text-4xl md:text-7xl font-bold leading-tight mb-4 ${fontSizeClass}`}>
      <span className="block">{text1}</span>
      <span className="block font-bold">{text2}</span>
    </h1>
  );
  
  export const ParagraphTagline = ({ paragraph1 }) => (
    <p className="max-w-xl mb-6 text-base sm:text-lg text-white/90">
      {paragraph1}
    </p>
  );
  
  export const TaglineButton = ({ text, fontSizeClass }) => (
    <button
      className={`bg-[#B8336A] hover:bg-[#b8336ad8] text-white font-medium py-2 
        px-6 rounded-xl transition duration-300 ${fontSizeClass}`}
    >
      <span className="block">{text}</span>
    </button>
  );
  
  export const TaglineButton2 = ({ text, fontSizeClass }) => (
    <button
      className={`bg-white text-black font-medium py-2 px-6 rounded-xl 
        transition duration-300 hover:bg-gray-200 ${fontSizeClass}`}
    >
      <span className="block">{text}</span>
    </button>
  );
  