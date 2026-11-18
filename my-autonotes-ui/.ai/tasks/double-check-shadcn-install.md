## Todo

1. Check if I have installed shadcn correctly in my app

2. for the shadcn component that get generated, can you make the configuration so that the component gets created in `app/shared/components/shadcn`

3. When all looks good can you add the shadcn button

## completed

- Audited and corrected the shadcn configuration. Generated components now target `src/app/shared/components/shadcn`, and the configured stylesheet and aliases match the existing `src/app/shared` structure.
- Corrected the root TypeScript `@/*` alias to resolve from `src`, which keeps future CLI-generated components in the application source tree.
- Added the official shadcn/vue Button component at `src/app/shared/components/shadcn/button` and installed its required `reka-ui` dependency.
- Kept `tw-animate-css` imported from `main.ts`; removed the duplicate Sass-incompatible stylesheet import added by the CLI.
- Verified with `npm run type-check` and `npm run build` (both pass).
