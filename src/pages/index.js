import { createContext, React, useState } from "react"
import Head from "next/head"
import Header from "../components/header"
import Countdown from "../components/countdown"
import Important from "../components/important"
import Map from "../components/map"
import Contact from "../components/contact"
import Footer from "../components/footer"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import ReactSwitch from "react-switch"


export const ThemeContext = createContext(null);



const Home = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (


    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      <div className="" id={theme}>


       
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>imomotimi</title>

        </Head>
        <div className="Switch">
          <ReactSwitch id="toggle"
            onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <Header theme={theme} />
        <Countdown theme={theme}/>
        <Important />
        <Map theme={theme} />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default Home;
