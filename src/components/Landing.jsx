import React from "react";
import {
  FaCircle,
  FaFacebook,
  FaFontAwesome,
  FaSquare,
  FaTwitter,
} from "react-icons/fa";
import { Fa42Group, FaUserGroup } from "react-icons/fa6";

export default function Landing() {
  return (
    <>
      <div className="bg-orange-600 text-white  justify-center border border-none w-full  h-fit ">
        <h1 className="text-[20px] text-center">
          {" "}
          <b>LANDING PAGE TEMPLATE</b>
        </h1>
        <h3 className="text-center">BUSINESS</h3>
        <div className="flex px-16 pb-10">
          <div className="flex flex-col md:flex-row bg-white">
            <div className="flex flex-row">
              <div className="sm:hidden md:block bg-black rounded-r-[50%] overflow-hidden w-[30rem]  max-h-[35rem] ">
                <div className="p-2 ml-[20px] w-fit item-center ">
                  <FaUserGroup />
                  <p>success inc.</p>
                </div>
                <div>
                  <div className="text text-yellow-400  w-fit gap-[10px] flex flex-row ">
                    <div className="text-[5px] flex flex-col gap-[10px]">
                      <FaSquare />
                      <FaSquare />
                      <FaSquare />
                    </div>
                    <div className="text-[5px] flex flex-col gap-[10px]">
                      <FaSquare />
                      <FaSquare />
                      <FaSquare />
                    </div>
                    <div className="text-[5px] flex flex-col gap-[10px]">
                      <FaSquare />
                      <FaSquare />
                      <FaSquare />
                    </div>
                    <div className="text-[5px] flex flex-col gap-[10px]">
                      <FaSquare />
                      <FaSquare />
                      <FaSquare />
                    </div>
                    <div className="text-[5px] flex flex-col gap-[10px]">
                      <FaSquare />
                      <FaSquare />
                      <FaSquare />
                    </div>
                  </div>
                  <div className="text-yellow-500 pt-10 pl-10 text-[10px]">
                    <FaCircle />
                  </div>
                  <div className="bg-white absolute ml-10 relative top-9 rotate-[40deg] rounded-t-[200px] h-[30rem] w-[14rem]">
                    <div className=" w-[250px] ">
                      <img
                        src="./jitter.jpg"
                        className="rounded-[50%] -rotate-[40deg] relative left-[8px] top-[5px] border border-black  shadow-blue-900 
                      h-[13rem] w-[13rem]
                      "
                      />
                    </div>
                    <div className="text-black w-fit flex gap-[5px] pt-10 -rotate-[40deg] ">
                      <div className="flex items-center">
                        <div>
                          <FaTwitter />
                        </div>
                        <div>
                          <b>@success.inc</b>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div>
                          <FaFacebook />
                        </div>
                        <div>
                          <b> sussess inc</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative top-[-200px] left-[354px] ">
                    <div className="text-yellow-500 pb-10 pl-10 text-[10px]">
                      <FaCircle />
                    </div>
                    <div className="text text-yellow-400 gap-[10px] flex flex-row ">
                      <div className="text-[5px] flex flex-col gap-[10px]">
                        <FaSquare />
                        <FaSquare />
                        <FaSquare />
                      </div>
                      <div className="text-[5px] flex flex-col gap-[10px]">
                        <FaSquare />
                        <FaSquare />
                        <FaSquare />
                      </div>
                      <div className="text-[5px] flex flex-col gap-[10px]">
                        <FaSquare />
                        <FaSquare />
                        <FaSquare />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white   ">
                <nav className="text-black  ">
                  <ul className="flex gap-5 p-3 ">
                    <li>
                      <a href="">
                        <b>home</b>
                      </a>
                    </li>
                    <li>
                      <a href="">about</a>
                    </li>
                    <li>
                      <a href="">contact</a>
                    </li>
                    <li>
                      <button className=" rounded-xl  w-[100px] bg-gradient-to-r from-yellow-600 via-yellow-300 to-yello-600 ">
                        <b> SIGN UP</b>
                      </button>
                    </li>
                  </ul>
                </nav>
                <div className=" ">
                  <div className="">
                    <div className=" ml-[100px] mt-[50px] flex  justify-between ">
                      <div className="text  gap-[10px] flex flex-row ">
                        <div className="text-[5px] text-gray-400 flex flex-col gap-[10px]">
                          <FaSquare />
                          <FaSquare />
                          <FaSquare />
                        </div>
                        <div className="text-[5px] text-gray-400 flex flex-col gap-[10px]">
                          <FaSquare />
                          <FaSquare />
                          <FaSquare />
                        </div>
                        <div className="text-[5px] text-gray-400 flex flex-col gap-[10px]">
                          <FaSquare />
                          <FaSquare />
                          <FaSquare />
                        </div>
                      </div>
                      <div className="flex flex-row text-gray-400  text-[5px] gap-[5px] ">
                        <div className=" flex flex-col gap-[10px]">
                          <FaSquare />
                          <FaSquare />
                          <FaSquare />
                        </div>
                        <div className=" flex flex-col gap-[10px]">
                          <FaSquare />
                          <FaSquare />
                          <FaSquare />
                        </div>
                      </div>
                    </div>
                    <div className="text-black ml-[150px] items-center w-[500px]">
                      <div>
                        <h1 className="text-[30px] w-[100px] gap-[10px]">
                          <b>GROW YOUR BUSINESS</b>
                        </h1>
                        <p className="w-[500px] ">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Ducimus molestias, placeat explicabo sint
                          aperiam quibusdam, quam eveniet ipsa repudiandae sequi
                          cum eos ipsam, sed pariatur alias? Voluptatem non
                          alias delectus?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" ml-[100px] flex gap-[100px] mt-5  ">
                    <div className="gap-[10px] ">
                      <button className=" rounded-xl text-black  w-[150px] bg-gradient-to-r  from-yellow-600 via-yellow-300 to-yello-600">
                        <b>READ MORE</b>
                      </button>
                      <p>
                        {" "}
                        <button className="border border-yellow-500 border-[2px] rounded-lg gap-[5px] mt-5 w-[100px] text-black ">
                          <b>JOIN US</b>
                        </button>
                      </p>
                    </div>
                    <div className="text  gap-[10px] flex flex-row pt-20 ">
                      <div className="text-[5px] text-gray-400 flex flex-col gap-[10px]">
                        <FaSquare />
                        <FaSquare />
                      </div>
                      <div className="text-[5px] text-gray-400 flex flex-col gap-[10px]">
                        <FaSquare />
                        <FaSquare />
                      </div>
                      <div className="text-[5px] text-gray-400 flex flex-col gap-[10px]">
                        <FaSquare />
                        <FaSquare />
                      </div>
                    </div>
                    <div className="text-black gap-[10px] ">
                      <p>653 Allison Avenue</p>
                      <p>
                        <b>Parksley,Virginia</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
