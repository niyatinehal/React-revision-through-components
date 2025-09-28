import React, { useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";

interface Chip {
  id: number;
  label: string;
}

export const ChipsInput = () => {
  const [input, setInput] = useState<string>("");
  const [chips, setChips] = useState<Chip[]>([]);
  const [idCounter, setIdCounter] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && input.trim()) {
      const newChip: Chip = { id: idCounter, label: input.trim() };
      setChips([...chips, newChip]);
      setIdCounter(idCounter + 1);
      setInput("");
    }
  };

  const handleDelete = (id: any) => {
    const filterChips = chips.filter((chip) => chip.id != id);
    setChips(filterChips);
  };

  return (
    <div>
      <h1 className="my-4">Chips Input</h1>
      <input
        placeholder="Type a chip and press tab or enter"
        className="px-2 py-2 border-2"
        value={input}
        onChange={(e) => handleChange(e)}
        onKeyDown={handleKeyPress}
      />
      <div className="flex justify-between py-6">
        {chips.map((chip) => {
          return (
            <div className="flex align-center">
              <p>{chip.label}</p>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "Red",
                  cursor: "pointer",
                  border: "none",
                }}
                onClick={() => handleDelete(chip.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
