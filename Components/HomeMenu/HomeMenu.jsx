"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./HomeMenu.scss";
import Image from "next/image";

function HomeMenu() {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="fas fa-bullhorn"></i>
                <span>My Ads</span>
              </Link>
            </li>
            <li>
              <Link href="" className="sellBtn">
                <i className="fas fa-plus"></i>
                <span>Sell Now</span>
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="far fa-comments-alt"></i>
                <span>Chat</span>
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="fas fa-cog"></i>
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {showBanner && (
        <div className="downloadBanner">
          <button onClick={() => setShowBanner(false)} className="closeBtn">
            <i className="fas fa-times"></i>
          </button>
          <div className="logo">
            <Image src="/images/logo.webp" fill alt="website logo" />
          </div>
          <div className="content">
            <h3>
              MobilezMarket
              <span>50k+ downloads</span>
            </h3>
            <Link className="downloadBtn" href={""}>
              Install
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default HomeMenu;