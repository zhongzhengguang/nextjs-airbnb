import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
function Search() {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndtDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndtDate}`;

  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />
      <main className=" flex">
        <section className=" flex-grow pt-14 px-6">
          <p className=" text-xs">
            Stays - {range} - for {numberOfGuests} guests
          </p>
          <h1 className=" text-3xl mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden lg:inline-flex space-x-3 text-gray-800 whitespace-nowrap py-5">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms of Beds</p>
            <p className="button">More filter</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
