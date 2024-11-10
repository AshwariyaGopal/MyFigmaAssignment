import React from "react";


export default function MyHome() {
    return (
        
        <div className="bg-blue-950 min-h-screen flex flex-col items-center pt-[80px] pb-[80px] gap-[80px] ">
        

            {/* Main Container */}
            <div className="flex flex-col items-center w-[1046px] h-[1028px] pt-[40px] pb-[40px] gap-[40px]">
                
                {/* Row */}
                <div className="flex flex-col items-center w-[701px] h-[496px]">
                    
                    {/* Main Content */}
                    <div className="flex flex-col items-center py-[40px] gap-[40px] w-[699px] h-[496px]">
                        
                        {/* Header Text */}
                        <h5 className="text-[#23A6F0] mt-[40px] mb-[40px] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] w-[77px] h-[24px] text-center">
                            Welcome
                        </h5>

                        {/* Headline */}
                        <h1 className="text-white font-montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px] text-center w-[542px] h-[160px]">
                            Selling on the internet like a pro
                        </h1>

                        {/* Sub-headline */}
                        <h4 className="text-white font-montserrat text-[20px] font-normal leading-[30px] tracking-[0.2px] text-center w-[536px] h-[60px]">
                        We know how large objects will act, but things on a small scale just do not act that way.
                        </h4>

                        {/* CTA Buttons */}
                        <div className="flex gap-[10px] w-[365px] h-[52px] ">
                            {/* Primary CTA Button */}
                            <button className="bg-[#23A6F0] text-white font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] py-[15px] px-[40px] rounded-[5px] w-[193px] h-[52px]">
                            Get Quote Now
                            </button>

                            {/* Secondary CTA Button */}
                            <button className="border border-[#23A6F0] text-[#23A6F0] font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] py-[15px] px-[40px] rounded-[5px] w-[162px] h-[52px]">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="flex flex-row items-center gap-[30px] w-[1046px] h-[292px] mt-28 ">
                    
                    {/* Feature Card 1 */}
                    <div className="flex flex-col items-start bg-white shadow-md p-[35px_40px] gap-[20px] w-[328px] h-[292px]">
                        <div className="flex flex-col items-center bg-[#FFDCD1] w-[70px] h-[76px] rounded-[10px] justify-center py-[19px] px-[22px]">
                            {/* No icon here, just the styled box */}
                        </div>
                        <h3 className="text-[#252B42] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">
                        training Courses
                        </h3>
                        <div className="bg-[#E74040] w-[50px] h-[2px]"></div>
                        <p className="text-[#737373] font-montserrat text-[14px] leading-[20px] tracking-[0.2px]">
                        The gradual accumulation of information about atomic and small-scale behaviour...
                        </p>
                    </div>

                    {/* Feature Card 2 */}
                    <div className="flex flex-col items-start bg-white shadow-md p-[35px_40px] gap-[20px] w-[328px] h-[292px]">
                        <div className="flex flex-col items-center bg-[#B9EAA8] w-[70px] h-[76px] rounded-[10px] justify-center">
                            {/* No icon here, just the styled box */}
                        </div>
                        <h3 className="text-[#252B42] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">
                        2,769 online courses
                        </h3>
                        <div className="bg-[#E74040] w-[50px] h-[2px]"></div>
                        <p className="text-[#737373] font-montserrat text-[14px] leading-[20px] tracking-[0.2px]">
                        The gradual accumulation of information about atomic and small-scale behaviour...
                        </p>
                    </div>

                    {/* Feature Card 3 */}
                    <div className="flex flex-col items-start bg-[#23A6F0] shadow-md p-[35px_40px] gap-[20px] w-[328px] h-[292px]">
                        <div className="flex flex-col items-center bg-white w-[70px] h-[76px] rounded-[10px] justify-center">
                            {/* No icon here, just the styled box */}
                        </div>
                        <h3 className="text-white font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">
                        training Courses
                        </h3>
                        <div className="bg-white w-[50px] h-[2px]"></div>
                        <p className="text-white font-montserrat text-[14px] leading-[20px] tracking-[0.2px]">
                        The gradual accumulation of information about atomic and small-scale behaviour...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
