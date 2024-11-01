import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "$GUAC - Tastiest KRC20 Token";
export const size = {
  width: 1200,
  height: 630,
};

// Add these configurations
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to bottom, #00ff87, #60efff)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div style={{ fontSize: "160px" }}>🥑</div>
        <div style={{ fontWeight: "bold" }}>$GUAC</div>
        <div style={{ fontSize: "48px" }}>Tastiest KRC20 Token</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
