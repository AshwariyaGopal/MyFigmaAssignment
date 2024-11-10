import Link from "next/link";


export default function Navbar() {
  return (
    <div className="rgba-[rgba(37, 43, 66, 1)] w-[1322px] h-[91px] px-4 fixed top-0 left-59px z-50">
      <nav className="flex items-center justify-between gap-[21px] h-full">

        {/* Brand Name - Adjusted for Alignment to the Right */}
        <div className="w-[187px] h-[58px] flex items-center ml-[100px]">
          <h3 className="font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] text-white opacity-100">
            BrandName
          </h3>
        </div>

        {/* Navbar Links - Adjusted to Align to the Left */}
        <ul className="flex gap-[21px] items-center mr-auto w-[275px] h-[24px] top-[17px] ">
          <li>
            <Link href="/" className="font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-white opacity-100 p-2 block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/product" className="font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-white opacity-100 p-2 block">
              Product
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-white opacity-100 p-2 block">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-white opacity-100 p-2 block">
              Contact
            </Link>
          </li>
        </ul>

        {/* Login and Join Us Buttons */}
        <div className="flex items-center gap-[45px]">
  {/* Login Button */}
  <button className="w-[110px] h-[52px] text-[14px] font-bold leading-[22px] tracking-[0.2px] text-white  flex items-center justify-center">
    Login
  </button>
 {/* join us button*/}
  <button className="w-[110px] h-[52px] bg-[#23A6F0] text-white py-[25px] px-[15] rounded-[5px] flex items-center justify-center mr-[100px]">
    JOIN US
  </button>
</div>

      </nav>
    </div>
  );
}



