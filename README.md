# ppb-firebase-hosting

This is the landing page for PingPongBuddies. (WIP)

It is built with Create-React-App, it has firebase functions and it is hosted on firebase hosting.

Project Console: https://console.firebase.google.com/project/ppb-firebase-hosting/overview
Hosting URL: https://ppb-firebase-hosting.web.app

to run:

```
firebase serve --only functions,hosting
```

to run only frontend:

```
cd client
npm start
```

to deploy to firebase:

```
cd client
npm run build
firebase deploy
```