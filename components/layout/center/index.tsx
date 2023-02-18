import React, { useContext } from "react";
import MyContext from "components/contexts/todo";
import Contact from "components/tablet/contactLayout";
import Tecs from "components/tablet/tecsLayout"
import Project from "components/tablet/projectLayout";
import Portfolio from "components/tablet/portfolioLayout";


export default function Center() {
  const [,, name] = useContext(MyContext);

  return (
  <>
  {name === "Contact" && <Contact/>}
  {name === "Tecs" && <Tecs/>}
  {name === "Project" && <Project/>}
  {name === "Portfolio" && <Portfolio/>}
  </>
  );
}
