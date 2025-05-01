"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
  }, [menuOpen]);

  return (
    <header className=" w-full bg-white ">
      <div className=" w-full h-full flex items-center justify-between relative ">
        {/* {left icons} */}
        <div className="  flex items-center h-full mr-6 lg:mr-10 2xl:mr-16">
          <Link
            href=""
            onClick={toggleMenu}
            className=" lg:hidden bg-slate-50 border-2 my-[20px] border-slate-200 p-2 mx-1 flex items-center justify-center rounded-lg "
          >
            <Bars3Icon className="w-6 h-6 text-black " />
          </Link>
          <div className=" bg-slate-400 py-2  px-6 mx-1 my-[20px] flex items-center justify-center rounded-lg">
            <Link href="" className=" text-[16px]">
              logo
            </Link>
          </div>
        </div>
        {/* {lg menu} */}
        <div className=" hidden lg:flex flex-wrap justify-evenly h-full items-center *:p-1 *:mx-1 my-[20px]  ">
          <div className=" ">
            <Link href="" className=" font-bold text-headerText">
              خانه
            </Link>
          </div>
          <div className="">
            <Link href="" className=" font-bold text-headerText">
              طراحی سایت
            </Link>
          </div>
          <div className="">
            <Link href="" className=" font-bold ">
              کمپین های بازاریابی و تبلیقاتی
            </Link>
          </div>
          <div className="">
            <Link href="" className=" font-bold text-headerText">
              اتوماسیون و بازاریابی
            </Link>
          </div>
          <div className="">
            <Link href="" className=" font-bold text-headerText">
              تولید کحتوا
            </Link>
          </div>
          <div className="">
            <Link href="" className=" font-bold text-headerText">
              سوو
            </Link>
          </div>
          <div className="">
            <Link href="" className=" font-bold text-headerText">
              تماس با ما
            </Link>
          </div>
        </div>
        {/* {right icons} */}
        <div className=" flex  h-full items-center ml-6 lg:ml-10 2xl:ml-16 ">
          <Link
            href=""
            className=" bg-slate-50 border-2 my-[20px] border-slate-200  p-2 mx-1 flex items-center justify-center rounded-lg"
          >
            <MagnifyingGlassIcon className="w-6 h-6 text-black" />
          </Link>
          <Link
            href=""
            className="bg-slate-50 border-2 my-[20px] border-slate-200 p-2 mx-1 flex items-center justify-center rounded-lg"
          >
            <UserIcon className="w-6 h-6 text-black" />
          </Link>
        </div>
        {/* {mobile menu} */}
        <div
          className={`flex flex-wrap lg:hidden absolute top-0 right-0 bg-slate-50 w-full h-[100vh]  justify-center items-center transition-transform duration-500 ease-in-out ${
            menuOpen ? "transform translate-x-0" : "transform translate-x-full"
          }`}
        >
          <div
            className="w-full h-fit flex justify-end px-6"
            onClick={toggleMenu}
          >
            {/* Close Icon */}
            <XMarkIcon className="w-8 h-8 text-black cursor-pointer" />
          </div>
          <div className=" flex flex-col content-center justify-center w-full *:flex *:justify-center *:py-4 ">
            <div className="  ">
              <Link href="" className=" font-bold text-headerText ">
                خانه
              </Link>
            </div>
            <div className="">
              <Link href="" className=" font-bold text-headerText">
                طراحی سایت
              </Link>
            </div>
            <div className="">
              <Link href="" className=" font-bold ">
                کمپین های بازاریابی و تبلیقاتی
              </Link>
            </div>
            <div className="">
              <Link href="" className=" font-bold text-headerText">
                اتوماسیون و بازاریابی
              </Link>
            </div>
            <div className="">
              <Link href="" className=" font-bold text-headerText">
                تولید کحتوا
              </Link>
            </div>
            <div className="">
              <Link href="" className=" font-bold text-headerText">
                سوو
              </Link>
            </div>
            <div className="">
              <Link href="" className=" font-bold text-headerText">
                تماس با ما
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
