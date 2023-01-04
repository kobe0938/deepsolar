import React, { useEffect, useRef } from 'react';
const {tableau} = window;

const TableauComComparision = () => {
  const ref = useRef(null);
  const url =  "https://public.tableau.com/views/Book_augumented_2/Dashboard2?:language=en-US&:display_count=n&:origin=viz_share_link";
  const options = {
    device: "desktop",
  }

  function initViz(){
    new tableau.Viz(ref.current,url,options);
  }
  
  useEffect(() => {
    initViz();
  }, []);

  return (
    <div ref={ref} style={{height:'100%', alignContent:'center'}}> </div>
  );
}

export default TableauComComparision;