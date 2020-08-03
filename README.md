# Heart
 H.E.A.R.T

# Steps to run the application on localhost:
---
-> Run the command **npm install**
-> Then, head over to the src folder and type the following command: **bower install jquery angular angular-route angular-animate angular-sanitize bootstrap angular-bootstrap angular-ui-select**
-> Then install gulp using: **npm install -g gulp**
-> Then start the connect server using the following command in parent level of project **gulp connect**

# To deploy the application on firebase hosting:
---
-> Build the application using **gulp build**. This process is not set to async completion, thus after the process with title *Finished 'build' after XX ms*, manually close the process using *Ctrl+c*, press **y** and then press *Enter*
-> Type the command **firebase deploy** on the same console and the application will be deployed.

# To build a cordova app of the deployment
---
-> Follow first process ofdeploying of firebase hosting
-> Then head over to **heart** folder
-> replace code in **www** folder with files & folder from **dist** folder
-> head over to **index.html** in *heart/www* and replace the path path of the following:
   -- append *android/asset* before *bower_components/*
-> head over to **app.js** in *heart/www* and replace the path of the following and also add the following:
   -- append *android/asset* before *views/* and add the code on line#39 before semicolon:
      -- *.otherwise({redirectTo: '/'})*
-> head over to **landing.html** in *heart/www* append *android_asset/www* before **sound/** in file
-> run **cordova build android**