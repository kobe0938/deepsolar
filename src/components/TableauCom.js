import React, { useEffect, useRef } from 'react';
const {tableau} = window;

const TableauCom = () => {
  const ref = useRef(null);
  const url =  "https://10az.online.tableau.com/t/xiaokunchen0/views/Book5_from_tableau_cloud/Dashboard1?:render=true";
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