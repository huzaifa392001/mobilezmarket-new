import React from "react";
import "./SearchScreen.scss";
import {
  SET_SEARCH_QUERY,
  SET_SEARCHSCREEN_ACTIVE,
} from "@/Redux/Slices/Search";
import Link from "next/link";
import { useDispatch } from "react-redux";

function SearchScreen() {
  const dispatch = useDispatch();
  const toggleSearchScreen = () => {
    dispatch(SET_SEARCHSCREEN_ACTIVE(false));
  };

  const setSearchQuery = (query) => {
    dispatch(SET_SEARCH_QUERY(query));
  };
  return (
    <>
      <div className="formScreen">
        <button onClick={toggleSearchScreen} className="closeBtn">
          <i className="fas fa-times"></i>
        </button>
        <div className="formContainer">
          <div className="searchCont">
            <div className="inputCont">
              <button>
                <i className="fas fa-search"></i>
              </button>
              <input
                placeholder="Serach"
                type="search"
                onChange={() => setSearchQuery()}
                className="input"
              />
            </div>
          </div>
        </div>
        <div className="recentSearch">
          <div className="headingBox">
            <h3 className="secHeading">Recent Searches</h3>
          </div>
          <button className="serachBox">Used Mobiles</button>
          <button className="serachBox">New Mobiles</button>
          <button className="serachBox">Used Tablets</button>
          <button className="serachBox">New Tablets</button>
        </div>
        <div className="suggestedSearch">
          <div className="headingBox">
            <h3 className="secHeading">Suggested Searches</h3>
          </div>
          <ul>
            <li>
              <Link href={""}>
                Mobiles
                <i className="fas fa-chevron-right" />
              </Link>
            </li>
            <li>
              <Link href={""}>
                Tablets
                <i className="fas fa-chevron-right" />
              </Link>
            </li>
            <li>
              <Link href={""}>
                Watches
                <i className="fas fa-chevron-right" />
              </Link>
            </li>
            <li>
              <Link href={""}>
                Accessories
                <i className="fas fa-chevron-right" />
              </Link>
            </li>
            <li>
              <Link href={""}>
                Used Phones
                <i className="fas fa-chevron-right" />
              </Link>
            </li>
            <li>
              <Link href={""}>
                Used Phones
                <i className="fas fa-chevron-right" />
              </Link>
            </li>
            <li>
              <Link href={""}>
                PTA Phone
                <i className="fas fa-chevron-right" />
              </Link>
            </li>
            <li>
              <Link href={""}>
                NON-PTA Phone
                <i className="fas fa-chevron-right" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SearchScreen;
