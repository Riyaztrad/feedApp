import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import { showCreateDialog } from "generic";
export const FloatingAddButton = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        position: "fixed",
        bottom: 10,
        right: 10,
      }}
    >
      <Fab
        onClick={() => {
          dispatch(showCreateDialog({ isVisible: true }));
        }}
        style={{ backgroundColor: "#24b877",height:40,width:40 }}
        aria-label="add"
      >
        <AddIcon style={{ color: "#fff" }} />
      </Fab>
    </div>
  );
};
