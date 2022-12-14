=> Consultation links:
1.- https://medium.com/bigcommerce-developer-blog/how-to-test-app-authentication-locally-with-ngrok-149150bfe4cf
2.- https://developer.bigcommerce.com/docs/3ef776e175eda-big-commerce-apps-quick-start
3.- https://camerondwyer.com/2019/09/23/using-ngrok-to-get-a-public-https-address-for-a-local-server-already-serving-https-for-free /
4.- https://devtools.bigcommerce.com/my/apps

=> It is required to create a new project using node.js and express.
=> It is required to install the library for the use of dotenv.
=> It is required to install the bigcommerce node-bigcommerce library.
=> It is required to create a server.js
=> It is required to create an app.js
=> Installing ngrok is required to create the https endpoints:

npm install ngrok -g
ngrok add-authtoken TOKEN FROM NGROK WEB PAGE
ngrok http https://localhost:PORTNUMBER

=> It is required to include in the .env of the application the CLIENT_ID and the SECRET that is generated in bigcommerce when creating the app.
=> It is required to create three routes aut, load and uninstall.
=> It is required to create an app in bigcommerce (see link 4).
=> It is required to include in the bigcommerce app the three https type endpoints created in the routes (see links 2 and 3):

https: // ngrok https dir/auth
https: // ngrok https dir/load
https: // ngrok https dir/unistall

=> It is required to install the app in the bigcommerce store, this can only be done by the owner of the store.
=> To run the application it is required to have the tunnel initialized with ngrok and the server:

ngrok http https://localhost:PORTNUMBER
nodemon server.js

=> Every time you start ngrok the endpoints address will change, so you have to change the url in the bigcommerce store app, in the .env file.
=> It is possible that the antivirus blocks the endpoints created with ngrok, so it is necessary to include an exception so that it does not block those addresses.