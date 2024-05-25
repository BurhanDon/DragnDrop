import React, { useRef } from "react";
import "./styles.css";
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
/* also can be done like this:
const InputFields:React.FC<props> = ({ todo, setTodo }) => {} */
const InputFields = ({ todo, setTodo, handleAdd }: props) => {
  //using hooks with typescript is alike this:
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="Enter Task"
        className="input__box"
      />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputFields;
