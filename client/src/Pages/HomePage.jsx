import React from "react";
import { useParams } from "react-router";

//Components
import Delivery from "../components/Delivery";
import Dining from "../components/Dining";
import NightLife from "../components/NightLife";
import Nutrition from "../components/Nutrition";

function HomePage() {
  const { type } = useParams();
  console.log(type);
  return (
    <>
      <div className="my-5">
        {type === "delivery" && <Delivery />}
        {type === "dining" && <Dining />}
        {type === "night" && <NightLife/>}
        {type === "nutri" && <Nutrition/>}
        </div>
    </>
  );
}

export default HomePage;
