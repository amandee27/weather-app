import { useState } from "react";

import "./App.css";
import logo from "./assets/icons/logo.svg";
import unitsIcon from "./assets/icons/icon-units.svg";
import dropdownIcon from "./assets/icons/icon-dropdown.svg";
import searchIcon from "./assets/icons/icon-search.svg";
import bgImage from "./assets/icons/bg-today-large.svg";
import sunnyIcon from "./assets/icons/icon-sunny.webp";
import drizzleIcon from "./assets/icons/icon-drizzle.webp";
import fogIcon from "./assets/icons/icon-fog.webp";
import overCastIcon from "./assets/icons/icon-overcast.webp";
import partlyCloudyIcon from "./assets/icons/icon-partly-cloudy.webp";
import rainIcon from "./assets/icons/icon-rain.webp";
import snowIcon from "./assets/icons/icon-snow.webp";
import stormIcon from "./assets/icons/icon-storm.webp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="bg-[var(--color-neutral-blue)] h-full max-w-full
    "
    >
      <header className="px-20 py-10">
        <nav className="flex justify-between items-center">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <button className="flex gap-[10px] items-center text-white bg-gray-600 w-[119px] h-[19px] px-[16px] py-[12px] rounded-md">
              <img className="w-[16px] h-[16px]" src={unitsIcon} />
              <span className="text-md">Units</span>
              <img className="w-[12px] h-[18px]" src={dropdownIcon} />
            </button>
          </div>
        </nav>
      </header>
      <h1 className="text-white text-6xl">How's the sky looking today?</h1>
      <div className="px-20 py-10 w-[1440px] h-full ">
        <div className="flex justify-center mb-8">
          <div className="relative w-[656px] h-[56px] flex items-center ">
            <img
              className="absolute left-5 top-1/2 transform -translate-y-1/2 w-[16px] h-[16px]"
              src={searchIcon}
            ></img>
            <input
              type="text"
              id="search-bar"
              placeholder="Search for a place..."
              className="bg-[var(--color-bg-search-box)] ps-20 text-[var(--color-text)] w-[526px] h-[56px] rounded-lg"
            />

            <button className="bg-[var(--color-search-button)] text-[var(--color-text)] rounded-lg mx-5 px-5 py-2">
              Search
            </button>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 h-full">
            <div className="col-span-2 w-[800px]">
              <div className="grid grid-rows-3 gap-4">
                <div
                  className="row-span-2 bg-cover h-[286px] "
                  style={{ backgroundImage: `url(${bgImage})` }}
                >
                  <div className="flex items-center h-full px-6">
                    <div className="flex flex-col items-start  w-full">
                      <h1 className="text-white text-xl font-bold">
                        Berlin,Germany
                      </h1>
                      <p className="text-white">
                        {new Date().toLocaleDateString("en-US", {
                          weekday: "long", // Tuesday
                          month: "short", // Aug
                          day: "numeric", // 5
                          year: "numeric", // 2025
                        })}
                      </p>
                    </div>
                    <div className="flex flex-row items-center w-full justify-end ">
                      <div className="mr-10">
                        <img className="w-[80px] h-[80px]" src={sunnyIcon} />
                      </div>
                      <div className="flex">
                        <h1 className="text-white text-7xl italic font-semibold">
                          20°
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-span-1">
                  <div className="flex flex-row justify-between text-left">
                    <div className="bg-[var(--color-bg-items)] w-[182px] h-[118px] rounded-xl border-1 border-[var(--color-color-stroke)] p-5">
                      <p className="text-[var(--color-text-widgets)]">
                        Feels like
                      </p>
                      <p className="text-[var(--color-text)] text-xl mt-5">
                        18°
                      </p>
                    </div>
                    <div className="bg-[var(--color-bg-items)] w-[182px] h-[118px] rounded-xl border-1 border-[var(--color-color-stroke)] p-5">
                      <p className="text-[var(--color-text-widgets)]">
                        Humidity
                      </p>
                      <p className="text-[var(--color-text)] text-xl mt-5">
                        46%
                      </p>
                    </div>
                    <div className="bg-[var(--color-bg-items)] w-[182px] h-[118px] rounded-xl border-1 border-[var(--color-color-stroke)] p-5">
                      <p className="text-[var(--color-text-widgets)]">Wind</p>
                      <p className="text-[var(--color-text)] text-xl mt-5">
                        14 km/h
                      </p>
                    </div>
                    <div className="bg-[var(--color-bg-items)] w-[182px] h-[118px] rounded-xl border-1 border-[var(--color-color-stroke)] p-5">
                      <p className="text-[var(--color-text-widgets)]">
                        Precipitation
                      </p>
                      <p className="text-[var(--color-text)] text-xl mt-5">
                        0 mm
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white text-left">Daily forcast</h3>
                <div className="flex flex-row justify-between pt-4 text-[var(--color-text)]">
                  <div className=" w-[100.57px] h-[165px] bg-[var(--color-bg-search-box)] border-1 border-[var(--color-color-stroke)] p-2 rounded-xl flex flex-col justify-between">
                    <div>
                      <p className="">Tue</p>
                    </div>
                    <div className="flex justify-center">
                      <img className="w-[60px] h-[60px]" src={rainIcon} />
                    </div>
                    <div className="flex flex-row justify-between">
                      <div>20°</div>
                      <div>14°</div>
                    </div>
                  </div>
                  <div className="w-[100.57px] h-[165px] bg-[var(--color-bg-search-box)] border-1 border-[var(--color-color-stroke)] p-2 rounded-xl flex flex-col justify-between">
                    <div>
                      <p className="">Wed</p>
                    </div>
                    <div className="flex justify-center">
                      <img className="w-[60px] h-[60px]" src={drizzleIcon} />
                    </div>
                    <div className="flex flex-row justify-between">
                      <div>21°</div>
                      <div>15°</div>
                    </div>
                  </div>
                  <div className="w-[100.57px] h-[165px] bg-[var(--color-bg-search-box)] border-1 border-[var(--color-color-stroke)] p-2 rounded-xl flex flex-col justify-between">
                    <div>
                      <p className="">Thu</p>
                    </div>
                    <div className="flex justify-center">
                      <img
                        className="w-[60px] h-[60px]"
                        src={partlyCloudyIcon}
                      />
                    </div>
                    <div className="flex flex-row justify-between">
                      <div>24°</div>
                      <div>14°</div>
                    </div>
                  </div>
                  <div className="w-[100.57px] h-[165px] bg-[var(--color-bg-search-box)] border-1 border-[var(--color-color-stroke)] p-2 rounded-xl flex flex-col justify-between">
                    <div>
                      <p className="">Fri</p>
                    </div>
                    <div className="flex justify-center">
                      <img className="w-[60px] h-[60px]" src={sunnyIcon} />
                    </div>
                    <div className="flex flex-row justify-between">
                      <div>25°</div>
                      <div>13°</div>
                    </div>
                  </div>
                  <div className="w-[100.57px] h-[165px] bg-[var(--color-bg-search-box)] border-1 border-[var(--color-color-stroke)] p-2 rounded-xl flex flex-col justify-between">
                    <div>
                      <p className="">Sat</p>
                    </div>
                    <div className="flex justify-center">
                      <img className="w-[60px] h-[60px]" src={stormIcon} />
                    </div>
                    <div className="flex flex-row justify-between">
                      <div>21°</div>
                      <div>15°</div>
                    </div>
                  </div>
                  <div className="w-[100.57px] h-[165px] bg-[var(--color-bg-search-box)] border-1 border-[var(--color-color-stroke)] p-2 rounded-xl flex flex-col justify-between">
                    <div>
                      <p className="">Sun</p>
                    </div>
                    <div className="flex justify-center">
                      <img className="w-[60px] h-[60px]" src={snowIcon} />
                    </div>
                    <div className="flex flex-row justify-between">
                      <div>25°</div>
                      <div>16°</div>
                    </div>
                  </div>
                  <div className="w-[100.57px] h-[165px] bg-[var(--color-bg-search-box)] border-1 border-[var(--color-color-stroke)] p-2 rounded-xl flex flex-col justify-between">
                    <div>
                      <p className="">Mon</p>
                    </div>
                    <div className="flex justify-center">
                      <img className="w-[60px] h-[60px]" src={fogIcon} />
                    </div>
                    <div className="flex flex-row justify-between">
                      <div>24°</div>
                      <div>15°</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-[var(--color-bg-search-box)] border border-[var(--color-color-stroke)] rounded-xl flex flex-col items-center p-4  h-full">
              <div className="w-[336px] h-[37px]  flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-white text-left">Hourly forcast</h3>
                </div>
                <div className="justify-items-end">
                  <button className="flex gap-[10px] items-center justify-center text-white bg-[var(--color-color-stroke)] w-[129px] h-[37px] rounded-md">
                    <span className="text-md">Tuesday</span>
                    <img className="w-[12px] h-[18px]" src={dropdownIcon} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between w-[336px] h-full">
                <div className="h-[60px] bg-[var(--color-forcast-hoyrlybg)] border border-[var(--color-color-stroke)] rounded-xl flex flex-row justify-between items-center p-2 text-[var(--color-text)]">
                  <div className="flex flex-row items-center">
                    <img className="w-[60px] h-[60px]" src={overCastIcon} />
                    <p>3 PM</p>
                  </div>

                  <div>
                    <p>20°</p>
                  </div>
                </div>
                <div className="h-[60px] bg-[var(--color-forcast-hoyrlybg)] border border-[var(--color-color-stroke)] rounded-xl flex flex-row justify-between items-center p-2 text-[var(--color-text)]">
                  <div className="flex flex-row items-center">
                    <img className="w-[60px] h-[60px]" src={partlyCloudyIcon} />
                    <p>4 PM</p>
                  </div>

                  <div>
                    <p>20°</p>
                  </div>
                </div>
                <div className="h-[60px] bg-[var(--color-forcast-hoyrlybg)] border border-[var(--color-color-stroke)] rounded-xl flex flex-row justify-between items-center p-2 text-[var(--color-text)]">
                  <div className="flex flex-row items-center">
                    <img className="w-[60px] h-[60px]" src={sunnyIcon} />
                    <p>5 PM</p>
                  </div>

                  <div>
                    <p>20°</p>
                  </div>
                </div>
                <div className="h-[60px] bg-[var(--color-forcast-hoyrlybg)] border border-[var(--color-color-stroke)] rounded-xl flex flex-row justify-between items-center p-2 text-[var(--color-text)]">
                  <div className="flex flex-row items-center">
                    <img className="w-[60px] h-[60px]" src={overCastIcon} />
                    <p>6 PM</p>
                  </div>

                  <div>
                    <p>20°</p>
                  </div>
                </div>
                <div className="h-[60px] bg-[var(--color-forcast-hoyrlybg)] border border-[var(--color-color-stroke)] rounded-xl flex flex-row justify-between items-center p-2 text-[var(--color-text)]">
                  <div className="flex flex-row items-center">
                    <img className="w-[60px] h-[60px]" src={snowIcon} />
                    <p>7 PM</p>
                  </div>

                  <div>
                    <p>20°</p>
                  </div>
                </div>
                <div className="h-[60px] bg-[var(--color-forcast-hoyrlybg)] border border-[var(--color-color-stroke)] rounded-xl flex flex-row justify-between items-center p-2 text-[var(--color-text)]">
                  <div className="flex flex-row items-center">
                    <img className="w-[60px] h-[60px]" src={fogIcon} />
                    <p>8 PM</p>
                  </div>

                  <div>
                    <p>20°</p>
                  </div>
                </div>
                <div className="h-[60px] bg-[var(--color-forcast-hoyrlybg)] border border-[var(--color-color-stroke)] rounded-xl flex flex-row justify-between items-center p-2 text-[var(--color-text)]">
                  <div className="flex flex-row items-center">
                    <img className="w-[60px] h-[60px]" src={snowIcon} />
                    <p>9 PM</p>
                  </div>

                  <div>
                    <p>20°</p>
                  </div>
                </div>
                <div className="h-[60px] bg-[var(--color-forcast-hoyrlybg)] border border-[var(--color-color-stroke)] rounded-xl flex flex-row justify-between items-center p-2 text-[var(--color-text)]">
                  <div className="flex flex-row items-center">
                    <img className="w-[60px] h-[60px]" src={overCastIcon} />
                    <p>10 PM</p>
                  </div>

                  <div>
                    <p>20°</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
