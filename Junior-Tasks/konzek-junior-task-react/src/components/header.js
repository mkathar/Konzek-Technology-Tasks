import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client/core";
import { useDispatch } from "react-redux";
import { setData } from "../redux/slices/countriesSlice";

const Header = () => {
  const LIST_COUNTRIES = gql`
    query AllCountries {
      countries {
        code
        name
        native
        capital
        emoji
        currency
        languages {
          code
          name
        }
      }
    }
  `;

  const { loading, error, data, refetch } = useQuery(LIST_COUNTRIES);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const filterQuery = () => {
    if (data && data.countries) {
      const filtered = data.countries.filter((item) => {
        if (item.name.toLowerCase().includes(query)) {
          return item;
        }
      });
      dispatch(setData(filtered));
    }
  };

  useEffect(() => {
    filterQuery();
  }, [query, data]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <header className="header">
      <h1 className="header__title">Countries</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="header__input"
        placeholder="type to filter"
        type="text"
      />
    </header>
  );
};

export default Header;
