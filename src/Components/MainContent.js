import React, { useEffect, useInsertionEffect, useState } from "react";
import { BsFileCodeFill, BsBell, BsCircle } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaLinkedinIn, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import image from "../Components/images/profile_avatar.png";
import main from "../Components/images/community.jpg";
import fun from "../Components/images/fun-img.png";
import tech from "../Components/images/tech.jpg";
import lead from "../Components/images/lead.png";
import axios from "axios";

const MainContent = () => {
  const [data, setData] = useState([]);

  useInsertionEffect(() => {
    axios
      .get("https://api.facthunt.in/fostergem/v1/post/list/public")
      .then((res) => setData(res.data.content))
      .catch((error) => console.log(error));
  });
  return (
    <>
      <div className="flex w-full min-h-screen bg-gray-200 md:px-2">
        <div className="sm:w-3/12 md:w-3/12 lg:w-1/5 bg-white h-screen rounded-md">
          <div className=" px-2  hidden sm:block md:block lg:block">
            <div className="mb-4 flex  items-center pt-3 justify-center">
              <p className="text-3xl pl-5 sm:pl-8 md:pl-4 lg:px-2">
                <BsFileCodeFill />
              </p>
              <h3 className=" text-lg font-medium pl-1 cursor-pointer	">
                SmartUp
              </h3>
              <p className=" hidden sm:block  md:block lg:block md:text-2xl sm:px-5   md:pl-10  lg:pr-0  ">
                <HiOutlineMenu />
              </p>
            </div>
            <hr />
            <hr />
            <hr />
            <div className="flex justify-center  items-center  mt-3">
              <div>
                <img
                  className="h-7 w-auto  sm:px-2  md:ml-0 lg:mx-1"
                  src={image}
                  alt=""
                />
              </div>
              <span className="text-sm pl-4 lg:px-4 cursor-pointer">
                Profile
              </span>
              <span className="sm:pl-5 md:pl-1 lg:pl-4 sm:pr-1">12</span>
              <div className="bg-orange-600 p-1 rounded-full  mx-1 md:ml-6 lg:ml-2 hidden md:block lg:block">
                <BsBell className="text-white" />
              </div>
            </div>
            <div className="hidden sm:block md:block lg:block  mt-4">
              <hr />

              <div className="sm:flex sm:justify-around md:flex md:justify-center  md:items-center mt-2 md:ml-3 lg:ml-2 bg-blue-100 rounded-md py-2">
                <CgMenuGridO className="text-2xl lg:mr-6 md:mr-4" />

                <span className="md:pr-8 lg:pr-10 cursor-pointer">
                  Discover
                </span>
                <span className="hidden md:block lg:block text-xs bg-blue-600 text-white px-3 py-1 rounded-2xl ">
                  24
                </span>
              </div>
              <div className="sm:flex sm:justify-around md:flex md:justify-center md:items-center mt-2 sm:ml-1 md:ml-3 lg:ml-0">
                <BsCircle className="text-lg md:mr-4 lg:mr-7" />

                <span className="md:pr-16 lg:pr-16 cursor-pointer">
                  SmartUp
                </span>
              </div>
              <div className="relative flex justify-center items-center  lg:mr-2 mt-1">
                <img
                  className="sm:mr-24 md:mr-32 lg:mr-36  h-10 rounded-full "
                  src={main}
                  alt=""
                />
                <span className="absolute sm:ml-10 sm:text-sm md:text-base md:ml-12 cursor-pointer ">
                  Main Community
                </span>
              </div>
              <div className="relative flex justify-center items-center  lg:mr-2">
                <img
                  className="sm:mr-24 md:mr-32 lg:mr-36  h-10 rounded-full "
                  src={fun}
                  alt=""
                />
                <span className="absolute sm:ml-10 sm:text-sm md:text-base md:ml-10 lg:ml-10 cursor-pointer">
                  Fun Community
                </span>
              </div>
              <div className="relative flex justify-center items-center  lg:mr-2">
                <img
                  className="sm:mr-24 md:mr-32 lg:mr-36  h-10 rounded-full "
                  src={tech}
                  alt=""
                />
                <span className="absolute sm:ml-10 sm:text-sm md:text-base md:ml-11 cursor-pointer">
                  Tech Community
                </span>
              </div>
              <div className="relative flex justify-center items-center  lg:mr-2">
                <img
                  className="sm:mr-24 md:mr-32 lg:mr-36  h-10 rounded-full "
                  src={lead}
                  alt=""
                />
                <span className="absolute sm:ml-10 sm:text-sm md:text-base md:ml-12  cursor-pointer">
                  Lead Community
                </span>
              </div>
            </div>
            <div className="mt-3">
              <div className="relative flex justify-center items-center  lg:mr-2">
                <MdOutlinePersonOutline className="sm:mr-24 md:mr-32 lg:mr-36  text-2xl" />
                <span className="absolute sm:ml-2 sm:text-sm md:text-lg md:ml-0  font-semibold ">
                  Personal
                </span>
              </div>
              <div className="mt-2 relative text-center">
                <span className=" sm:text-sm md:text-base cursor-pointer">
                  In Progress
                </span>
                <span className="absolute sm:hidden md:inline ml-7 sm:text-sm md:text-base">
                  180
                </span>
              </div>
              <div className="mt-2 relative text-center">
                <span className=" sm:text-sm md:text-base cursor-pointer">
                  Completed
                </span>
                <span className="absolute sm:hidden md:inline ml-9 sm:text-sm md:text-base">
                  48
                </span>
              </div>
              <div className="mt-2 relative text-center">
                <span className=" sm:text-sm md:text-base cursor-pointer">
                  Read Later
                </span>
                <span className="absolute sm:hidden md:inline ml-9 sm:text-sm md:text-base">
                  24
                </span>
              </div>
            </div>
            <div className="mt-5">
              <hr />
              <div className="mt-2 relative text-center">
                <span className="ml-7 text-sm font-semibold cursor-pointer">
                  About SmartUp
                </span>
              </div>
              <div className="mt-1 relative text-center">
                <span className="ml-3 text-xs cursor-pointer">
                  Send Feedback
                </span>
              </div>
              <div className=" relative text-center">
                <span className=" text-xs cursor-pointer">Terms of Use</span>
              </div>
              <div className=" relative text-center">
                <span className="ml-1 text-xs cursor-pointer">
                  Privacy Policy
                </span>
              </div>
            </div>
            <div className="mt-5">
              <hr />
              <div className="flex justify-center mt-4 gap-4 ml-8 text-sm">
                <FaLinkedinIn className="cursor-pointer" />
                <FaFacebook className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
                <FaYoutube className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5 ml-10 ">
          <div className="flex justify-center items-center sm:hidden">
            <div className="flex justify-center items-center mt-2 bg-white rounded-full p-2">
              <p className="text-3xl pl-5 sm:pl-8 md:pl-4 lg:px-2">
                <BsFileCodeFill />
              </p>
              <h3 className=" text-lg font-medium pl-1 mr-2 cursor-pointer">
                SmartUp
              </h3>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 relative">
            <div className="font-medium">Discover</div>
            <button className=" text-xl bg-blue-500 px-8 pb-2 rounded-3xl text-white mr-4">
              +
            </button>
          </div>

          <div className="flex flex-wrap flex-initial">
            {data.map((res) => {
              return (
                <div
                  className=" sm:max-w-md md:max-w-lg lg:w-72 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-5 mr-4"
                  key={res.postId}
                >
                  <a href="#">
                    <img
                      className="rounded-t-lg object-cover object-top w-full h-36"
                      src={res.coverImageUrl}
                      alt=""
                    />
                  </a>
                  <div className="p-2 relative">
                    <div>
                      <h5 className="mb-1 text-sm font-medium tracking-tight text-gray-700 dark:text-white">
                        {res.title}l
                      </h5>
                    </div>
                    <div className="flex items-center">
                      <div className="w-7 h-7 ">
                        <img
                          className="w-7 h-7 rounded-full"
                          src={res.coverImageUrl}
                          alt=""
                        />
                      </div>
                      <div className="text-sm  ml-2">
                        <span className="mr-1">{res.user.fname}</span>
                        <span>{res.user.lname}</span>
                      </div>
                      <div className="text-xs ml-28 sm:ml-36 md:ml-60 lg:ml-8  ">
                        <span className="mr-1">Published :</span>
                        <span>{res.date.slice(0, 10)}</span>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default MainContent;
