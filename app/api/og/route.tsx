import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Example personal blog
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
