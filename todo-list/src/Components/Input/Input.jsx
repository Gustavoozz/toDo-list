import { FaMagnifyingGlass } from 'react-icons/fa6';
import './Input.css'

export default function Input({
    placeholder,
    value,
    setValue
  }) {
    return (
      <div className="inputBox">
        <div className="iconBox">
        <FaMagnifyingGlass />
        </div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="searchInput"
          type="text"
          placeholder={placeholder}
        />

      </div>
    );
  }
  