## Goal

- Implement the UI screen for login page

## Todo

- Implement this login screen in desktop `.ai\ui-references\login-desktop.png`

- This is the mobile design `.ai\ui-references\login-mobile.png`

- In `src\app\shared\components\layouts\PublicLayout.vue` put HTML elements here that will serve as wrapper for the login HTML elements

- In `src\features\authentication\containers\LoginContainer.vue` code the login form here

## Notes

- Minimize custom CSS leverage tailwind to position elements

- No functionality needed yet just do some alert JS on click of log in

- Use shadcn input for the inputs fields

- Use shadcn button for the login button

- No need to put background image, just put a gray background color that should be good enough, but prepare the styles for it so that i can just put a background image via CSS

## Completed

- Built the responsive login experience: a desktop marketing/hero panel with a detailed form, plus the compact mobile hero and actions layout.
- Added shadcn `Input` and `Button` controls, responsive form fields, links, and a temporary login click alert.
- Added a neutral gray hero background with a `--public-hero-image` CSS variable ready for a future background image.
