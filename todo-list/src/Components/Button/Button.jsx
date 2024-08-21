import './Button.css'

export default function Button({ onClick }) {
    return (
      <div className="buttonBox">
        <button onClick={onClick} className="buttonAdd">
        New task
        </button>
      </div>
    );
  }
  