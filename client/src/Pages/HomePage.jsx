import React from "react";
import { useParams } from "react-router";
import Delivery from "../components/Delivery";

function HomePage() {
  const { type } = useParams();
  console.log(type);
  return (
    <>
      <div className="my-5">{type === "delivery" && <Delivery />}</div>
    </>
  );
}

export default HomePage;
