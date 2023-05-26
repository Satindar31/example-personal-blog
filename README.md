This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
You can demo it at [https://example-personal-blog.vercel.app/](https://example-personal-blog.vercel.app/)


## Getting Started
First clone the repo with
```bash
git clone https://github.com/satindar31/example-personal-blog.git
```
Then copy the enviorment variables from .env.example to .env.local using 
```bash
cp .env.example > .env.local
```
You can then install the packages with
```bash
npm install

# or
yarn add

#or
pnpm add
```

Lastly, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

This demo was helped to allow people to understand basic typescript and NextJS fundamentals

## Deploy on Vercel

The easiest way to deploy your Next.js app is to deploy with vecel  
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsatindar31%2Fexample-personal-blog&env=PASSCODE&envDescription=The%20passcode%20enviorment%20variable%20is%20the%20variable%20which%20is%20checked%20for%20being%20correct%20on%20the%20backend%20when%20creating%20a%20new%20post%20from%20%2Fnew-post&project-name=personal-blog&repository-name=my-amazing-blog&redirect-url=https%3A%2F%2Fgithub.com%2Fsatindar31%2Fexample-personal-blog&demo-title=Example%20blog&demo-description=Created%20with%20NextJS&demo-url=example-personal-blog.vercel.app%2F&demo-image=example-personal-blog.vercel.app%2Fapi%2Fog)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
