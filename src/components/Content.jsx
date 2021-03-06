import React, { useState } from "react";
import Tasks from "./Tasks";
import Sidebar from "./Sidebar";

const Content = () => {
  const [selectedTab, setSelectedTab] = useState("INBOX");
  //console.log({se})
  return (
    <section className="content">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <Tasks />
    </section>
  );
};
export default Content;
