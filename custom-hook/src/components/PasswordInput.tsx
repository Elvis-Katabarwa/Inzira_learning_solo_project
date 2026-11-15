import { useState } from "react";
import useToggleHook from "../hooks/useToggle";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = () => {
  const [isVisible, toggleVisibility] = useToggleHook();
  const [password, setPassword] = useState<string>("");
  return (
    <div className="w-1/3 h-fit flex flex-col gap-1">
      <label className="text-base font-medium ">Password</label>
      <div className="w-full flex border border-gray-400 rounded-md overflow-hidden">
        <input
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full px-3 py-1 focus:outline-none"
        />
        <button
          className="flex items-center justify-center bg-blue-500 px-2 py-1 rounded-r-sm"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeOff size={16} color="#fff" />
          ) : (
            <Eye size={16} color="#fff" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
