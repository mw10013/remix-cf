# Remix-Cf

## Deployment

- https://remix-cf-anq.pages.dev
- Deployed to [Cloudflare Pages](https://developers.cloudflare.com/pages/).
- Use [Deploy a Remix Site Guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/#deploying-with-cloudflare-pages).
- Environment Variable (for Production and Preview)
  - NODE_VERSION to 18.17.1
  - Reference: https://supabase.com/dashboard/project/gesbzrinbwxyfkybncku/settings/api
  - SUPABASE_URL
  - SUPABASE_ANON_KEY
  - SUPABASE_SERVICE_ROLE_KEY
  - ENVIRONMENT (production or preview)
  - OPENAI_API_KEY
- Redox
  - Developer | Endpoints | Create Endpoint
    - Name: local
    - Redox API Endpoint: [cloudflare tunnel to localhost from tunnel script in package.json]
    - Verification Token: [REDOX_VERIFICATION_TOKEN env var]
    - Verification Method: POST

### Reference

- Workers & Pages | KV | Create a namespace
  - Add Namespace Name KV
  - Settings | Functions | KV namespace bindings | Production | Add binding
  - Variable name KV = KV namespace KV
  - Also do this for Preview
- R2 | Overview | Create bucket
  - Bucket name smn-r2
  - Settings | Functions | R2 bucket bindings | Production | Add binding
    - Variable name SMN_R2 = Bucket smn-r2
    - Also do this for Preview
- Custom Domains
  - Set up a custom domain: namewave.io
- Supabase Dashboard
  - Project Settings | Auth | User Signups | Allow new users to sign up: on
  - Authentication | URL Configuration
    - Site URL: https://namewave.io
    - Redirect URLs: https://\*.namewave.pages.dev/\*\*

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

You will be utilizing Wrangler for local development to emulate the Cloudflare runtime. This is already wired up in your package.json as the `dev` script:

```sh
# start the remix dev server and wrangler
npm run dev
```

Open up [http://127.0.0.1:8788](http://127.0.0.1:8788) and you should be ready to go!

## Deployment

Cloudflare Pages are currently only deployable through their Git provider integrations.

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages) and after verifying your email address with Cloudflare, go to your dashboard and follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything).

Configure the "Build command" should be set to `npm run build`, and the "Build output directory" should be set to `public`.
