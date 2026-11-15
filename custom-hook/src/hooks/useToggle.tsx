import { useState } from "react";

export default function UseToggleHook() {
  const [value, setValue] = useState(false);

  const toggleFunction = () => {
    setValue((prev) => !prev);
  };

  return [value, toggleFunction];
}
