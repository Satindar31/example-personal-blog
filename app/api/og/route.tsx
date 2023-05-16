import { ImageResponse } from "@vercel/og";
import Image from "next/image";
import { NextRequest } from "next/server";
import { Blog } from "@/interfaces/Blog";

export const runtime = "edge";

export function GET<Props>(request: NextRequest, blog: Blog) {
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
