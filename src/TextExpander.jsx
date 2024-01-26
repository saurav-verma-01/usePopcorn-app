import { useState } from "react";

const TextExpander = ({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show...",
  collapseButtonText = "...Hide",
  buttonColor = "#00aadd",
  expanded = false,
  className = "",
}) => {
  const btnStyle = {
    border: "none",
    backgroundColor: buttonColor,
    color: "#fff",
    padding: ".5rem 2rem",
    fontWeight: "bold",
    cursor: "pointer",
  };
  const [showText, setShowText] = useState(expanded);
  const showMsg = showText
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ");
  return (
    <div className={className}>
      {showMsg}
      <button style={btnStyle} onClick={() => setShowText((prev) => !prev)}>
        {showText ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

export default TextExpander;
