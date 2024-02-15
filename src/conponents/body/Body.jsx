import React from "react";
import { Fillter } from "../fillter";
import { ListProduct } from "../listProduct/ListProduct";

export const Body = ({ result }) => {
  return (
    <div className="bg-gray-100 flex gap-4 justify-center">
      <Fillter />
      <ListProduct result={result} />
    </div>
  );
};
