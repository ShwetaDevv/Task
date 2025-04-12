import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SubmittedData = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>No data found.</p>
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          width: "600%",
          maxWidth: "600px",
        }}
      >
       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
    Submitted Data
  </h2>
        <table
          style={{
            width: "600%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                Field
              </th>
              <th
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(state).map(([key, value]) => (
              <tr key={key}>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </td>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Back button */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmittedData;
