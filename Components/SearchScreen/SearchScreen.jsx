import React from "react";
import "./SearchScreen.scss";
import store from "@/Redux/Store";
import { SET_SEARCHSCREEN_ACTIVE } from "@/Redux/Slices/Search";
import Link from "next/link";

function SearchScreen() {
  const toggleSearchScreen = () => {
    store.dispatch(SET_SEARCHSCREEN_ACTIVE(false));
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
              <input placeholder="Serach" type="search" className="input" />
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
