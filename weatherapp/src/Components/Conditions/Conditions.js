import React from "react";
import "./Conditions.css";

const conditions = (props) => {
  return (
    <div className="Wrapper">
      {props.error && (
        <small className="Small">Please enter a valid city.</small>
      )}
      {props.loading && <div className="Loader">Loading...</div>}

      {props.responseObj.cod === 200 ? (
        <div>
          <p>
            <strong style={{ color: "#fff", fontSize: "30px" }}>
              {props.responseObj.name}
            </strong>
          </p>
          <p style={{ color: "#fff", fontSize: "22px" }}>
            It is currently {Math.round(props.responseObj.main.temp - 273)}°C
            degrees out with {props.responseObj.weather[0].description}.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default conditions;
