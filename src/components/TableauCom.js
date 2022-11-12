import React, { useEffect, useRef } from 'react';
const {tableau} = window;

const TableauCom = () => {
  const ref = useRef(null);
  const url =  "https://public.tableau.com/views/Book5_16680430455690/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link";
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

export default TableauCom;