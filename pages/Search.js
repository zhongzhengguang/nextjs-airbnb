import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useRouter } from "next/router";
import InfoCard from "./Components/InfoCard";
function search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;
  const range = `${startDate} - ${endDate}`;
  // console.log(searchResults);
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
          <div className=" flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default search;

export async function getStaticProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
