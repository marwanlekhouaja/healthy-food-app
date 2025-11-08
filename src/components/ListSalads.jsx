import React from "react";
import Caesar_salad from "../assets/pictures/salads/Caesar_salad.png";
import Classic_Ricotta from "../assets/pictures/salads/Classic_Ricotta.png";
import Greek_salad from "../assets/pictures/salads/Greek_salad.png";
import Mexican_salad from "../assets/pictures/salads/Mexican_salad.png";
import Salad from "./Salad";
import { Link } from "react-router-dom";
function ListSalads() {
  const salads = [
    {
      id: 1,
      name: "Caesar salad",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      price: "$20",
      picture: Caesar_salad,
    },
    {
      id: 2,
      name: "Greek salad",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      price: "$45",
      picture: Greek_salad,
    },
    {
      id: 3,
      name: "Mexican salad",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      price: "$13",
      picture: Mexican_salad,
    },
    {
      id: 4,
      name: "Classic Ricotta",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      price: "$24",
      picture: Classic_Ricotta,
    },
  ];
  return (
    <div
      style={{ justifyContent: "center", alignItems: "center" }}
      className="flex flex-wrap "
    >
      {salads.map((salad) => (
        <div key={salad.id} className="flex-shrink-0 w-full sm:w-1/2 md:w-2/4 p-2">
          <Link to={`/salad/${salad.name.replace(/\s/g, '_')}`}>
            <Salad salad={salad} className="cursor-pointer" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListSalads;
