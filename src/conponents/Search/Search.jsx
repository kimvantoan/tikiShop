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
    <div className="w-8/12 flex items-center justify-center border border-gray-400 border-solid rounded-lg py-2.5 px-4">
      <img className="w-7" src={search} alt="" />
      <input
        className="w-10/12 outline-0"
        type="text"
        onChange={handleSearch}
        value={searchQuery}
      />
      <button className="text-blue-600">Tìm kiếm</button>
    </div>
  );
};

export default Search;
