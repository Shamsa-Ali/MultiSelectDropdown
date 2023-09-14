import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

export const MultiSelectDropdown = ({ options }) => {
  const [selected, setSelected] = useState([]);
  const [prevSelected, setPrevSelected] = useState([]);

  const handleSelect = (selectedOptions) => {
    setSelected(selectedOptions);
  };

  const handleSave = () => {
    // Store the previous selected options
    setPrevSelected([...selected]);

    // Handle your logic here to save the selected options
    console.log("Selected Options:", selected);
  };

  const handleUndo = () => {
    // Restore the previously selected options
    setSelected([...prevSelected]);
  };

  return (
    <div>
      <MultiSelect
        options={options}
        value={selected}
        onChange={handleSelect}
        labelledBy="Select"
      />
      <div>
        <button onClick={handleSave}>Save Selection</button>
        <button onClick={handleUndo}>Undo Selection</button>
      </div>
    </div>
  );
};
