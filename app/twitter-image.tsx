import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "$GUAC - Launch, Mint , and Grow on KRC20";
export const size = {
  width: 1200,
  height: 630,
};

// Add these configurations
export const contentType = "image/png";

export default function Image() {
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
        <img
          src="https://www.guac.site/img_04.png"
          alt="GUAC"
          style={{
            width: "200px",
            height: "200px",
            marginBottom: "20px",
          }}
        />
        <div style={{ fontWeight: "bold" }}>$GUAC</div>
        <div style={{ fontSize: "48px" }}>Launch, Mint , and Grow on KRC20</div>
      </div>
    ),
    {
      ...size,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    }
  );
}
