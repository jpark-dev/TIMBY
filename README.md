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

!["Homescreen"](https://github.com/jpark-dev/TIMBY/blob/master/docs/timby-home-screen.jpg)

- Timby can be added to your phone as app icon.

- Works just like any apps on your phone.

!["Splash Screen"](https://github.com/jpark-dev/TIMBY/blob/master/docs/timby-splash-screen.jpg)

- Once launched, PWA allows to have a splash screen just like ordinary apps installed.

- It then shows the app components afterwards.

!["Main Page"](https://github.com/jpark-dev/TIMBY/blob/master/docs/timby-search.jpg)

- You can navigate with the Google Maps using your hand gestures on your screen.

- Shows the markers with available tours.

- Each tour contains tour data, along with a booking function via Book button.

!["Side Menubar"](https://github.com/jpark-dev/TIMBY/blob/master/docs/timby-menu.jpg)

- By clicking the drawer button on the top left, a side nav bar appears.

- Can navigate to different pages.

!["Profile Page"](https://github.com/jpark-dev/TIMBY/blob/master/docs/timby-profile.jpg)

- Profile page with user data.

- Includes the location, email and total tours created as a host.

!["Listing Confirm"](https://github.com/jpark-dev/TIMBY/blob/master/docs/timby-listing-confirm.jpg)

- Hosts can either accept/decline requests form tourists to join the tour.

- The modal shows the current status of the listing associated with user requests.

!["Push Notifications"](https://github.com/jpark-dev/TIMBY/blob/master/docs/timby-push-notifications.jpg)

- When tourists requests to join the tour, the host receives a push notification.

- When hosts accept a tourist request to join, the tourist receives a posh notification.

- It also works as a native push notification on your phone.

!["Feedback"](https://github.com/jpark-dev/TIMBY/blob/master/docs/timby-feedback.jpg)

- Tourists can rate the completed tour and leave comments.

!["Feedback"](https://github.com/jpark-dev/TIMBY/blob/master/docs/timby-feedback-success.jpg)

- Once submited, it shows a popup notice to show that it's successfully submitted.

!["Bookings Page"](https://github.com/jpark-dev/TIMBY/blob/master/docs/timby-bookings.jpg)

- Each card contains the description of each tour requested by the tourist.

- Shows current booking status of each tour.

- Allows to see details.

!["Booking Details"](https://github.com/jpark-dev/TIMBY/blob/master/docs/timby-booking-details.jpg)

- The modal shows a google map with a marker of the tour description.

- Allows to leave feedback.

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
