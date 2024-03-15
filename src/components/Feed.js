import React from "react";
import { feed } from "../constants";

function Feed() {
  return (
    <>
      {feed.map((post) => (
        <div
          key={post.key}
          className="flex flex-col gap-4 rounded-lg my-4 p-4  sm:my-8 sm:p-0 sm:p-4 text-sm leading-5 border border-gray-400 bg-gray-100 bg-white sm:hover:bg-gray-100"
        >
          <div className="flex gap-2 ">
            <div className="dp-container rounded-full w-10 h-10 sm:w-12 sm:h-12 overflow-hidden">
              <img src={post.dp} alt="Profile Picture" />
            </div>
            <div className="">
              <h1 className="mb-1 text-lg font-semibold">Mukul Singh✨</h1>
              <span className="tag bg-gray-200 rounded-lg p-1 text-center">
                {post.postDate}
              </span>
            </div>
          </div>
          <div className=" flex flex-col gap-3 ">
            <div className="post-discription">
              {post.postDiscription.map((point, index) => (
                <li
                  key={`post-${index}`}
                  className="text-white-100 text-[14px] pl-1 tracking-wider list-none"
                >
                  {point}
                </li>
              ))}
            </div>
            <div className="post-img rounded-lg overflow-hidde sm:max-w-96 m-auto">
              <img className="" src={post.postImg} />
            </div>

            <div className="links container border-t-2 p-2">
              <ul className="flex justify-around">
                <li className=" cursor-pointer">
                  <i class="fa-regular fa-heart mr-2"></i> Like
                </li>
                <li className="cursor-pointer">
                  <i class="fa-regular fa-message mr-2"></i>Comment
                </li>
                <li className="cursor-pointer">
                  <i class="fa-solid fa-share mr-2"></i>Share
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Feed;
