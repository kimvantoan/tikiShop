import React from "react";
import search from "../assets/search.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const Search = ({ setResult }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://h5ltj4-8080.csb.app/books`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResult(filtered);
  }, [searchQuery]);
  return (
    <div className="md:w-8/12 bg-white  flex items-center justify-center border border-gray-400 border-solid rounded-md md:py-2.5 md:px-4 py-1 ">
      <img className="md:w-7 w-4" src={search} alt="" />
      <input
        className="w-10/12 outline-0"
        type="text"
        onChange={handleSearch}
        value={searchQuery}
      />
      <button className="text-blue-600 hidden md:block">Tìm kiếm</button>
    </div>
  );
};

export default Search;
