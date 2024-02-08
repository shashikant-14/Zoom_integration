import React, { useState } from "react";
import ButtonsContainer from "./Buttons/ButtonsContainer";

import Table from "./Table/Table";

function Home() {
  const [dataFetched, setDataFetched] = useState(false);

  // Set data received from child component table switch button
  const handleDataReceived = (newData) => {
    console.log(" Handle Data received in Home.js", newData);
    setDataFetched(newData);
  };


  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "auto",
          flexDirection: "row",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: "auto" }}>
          {" "}
          <ButtonsContainer onDataReceived={handleDataReceived} />
        </div>

        <div style={{ margin: "auto" }}> 
        {" "}

        <Table shouldFetch={dataFetched} onRequestClearData={ ()=> setDataFetched(false)} /> 
        </div>

      </div>
    </>
  );
}

export default Home;