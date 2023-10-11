# Remix-Cf

## Deployment

- https://remix-cf-anq.pages.dev
- Deployed to [Cloudflare Pages](https://developers.cloudflare.com/pages/).
- Use [Deploy a Remix Site Guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/#deploying-with-cloudflare-pages).
- Environment Variable (for Production and Preview): .dev.vars.example
- Redox

  - Developer | API Keys | Create API Key
    - Name: mw
    - Key pairs | Generate your keys | Generate New API Keys
    - Download json public and private keys (JWK)
  - Developer | Endpoints | Create Endpoint
    - Name: local
    - Redox API Endpoint: [cloudflare tunnel to localhost from tunnel script in package.json]
    - Verification Token: [REDOX_ENDPOINT_VERIFICATION_TOKEN env var]
    - Verification Method: POST
  - D1

    - https://developers.cloudflare.com/pages/platform/functions/bindings/#d1-databases
    - Workers & Pages | D1 | Create database | Dashboard
      - Name: rcf_db
    - Workers & Pages | Settings | Functions | D1 database bindings | Production | Add binding
      - Variable name RCF_DB = rcf_db
      - Also do this for Preview

## D1

- May need to create wrangler.toml manually and set d1_database settings.

```
pnpm wrangler d1 execute rcf_db --file=./d1/schema.sql --local
pnpm wrangler d1 execute rcf_db --command='select * from users' --local
pnpm wrangler d1 execute rcf_db --command='pragma table_list' --local
pnpm wrangler d1 execute rcf_db --command='pragma table_info(users)' --local
```

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
