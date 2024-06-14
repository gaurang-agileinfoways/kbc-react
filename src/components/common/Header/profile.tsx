import { useState } from "react";
import { capitalizeFirstLetter } from "../../../utils/functions";

export default function ProfileComponent() {
  const [profileDropdownload, setProfileDropdownload] = useState(false);
  const user = JSON.parse(
    localStorage.getItem("userKaunBanegaCarorpati") as string
  );

  return (
    <div className="">
      <button
        type="button"
        id="user-menu-button"
        onClick={() => setProfileDropdownload(!profileDropdownload)}
      >
        <img
          className="w-10 h-10 rounded-full border-2 border-indigo-500 p-[2px] object-cover"
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
          alt="img"
        />
      </button>
      {/* Dropdown menu */}
      <div
        className={`z-50 my-1 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow absolute ${
          profileDropdownload ? "" : "hidden"
        }`}
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-black">{`${capitalizeFirstLetter(
            user?.firstName
          )} ${user?.lastName}`}</span>
          <span className="block text-sm truncate">{user?.email}</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a
              href="adsfadsf"
              className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
            >
              My profile
            </a>
          </li>
          <li>
            <a
              href="adsfadsf"
              className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
            >
              My tests
            </a>
          </li>
          {/* <li>
            <a
              href="adsfadsf"
              className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
            >
              Earnings
            </a>
          </li> */}
          <li>
            <a
              href="adsfadsf"
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
