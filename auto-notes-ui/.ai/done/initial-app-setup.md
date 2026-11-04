## Goal 
- Setup the initial components
- Setup the routes

## Instruction

- Make this project use scss instead of just plain css

- Create the initial code for the container component, 
src\app\shared\layouts\PublicLayout.tsx
src\app\shared\layouts\AuthenticatedLayout.tsx
src\features\authentication\containers\LoginContainer.tsx
src\features\user-accounts\containers\RegisterUserContainer.tsx
src\features\user-accounts\containers\UserListing.tsx
( no need to add style here or logic just add a text "{componentName} works!" )

- Setup the routes in src\app\routes\AppRoutes.tsx
-- {domain}/auth/login
( this will load `src\features\authentication\containers\LoginContainer.tsx` )
( LoginContainer.tsx will be using `src\app\shared\layouts\PublicLayout.tsx` as its layout container, load the container component here )

-- {domain}/user-accounts/register-user
( this will load `src\features\user-accounts\containers\RegisterUserContainer.tsx` )
( RegisterUserContainer.tsx will be using `src\app\shared\layouts\PublicLayout.tsx` as its layout container, load the container component here )

-- {domain}/user-accounts/user-listing
( this will load `src\features\user-accounts\containers\UserListing.tsx` )
( UserListing.tsx will be using `src\app\shared\layouts\AuthenticatedLayout.tsx` as its layout container, load the container component here )

## Acceptance Criteria
- pages should be lazy loaded for performance

## Completed
- Switched the app to SCSS by updating the entry stylesheet to `src/index.scss` and adding the global layout styles needed for the public/authenticated screens.
- Created the initial layout containers for the public and authenticated sections and wired the login, register-user, and user-listing screens to render their placeholder text as requested.
- Set up the application routes in `src/app/routes/AppRoutes.tsx` with lazy-loaded components and default redirects to `/auth/login`.
- Updated the app bootstrap to mount the router and established the route index export.


