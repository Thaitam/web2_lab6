import React from "react";
import Link from "next/link";
import { Login, Register } from "@/components";
import { FaCircleUser } from "react-icons/fa6";

const UserInfo = () => {
  return (
    <div className="user-info group relative">
      <div className="user-info__icon bg-white/20 w-10 h-10 flex items-center justify-center rounded-lg">
        <FaCircleUser className="text-2xl text-white"/>
      </div>
      <div className="user-info__dropdown hidden shadow-lg absolute group-hover:block bg-slate-100 w-28">
        <div className="user-info__dropdown__item hover:bg-white px-5 py-3">
          <Link href="/login">
            <Login />
          </Link>
        </div>
        <div className="user-info__dropdown__item hover:bg-white px-5 py-3">
          <Link href="/register">
            <Register />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
