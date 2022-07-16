import React from "react";
import { SearchUrl } from "./components/feature/Search-url";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

export const App = () => {
  return (
    <>
      <Header title="Anime Search" />
      <SearchUrl />
      <Footer />
    </>
  )
};
