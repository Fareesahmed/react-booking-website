import { NavLink } from "react-router-dom";
import Container from "./Container";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { GoSignOut } from "react-icons/go";
// import { RxCross2 } from "react-icons/rx";
// import defaultUser from "../../assets/default__user.png";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { PiAirplaneInFlight } from "react-icons/pi";
import { MdAttractions } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import language from "../../assets/language.png";

import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [location, setLocation] = useState(false);
  const [date, setDate] = useState(false);
  const [man, setMan] = useState(false);

  const [room, setRoom] = useState(1);
  const [children, setChildren] = useState(0);
  const [adult, setAdult] = useState(1);

  // const [isShow, setIsShow] = useState(false);

  const handleRoomIncrement = () => {
    if (room > 1) {
      setRoom(room - 1);
    }
  };

  const handleChildrenIncrement = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };

  const handleAdultIncrement = () => {
    if (adult > 1) {
      setAdult(adult - 1);
    }
  };
  return (
    <header className="header-section">
      <Container>
        <nav className="header__content">
          {/* <div className="mobile__nav--bar">
            <div className="mobile__nav--logo">
              <Logo />
            </div>
            <ul className="mobile__nav--items">
              {user?.email ? (
                <li className="mobile__nav--user header__link">
                  <img
                    src={user?.photoURL ? user?.photoURL : defaultUser}
                    alt=""
                  />
                  <span>{user.displayName}</span>
                </li>
              ) : null}
              <li
                className="mobile__nab--hamburger"
                onClick={() => setIsShow(!isShow)}
              >
                {isShow ? <RxCross2 /> : <RxHamburgerMenu />}
              </li>
            </ul>
          </div> */}
          <div className="header__logo">
            <h2>Booking.com</h2>
          </div>
          <div className="header__nav--links">
            <ul className="header__links">
              <NavLink className="header__link">USD</NavLink>

              <NavLink className="header__link">
                <div className="header__link--image">
                  <img src={language} alt="" />
                </div>
              </NavLink>

              <NavLink className="header__link">
                <IoIosHelpCircleOutline />
              </NavLink>
            </ul>
            <ul className="header__links links--button  ">
              <NavLink className="header__link">List your property</NavLink>

              <NavLink to={"/signup"} className="header__link--button button">
                Register
              </NavLink>

              <NavLink to={"/login"} className="header__link--button button">
                Sign in
              </NavLink>
            </ul>
          </div>
        </nav>
        <nav>
          <ul className="header__nav--services">
            <NavLink to={"/"} className="header__nav--service">
              <IoBedOutline /> <span>Stays</span>
            </NavLink>

            <NavLink to={"/flights"} className="header__nav--service">
              <PiAirplaneInFlight /> <span>Flights</span>
            </NavLink>

            <NavLink to={"/carservices"} className="header__nav--service">
              <FaCar /> <span>Car rentals</span>
            </NavLink>
            <NavLink to={"/attractions"} className="header__nav--service">
              <MdAttractions /> <span>Attractions</span>
            </NavLink>
            <NavLink to={"/airport"} className="header__nav--service">
              <FaCar /> <span>Airport taxis</span>
            </NavLink>
          </ul>
        </nav>

        {/* mobile menu li start */}

        {/* {isShow && (
          <div className="mobile__menu">
            <ul className="mobile__menu--header__links">
              <NavLink className="mobile__menu--header__link" to={"/"}>
                Home
              </NavLink>

              <NavLink className="mobile__menu--header__link" to={"/jobs"}>
                Jobs
              </NavLink>

              <NavLink className="mobile__menu--header__link" to={"/about"}>
                About
              </NavLink>

              <NavLink className="mobile__menu--header__link" to={"/contact"}>
                Contact
              </NavLink>

              <NavLink className="mobile__menu--header__link" to={"/favorite"}>
                Favorite
              </NavLink>
            </ul>

            {user ? (
              <ul className="mobile__menu--header__links">
                <li>
                  <Link
                    onClick={handleSignOut}
                    className="mobile__menu--header__link"
                  >
                    Sign Out <GoSignOut />
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="mobile__menu--header__links">
                <li>
                  <NavLink
                    className="mobile__menu--header__link"
                    to={"/signup"}
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink className="mobile__menu--header__link" to={"/login"}>
                    Sign In
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        )} */}
        {/* mobile menu li end */}
      </Container>
      <Container>
        <div className="search__inputs" onClick={() => setMan(!man)}>
          <div className="search__inputs--form">
            <IoBedOutline />
            <input
              onClick={() => setLocation(!location)}
              type="text"
              placeholder="Why are you going?"
            />
          </div>
          <div className="search__inputs--form">
            <SlCalender />
            <span>Check-in date — Check-out date</span>
          </div>
          <div className="search__inputs--form">
            <FiUser />
            <span>
              {adult} adults · {children} children · {room} room
            </span>
            <IoIosArrowDown />
          </div>
          <div className="search__inputs--form">
            <button>Search</button>
          </div>
        </div>
        {man && (
          <div className="peoples">
            <div className="people__container">
              <div className="people">
                <p>Adults</p>
                <div className="people__buttons">
                  <button
                    onClick={handleAdultIncrement}
                    className="people__button incre"
                  >
                    -
                  </button>
                  <span>{adult}</span>
                  <button
                    onClick={() => setAdult(adult + 1)}
                    className="people__button decre"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="people">
                <p>Children</p>
                <div className="people__buttons">
                  <button
                    onClick={handleChildrenIncrement}
                    className="people__button incre"
                  >
                    -
                  </button>
                  <span>{children}</span>
                  <button
                    onClick={() => setChildren(children + 1)}
                    className="people__button decre"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="people">
                <p>Rooms</p>
                <div className="people__buttons">
                  <button
                    onClick={handleRoomIncrement}
                    className="people__button incre"
                  >
                    -
                  </button>
                  <span>{room}</span>
                  <button
                    onClick={() => setRoom(room + 1)}
                    className="people__button decre"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => setMan(false)}
              className="people__button--done"
            >
              Done
            </button>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
