# SvelteKit on the edge

A demo [SvelteKit](https://kit.svelte.dev) app running on [Vercel Edge Functions](https://vercel.com/features/edge-functions), which run close to your users to enable dynamic server-side rendering at the speed of static content.

## How to enable edge functions in your SvelteKit app deployed to Vercel

- Use your package manager to install [`@sveltejs/adapter-vercel`](https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel)
- Update [svelte.config.js](/svelte.config.js) to use `adapter-vercel` instead of the default `adapter-auto`
- Pass the `runtime: 'edge'` option to the adapter

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Deploying

The easiest way to deploy your app is to link the repo to your Vercel account. Alternatively, you can create a production build locally...

```
npm run build
```

...and deploy the prebuilt app to Vercel:

```
vc deploy --prebuilt
```
