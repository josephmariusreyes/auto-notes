## Goal
- Setup the barebone of the app routes and app guard

## Instruction
- `src\app\guards\auth.guard.ts` Implement here a mock authentication for now, if in URL there is a parameter auth=true then the user is authenticated, else its not authenticated

- `src\app\router\index.ts` implement routing heres what you will do 
-- each feature modules has its corresponding routes under routes folder, write now the code to setup the routes there EG: authentication module will be accessed via {domain}/authentication

- now inspect the container folder each module if you see a file LoginContainer, then that component will be loaded in path {domain}/{feature}/login

- only the authentication feature can be accessed without authenticating, the rest must use authentication
-- use  `src\app\shared\components\layouts\AppMainLayout.vue` for the authenticated user, load the feature component here

-- use `src\app\shared\components\layouts\PublicLayout.vue` for none authentcated user, load the feature component here

## Notes

- Dont do unnecessary changes follow my instruction here

## completed

- Added feature route configurations for authentication, dashboard, settings, and vehicles, and registered them with the main router.
- Implemented the mock authentication guard: protected routes require the `auth=true` URL query parameter.
- Applied `PublicLayout` to authentication, `AppMainLayout` to protected features, and registered the discovered vehicles login container at `/vehicles/login`.
- Added router outlets to the app root and both layouts so nested route components render.
- Added the minimal template required for the previously empty vehicles login container to compile when it is routed.
- Converted each route component and layout to a lazy-loaded dynamic import.
