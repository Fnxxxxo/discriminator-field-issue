# POC 

> Discriminator field issue

See console for results.

## What I want
1. Find a base model in a npm repo. Then extend it in an app repo. The sub model should be of right type.
See `/packages/app-repo/store/chat-hr.model.ts`
2. Use base User and Chat entity to describe the common logic of chat. Use sub entities for specific cases.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
