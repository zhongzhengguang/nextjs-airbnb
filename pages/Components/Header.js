import Image from "next/image";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { React, useState } from "react";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars4Icon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import format from "date-fns/format";
function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: format(new Date(startDate.toISOString()), "dd MMMM yy"),
        endDate: format(new Date(endDate.toISOString()), "dd MMMM yyyy"),
        numberOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 md:px-10 shadow-md ">
      <div
        onClick={() => router.push("/")}
        className="my-auto flex relative items-center h-10 cursor-pointer "
      >
        <Image
          alt="#"
          src="https://links.papareact.com/qd3"
          fill
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className=" md:shadow-md flex items-center md:border-2 rounded-full py-2 m-auto ">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          type="text"
          placeholder={placeholder || "search"}
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className=" h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2" />
      </div>
      <div className=" flex space-x-2 items-center justify-end text-gray-500">
        <p className=" hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className=" h-6 cursor-pointer" />
        <div className=" flex items-center space-x-2 border-2 rounded-full px-2">
          <Bars4Icon className=" h-6 cursor-pointer" />
          <UserCircleIcon className=" h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className=" flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className=" flex items-center border-b mb-4">
            <h2 className=" text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserIcon className=" h-5" />
            <input
              type="number"
              className=" w-12 pl-2 text-lg outline-none text-red-400"
              value={numberOfGuests}
              min={1}
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
          </div>
          <div className=" flex">
            <button className=" flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className=" flex-grow text-red-500" onClick={search}>
              search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
