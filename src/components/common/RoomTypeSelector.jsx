/* eslint-disable react/prop-types */
import React from "react";

const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
  const [roomTypes, setRoomTypes] = React.useState([""]);
  const [showNewRoomTypeInput, setShowNewRoomTypeInput] = React.useState(false);
  const [newRoomType, setNewRoomType] = React.useState("");

  const handleAddNewRoomType = () => {
    if (newRoomType !== "") {
      setRoomTypes([...roomTypes, newRoomType]);
      setNewRoomType("");
    }
  };

  return (
    <div>
      <select
        required
        className="form-select"
        name="roomType"
        value={newRoom.roomType}
        onChange={(e) => {
          if (e.target.value === "Add New") {
            setShowNewRoomTypeInput(true);
          } else {
            setShowNewRoomTypeInput(false);
            handleRoomInputChange(e);
          }
        }}
      >
        <option value="">Select a room type</option>
        <option value={"Add New"}>Add New</option>
        <option value={"Host"}>Host</option>
      </select>
      {showNewRoomTypeInput && (
        <div className="mt-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter New Room Type"
              value={newRoomType}
              onChange={(e) => setNewRoomType(e.target.value)}
            ></input>
            <button
              className="btn btn-hotel"
              type="button"
              onClick={handleAddNewRoomType}
            >
              {" "}
              Add{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomTypeSelector;
