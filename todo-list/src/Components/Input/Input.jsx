import { FaMagnifyingGlass } from 'react-icons/fa6';
import './Input.css';

export default function Input({
    placeholder,
    value,
    onChange
}) {
    return (
        <div className="inputBox">
            <div className="iconBox">
                <FaMagnifyingGlass />
            </div>
            <input
                value={value}
                onChange={onChange}
                className="searchInput"
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
}