import React from "react";
import UnresolvedItem from "./UnresolvedItem";
import logo from "../warning.png";

function Unresolved() {
  return (
    <div>
      <UnresolvedItem
        text="David's documents need manual review"
        icon={logo}
      ></UnresolvedItem>
    </div>
  );
}

export default Unresolved;
