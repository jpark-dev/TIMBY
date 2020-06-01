## Description

Our project is called TIMBY – which is short for Tour In My Back Yard.

With TIMBY, you can connect with locals to enjoy the most vibrant and authentic experience, without having to spend your valuable time to schedule your own activities and the transits.

With TIMBY, you can create your own tour to make new friends and share the amazing experience of your neighborhood, with some income to make your time valuable.

TIMBY is a Progressive Web Application that can be placed in your mobile devices as an app icon.
Once launched, a splash screen will appear for a brief moment before rendering the mobile-friendly application running in your device.

It works just like any apps downloaded from the AppStore or PlayStore on your phone, including features like PUSH notifications.

Try TIMBY now, and please leave your questions or feedback!

TIMBY was collaboratively built with [Allen Li](https://github.com/AllenLiDev) and [Dexter Chan](https://github.com/dexterchan94)

\*TIMBY is currently in its beta state, some key features are still being implemented.

## Snapshots

## Dependencies

Back-end

- node
- express
- body-parser
- Cross Origin Resources Sharing (CORS)
- postgres (pg)
- dotenv
- nodemon
- pg

Front-end

- react
- axios
- material-ui

Cloud/external API

- Google Maps API
- ElephantSQL for cloud Database

## Getting Started

### Express-Backend

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information

- DATABASE_URL

Use either a local posgres DB or a cloud DB.
A free tier plan with [ElephantSQL](https://www.elephantsql.com/plans.html) works flawlessly with TIMBY.

- PUBLIC_VAPID_KEY
- PRIVATE_VAPID_KEY

You can generate them with command "./node_modules/.bin/web-push generate-vapid-keys"

3. Install dependencies: `npm install`
4. Reset database: `npm run db:reset`

- Check the db folder to see what gets created and seeded in the SDB

7. Run the server: `npm start`

- Note: nodemon is used, so you should not have to restart your server

8. Visit `http://localhost:8080/`

### React-Frontend

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information

- REACT_APP_API_URL (default: http://localhost:8080)
- REACT_APP_PUBLIC_VAPID_KEY ()

Get your map API key from [Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key)

- REACT_APP_MAP_API_KEY ()

3. Install dependencies: `npm install`

4. Run the server: `npm start`

- Note: nodemon is used, so you should not have to restart your server

5. Visit `http://localhost:3000/`

6. Open two browsers and set each user login status in the browser consoles:
```
-- Browser 1 --
Log in as Allen (local guide)
console > localStorage.setItem('userID', 5);

-- Browser 2 --
Log in as Jason (tourist)
console > localStorage.setItem('userID', 6);
```

7. Connect your mobile device and set it as an App icon
- Open a URL address of a PWA you want to install in your browser.
- Open your browser’s settings.
- Scroll down and tap Add to Home screen.
- Confirm by tapping Add.
- Run TIMBY on your phone! 

## Testing

A simple end-to-end testing suite for the front-end was written using Cypress.

`npm run cypress`

## Future Goals

- Login/logout page (user login currently occurs in the browser console)
- Allow guides and locals to leave comments to each other
- Search tours with filters
- Display comments submited by users.
- A form for guides to enter details for a tour to be created (Creating feature is implemented, but the form itself is left out)
- Skeleton or spinner to deliver the data loading status more seemless to users.
- Chat communication between guides and tourists
- Call/SMS/email to the guide by just clicking a button
- Profile edit
- Payment module such as stripe