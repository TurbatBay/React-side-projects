import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories items={items} />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
