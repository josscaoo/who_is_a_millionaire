import { useDispatch } from "react-redux";
import { setUsername } from "../redux/userSlice";
import { useRef } from "react";

export default function Start({ setUsernameStart }) {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleClick = () => {
    inputRef.current.value && dispatch(setUsername(inputRef.current.value));
    inputRef.current.value && setUsernameStart(inputRef.current.value);
  };

  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="Nhập tên của bạn"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Bắt Đầu
      </button>
    </div>
  );
}
