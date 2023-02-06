import React from "react";

export default function AppCard() {
  return (
    <>
      <Card>
        <p>card1</p>
      </Card>
      <Card>
        <h2>Card2</h2>
        <p>설명2</p>
      </Card>
    </>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: "20px",
        color: "white",
        minHeight: "200px",
        maxWidth: "200px",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}ㄹ
    >
      {children}
    </div>
  );
}
