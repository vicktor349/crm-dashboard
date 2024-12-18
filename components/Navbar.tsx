"use client"
import React, { useEffect, useRef, useState } from 'react'
import { CgMenuGridO } from "react-icons/cg";
import { TfiLightBulb } from "react-icons/tfi";
import { IoAdd, IoChatbubblesOutline, IoSettingsOutline } from "react-icons/io5";
import { RiCloseFill, RiQuestionMark } from "react-icons/ri";
import { HiMiniBars3BottomRight } from 'react-icons/hi2';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const mobileRef = useRef<HTMLDivElement | null>(null)
    const toggleButtonRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            // Check if click is outside both the menu AND the toggle button
            if (
                mobileRef.current &&
                !mobileRef.current.contains(e.target as Node) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="bg-navbarColor h-12 flex items-center justify-between text-color px-6">
            {/* Left Side Items */}
            <div className="flex items-center space-x-3">
                <CgMenuGridO color="#95a4b9" className='mt-1' size={24} />
                <h1 className="font-semibold">Dynamics 365</h1>
                {/* Horizontal rule */}
                <p className="h-4 border-color border-r ssssm:hidden sssm:flex"></p>
                <p className='ssssm:hidden sssm:flex'>Sales hub</p>
            </div>
            {/* Right Side Items */}
            <div className='items-center space-x-8 hidden sm:flex'>
                <TfiLightBulb color="#95a4b9" size={20} className='hover:cursor-pointer' />
                <IoAdd color="#95a4b9" size={20} className='hover:cursor-pointer' />
                <IoSettingsOutline color="#95a4b9" size={20} className='hover:cursor-pointer' />
                <RiQuestionMark color="#95a4b9" size={20} className='hover:cursor-pointer' />
                <IoChatbubblesOutline color="#95a4b9" size={20} className='hover:cursor-pointer' />
            </div>
            <div className="relative sm:hidden w-6 h-6 overflow-hidden hover:cursor-pointer" onClick={toggleMenu} ref={toggleButtonRef}>
                <div className={`absolute inset-0 transition-transform duration-300 ${isOpen ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`}>
                    <HiMiniBars3BottomRight className="w-full h-full" />
                </div>
                <div className={`absolute inset-0 transition-transform duration-300 ${isOpen ? 'rotate-0 scale-100' : '-rotate-180 scale-0'}`}>
                    <RiCloseFill className="w-full h-full" />
                </div>
            </div>
            <div className='absolute top-14 right-5' ref={mobileRef}>
                <div className='relative'>
                    {
                        isOpen &&
                        <div className='text-white navbar w-[250px] flex flex-col z-[9999] p-6 rounded-lg bg-navbarColor space-y-5'>
                            <TfiLightBulb color="#95a4b9" size={20} className='hover:cursor-pointer' />
                            <IoAdd color="#95a4b9" size={20} className='hover:cursor-pointer' />
                            <IoSettingsOutline color="#95a4b9" size={20} className='hover:cursor-pointer' />
                            <RiQuestionMark color="#95a4b9" size={20} className='hover:cursor-pointer' />
                            <IoChatbubblesOutline color="#95a4b9" size={20} className='hover:cursor-pointer' />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar