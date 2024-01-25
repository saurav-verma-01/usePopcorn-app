import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
import StarRating from "./StarRating.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarRating defaultRating={4} />
    <StarRating defaultRating={9} maxRating={10} size={24} color="purple" />
    <StarRating defaultRating={13} maxRating={15} classNme="test" />
    <StarRating
      defaultRating={3}
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
  </React.StrictMode>
);
