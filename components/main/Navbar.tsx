import React from 'react'
import Image from "next/image"


const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-slage-300/30 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className="w-full h-full flex flex-row items-center justify-center m-auto px-[10px]">
            <div className="w-[500px] h-full flex flex-row items-center">
                <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
                    <a href="#about-me" className="cursor-pointer">
                    About me
                    </a>
                    <a href="#skills" className="cursor-pointer">
                    Skills
                    </a>
                    <a href="#projects" className="cursor-pointer">
                    Projects
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
