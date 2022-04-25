# SvelteKit on the edge

A demo [SvelteKit](https://kit.svelte.dev) app running on [Vercel Edge Functions](https://vercel.com/features/edge-functions), which run close to your users to enable dynamic server-side rendering at the speed of static content.

## How to enable edge functions in your SvelteKit app deployed to Vercel

- Update [svelte.config.js](/svelte.config.js) with a supported [adapter](https://kit.svelte.dev/docs/adapters)
> While the Vercel Build Output API is in beta, you'll need to add the `ENABLE_VC_BUILD` environment variable with a value of `1` to your project on [vercel.com](https://vercel.com). 
- Use your package manager to install [`@sveltejs/adapter-vercel`](https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel)
- Update [svelte.config.js](/svelte.config.js) to use `adapter-vercel` instead of the default `adapter-auto`
- Pass the `edge: true` option to the adapter




## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
