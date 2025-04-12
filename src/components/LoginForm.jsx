import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name must contain only letters";
    }
    
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phone) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Must be 10 digits";

    const wordCount = formData.message.trim().split(/\s+/).filter(Boolean).length;
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (wordCount < 20) {
      newErrors.message = "Message must be at least 20 words";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/submitted", { state: formData });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "200vh",
      background: "#f0f2f5"
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px"
      }}>
        <h2 style={{ textAlign: "center", color: "black" }}>Login Form</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name" style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color:"black" }}>
              Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                backgroundColor: "white",
                color: "black"
              }}
            />
            {errors.name && <span style={{ color: "red", fontSize: "12px" }}>{errors.name}</span>}
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color:"black"  }}>
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                backgroundColor: "white",
                color: "black"
              }}
            />
            {errors.email && <span style={{ color: "red", fontSize: "12px" }}>{errors.email}</span>}
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="phone" style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color:"black"  }}>
              Phone No:
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                backgroundColor: "white",
                color: "black"
              }}
            />
            {errors.phone && <span style={{ color: "red", fontSize: "12px" }}>{errors.phone}</span>}
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="message" style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color:"black"  }}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                height: "80px",
                backgroundColor: "white",
                color: "black"
              }}
            />
            {errors.message && <span style={{ color: "red", fontSize: "12px" }}>{errors.message}</span>}
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
