import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: "50px", backgroundColor: "#f2f2f2" }}>
      <img src="/images/home-image.jpg" alt="Home Image" style={{ width: "100%", height: "800px" }} />
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1 style={{ color: "green" }}>Welcome to Our Homeless Shelter</h1>
        <p style={{ color: "green" }}>Our shelter provides a safe and warm environment for homeless individuals and families. We offer temporary housing, meals, and support services to help people get back on their feet. Please contact us if you or someone you know needs help.</p>
      </div>
    </div>
  );
};

export default Home;
