import React from "react";

export default function facebook() {
  return (
    <div
      onClick={() =>
        (window.location.href = "https://www.facebook.com/lehung6000")
      }
    >
      Facebook
    </div>
  );
}
