import React, { useState, useEffect } from "react";
import api from "../utils/api";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    api()
      .get('/api/colors')
      .then(res => {
        console.log(res);
        setColorList(
          res.data
        )
      })
      .catch(err => {
        console.log('Error with getting colors', err)
      })
  }, [])

  if (colorList) {
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      {/* {colorList.map(color => {
        return (
          <div>
            <h1>COLORS</h1>
          </div>
        )
      })} */}
    </>
  )};
};

export default BubblePage;
