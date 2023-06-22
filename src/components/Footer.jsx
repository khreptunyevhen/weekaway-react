import { BsChatSquareDots } from "react-icons/bs";

function Footer() {
  return (
    <footer className="max-w-[1140px] w-full py-8 mx-auto border-t-4">
      <div className="flex justify-center">
        <BsChatSquareDots
          className="text-[var(--primary-dark)] mr-2"
          size={30}
        />
        <h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
      </div>
    </footer>
  );
}

export default Footer;
