import React from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import "../../styles/header.css";

function ContainerHeader() {
  return (
    <div className="container">
      <Header className="item" />
      <Search className="item"/>
    </div>
  );
}

export default ContainerHeader;
