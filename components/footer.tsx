const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-6 mt-auto">
      <div className="px-4 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2 md:gap-4">
          <span>© Copyright 2025</span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span>Axios</span>
        </div>
        <span className="hidden md:inline text-gray-300">|</span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer; 