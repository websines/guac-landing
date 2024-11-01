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

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom, #00ff87, #60efff)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          fontFamily: "Space_Grotesk",
        }}
      >
        <img
          src="https://www.guac.site/img_04.png"
          alt="GUAC"
          style={{
            width: "400px",
            height: "400px",
            marginBottom: "30px",
          }}
        />
        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          $GUAC
        </div>
        <div
          style={{
            fontSize: "36px",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: "1.2",
          }}
        >
          Launch, Mint, and Grow on KRC20
        </div>
      </div>
    ),
    {
      ...size,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
      fonts: [
        {
          name: "Space_Grotesk",
          data: await fetch(
            "https://fonts.googleapis.com/s/spacegrotest/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUXsrPMBTTA.woff"
          ).then((res) => res.arrayBuffer()),
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
