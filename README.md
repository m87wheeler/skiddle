# Welcome To My Skiddle App

Thanks for taking the time to take a look at the code for my Skiddle app!

Before proceeding, please note that `NEXT_PUBLIC_SKIDDLE_KEY` is a mandatory environment variable.

You can also see a build version of the app hosted on [Netlify](skiddle.netlify.app)

### Setup Development

```bash
cp .env.example .env
```

```bash
yarn
yarn dev
```

### Setup Production

```bash
cp .env.example .env
```

```bash
yarn build
yarn start
```

### Netlify Build

Pushing any changes to the main branch will trigger a rebuild on [Netlify](skiddle.netlify.app)
