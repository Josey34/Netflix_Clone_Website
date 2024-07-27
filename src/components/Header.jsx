import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiBell, BiLogOut, BiSearch, BiUser } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const [switchBtn, setSwitchBtn] = useState(false);
  const [nav, setNav] = useState(false);
  const [hover, setHover] = useState(false);
  const [hoverAcc, setHoverAcc] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleSwitchBtn = () => {
    setSwitchBtn(true);
  };

  const handleSearchBtn = (e) => {
    e.preventDefault();
    setSearch(search);
  };

  const handleaNav = () => {
    setNav(!nav);
  };

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const onHoverAcc = () => {
    setHoverAcc(true);
  };

  const onLeaveAcc = () => {
    setHoverAcc(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed h-[80px] flex justify-between items-center cursor-pointer w-full mx-auto transition-colors duration-300 ${scroll ? 'bg-black' : 'bg-transparent'}`}
      >
        <Link to="/">
          <h1 className="text-2xl font-bold primary-color ml-4 text-red-600">
            NETFLIX
          </h1>
        </Link>
        <ul className="hidden md:flex text-sm ">
          <li className="p-5 hover:duration-500 hover:text-slate-300 cursor-pointer">
            Home
          </li>
          <li className="p-5 hover:duration-500 hover:text-slate-300 cursor-pointer">
            TV Shows
          </li>
          <li className="p-5 hover:duration-500 hover:text-slate-300 cursor-pointer">
            Movies
          </li>
          <li className="p-5 hover:duration-500 hover:text-slate-300 cursor-pointer">
            Popular
          </li>
        </ul>

        <div className="block md:hidden mr-6" onClick={handleaNav}>
          {nav ? (
            <h3 className="flex items-center gap-3">
              Browse
              <AiOutlineClose className="text-[14px]" />
            </h3>
          ) : (
            <h3 className="flex items-center gap-3">
              Browse
              <AiOutlineMenu className="text-[14px]" />
            </h3>
          )}

          <div
            className={
              nav
                ? "fixed mt-2 bg-[#202121] ease-in-out duration-200"
                : "fixed left-[-100%]"
            }
          >
            <ul className="p-5 text-md">
              <li className="p-2">
                <a href="/">Home</a>
              </li>
              <li className="p-2">
                <a href="/">Tv Shows</a>
              </li>
              <li className="p-2">
                <a href="/">Movie</a>
              </li>
              <li className="p-2">
                <a href="/">Popular</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-2xl flex gap-6 mr-5">
          <button onClick={handleSwitchBtn} onMouseOut={() => setSwitchBtn(false)}>
            {!switchBtn ? (
              <BiSearch />
            ) : (
              <>
                <form className="searchForm" onSubmit={handleSearchBtn}>
                  <label htmlFor="search" className="hidden">
                    Titles, people, genres
                  </label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="bg-slate-900 border border-white placeholder:text-sm placeholder:flex text-[15px] w-full pl-3"
                    placeholder="Titles, people, genres"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                  />
                </form>
              </>
            )}
          </button>
          <button onMouseEnter={onHover} onMouseLeave={onLeave}>
            <BiBell />
            {hover ? (
              <div className="mt-2 bg-[#202121] ease-in-out duration-500 flex absolute right-[90px] h-[100px] border-t-2 border-white">
                <img
                  src="https://placehold.co/600x400"
                  alt="image"
                  className="flex justify-center items-center mr-4 py-2 pl-2"
                ></img>
                <div className="grid text-left pr-[100px] -space-y-10 items-center">
                  <p className="text-[17px]">New Arrival</p>
                  <p className="text-[17px]">Wonderland</p>
                  <p className="text-sm">Today</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </button>
          <button onMouseEnter={onHoverAcc} onMouseLeave={onLeaveAcc}>
            <BiUser />
            {hoverAcc ? (
              <div className="mt-2 bg-[#202121] ease-in-out duration-500 absolute h-[200px] w-40 right-8 grid grid-cols-1">
                <div className="pt-2 border border-slate-800 space-y-3">
                  <div className="items-center flex flex-col-1 gap-3 text-[18px] justify-center">
                    <CgProfile />
                    <h1>Account 1</h1>
                  </div>
                  <div className="items-center flex flex-col-1 gap-3 text-[18px] justify-center">
                    <CgProfile />
                    <h1>Account 2</h1>
                  </div>
                  <div className="items-center flex flex-col-1 gap-3 text-[18px] justify-center">
                    <CgProfile />
                    <h1>Account 3</h1>
                  </div>
                </div>
                <div className="items-center flex flex-col-1 gap-3 text-[16px] border border-slate-800 text-center justify-center">
                  <BiLogOut />
                  <h1>Sign Out</h1>
                </div>
              </div>
            ) : (
              ""
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
