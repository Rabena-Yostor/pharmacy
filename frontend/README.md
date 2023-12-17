pharmacy
Rabena Yostor's Virtual Pharmacy

El7a2ny Pharmacy System Introduction El7a2ny Pharmacy System is a comprehensive solution designed to streamline the operations of pharmacies within a virtual clinic setup. It caters to patients, pharmacists, and administrators, enabling efficient management of medicine inventory, patient prescriptions, and order processing.

Motivation This system was developed to facilitate a seamless interaction between patients and pharmacists, ensuring that medication is dispensed accurately and efficiently, with an emphasis on ease of use and patient safety.

Build Status 1.The project is currently under development. 2.Design for error should be improved. 3.Need to implement unit testing . 4.The website is still not deployed.

Code Style -Standard Code style that is easy for anyone to understand .

Async/Await : using async/await , which is good. Make sure to handle errors with a try-catch block.

Screenshots (Include screenshots or video demonstrations of the system in action)

Tech/Framework Used MongoDB

Express.js

React

Node.js

-Axios

-stripe

Features Patient account management

Real-time inventory tracking

Prescription processing and validation

Sales reporting and analytics

Secure pharmacist registration and authentication

Paying with credit card or visa.

-Refunding money to wallet for further use .

Reporting issues and following up on their status. Code Examples Example for The server.js file

Her is the medicine model examples for the models

Here is the medicine controller we

get all patients

// get a specific patient(Search for one)

// create a medicine

//delete a patient

For the front end I will give you the shopcart page

The app.js in the frontend

(Provide code snippets that illustrate how to use your API or perform basic tasks)

Installation Clone the link of repository from github. create .env file and add the following: ( PORT=4000;

MONGO_URI = 'mongodb+srv://ahmedhamouda776:ACL123@rabenayostor.5zgv8bz.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'

Open new terminal. Cd backend Npm i, then node server.js Open new terminal. Cd frontend Npm i Npm start "wait until your browser open automatically". API References (All method names are the same as their Functionality)

Endpoint

/api/medicine/'method name,

Medicines

Get all medicines

GET** /getAllMedicines** Get a list of all medicines. Get a specific medicine

GET** /getMedicine/:id** Get information about a specific medicine by its ID. Add a new medicine

POST** /addMedicine** Add a new medicine to the database. Delete a medicine

DELETE** /deleteMedicine/:id** Delete a medicine from the database by its ID. Update a medicine

PATCH** /updateMedicine/:id** Update the information of a specific medicine by its ID. Filter medicines

GET** /filterMedicine** Filter and retrieve medicines based on specific criteria. Users

Create a new patient

POST** /createPatient** Register a new patient. Create a new pharmacist

POST** /createPharmacist** Register a new pharmacist. Create a new admin

POST** /admin** Register a new admin. Get all patients

GET** /getAllPatients** Get a list of all registered patients. Get all admins

GET** /getAllAdmins** Get a list of all registered admins. Admin login

POST** /admin/Login** Log in as an admin. Admin sign up

POST** /adminSignUp** Sign up as an admin. Patient login

POST** /Patient/Login** Log in as a patient. Patient sign up

POST** /PatientSignUp** Sign up as a patient. Cart

Add medicine to cart

POST** /addMedicineToCart/:UserName/:name** Add a medicine to the user's cart. Get cart items

GET** /getCartItems/:UserName** Retrieve the items in the user's cart. Delete medicine from cart

DELETE** /deleteMedicineFromCart/:UserName/:name** Remove a medicine from the user's cart. Change quantity in cart

PUT** /changeQuantityInCart/:UserName/:name/:newQuantity** Change the quantity of a medicine in the user's cart. Add address

POST** /addAddress/:UserName** Add a new address for the user. Get addresses

GET** /getAddresses/:UserName** Retrieve the user's addresses. Zero cart amount

PUT** /zeroAmount/:UserName** Set the cart total amount to zero. Checkout

PUT** /checkOut/:UserName** Process the checkout for the user's cart. Choose address for order

PUT** /chooseAddress/:UserName** Select an address for the order. Pay with wallet

PUT** /payWithWallet/:UserName** Pay for an order using the user's wallet balance. View orders

GET** /viewOrders/:UserName** Retrieve the user's order history. View pharmacist request

GET** /viewPharmacistRequest** View pending pharmacist registration requests. View pharmacists' requests

GET** /viewPharmacistsRequests** View a list of all pharmacist registration requests. Search for a medicine

GET** /searchMedicine** Search for medicines based on specific criteria. View patient information

GET** /patientinfo** View detailed information about a patient. Reject pharmacist request

DELETE** /rejectPharmacistRequest/:UserName** Reject a pending pharmacist registration request by their username. Accept pharmacist request

POST** /acceptPharmacistRequest/:UserName** Accept a pending pharmacist registration request by their username. Get wallet balance

GET** /getWallet/:UserName** Retrieve the wallet balance of a user. Pay with wallet balance

PUT** /payWithWallet/:UserName** Make a payment using the user's wallet balance. View order history

GET** /viewOrders/:UserName** Retrieve the order history for a user. Remove order

DELETE** /removeOrder/:UserName/:orderId** Remove a specific order from a user's order history. Process payment

POST** /payment** Process a payment for an order. Notifications

Create a new notification

POST** /createNotification** Create a new notification. Delete a notification

DELETE** /deleteNotification/:notificationId** Delete a specific notification by its notification ID. Get all notifications

POST** /getAllNotifications** Retrieve all notifications. Conversations

Get conversation with a patient

POST** /getConversationPatient** Retrieve the conversation between a pharmacist and a patient. Get conversation with a pharmacist

POST** /getConversationPharmacist** Retrieve the conversation between a patient and a pharmacist. Send a message to a pharmacist

POST** /sendMessagePharmacist** Send a message to a pharmacist as part of a conversation. Get messages

POST** /getMessages** Retrieve messages from a conversation. Checkout with Card

Checkout with a card

PUT** /checkOutWithCard/:UserName** Perform a checkout with a card payment for the user. Pharmacist Wallet

Get pharmacist's wallet balance

GET** /getWalletPharma/:UserName** Retrieve the wallet balance of a pharmacist. Sales Reports

View sales report for a specific year and month

GET** /salesReport/:year/:month** Retrieve a sales report for a specific year and month. Filter sales report by day for a specific year, month, and day

GET** /salesReport/:year/:month/:day** Filter and retrieve sales data for a specific year, month, and day. Filter sales report by medicine name for a specific year and month

GET** /filterSalesReport/:year/:month/:name** Filter and retrieve sales data for a specific year, month, and medicine name. Tests Testing for now now by using postman and mongodDB

How to Use? LOGIN select user type (patient/admin/Pharmacist) , type your username/password then login. There is option to reset your password and otp will be sent to your mail.if you don't have username and password you can register and fill the form to register, If you want to register as a new doctor, you will submit a request and the admin will approve/reject the request. You can also submit a request after filling username and password , and once the admin approves it you can login.

--LOGOUT there is a log out button, press it

pharmacist if you logged in as a pharmacist you can:

Add and Edit Medicines: the name ,detailes,price and quantity of the new medicine Shop: a store to buy medicine from it View all medicines Add Admin: admin username and password Add Pharmacist pharmacist username and password Admin if you logged in as a Admin you can:

Add and Edit Medicines: the name ,detailes,price and quantity of the new medicine Shop: a store to buy medicine from it View all medicines Add Admin: admin username and password Add Pharmacist pharmacist username and password patient if you logged in as a Admin you can:

Add and Edit Medicines: the name ,detailes,price and quantity of the new medicine Shop: a store to buy medicine from it View all medicines Add Admin: admin username and password Add Pharmacist pharmacist username and password Register patient View basic info Search and view Contribute We welcome contributions from the community to enhance the project. Whether you want to report a bug, propose a new feature, or submit a pull request, here's how you can contribute:

Any Contributions are welcomed to improve the website. 1.Clone the repository. 2.Install dependencies. 3.Create branch and do your work. 4.Provide messages for the creators to view. 5.commit and push your work. 6.wait for the creator to view your work and to be merged if master approved upon.

Feedback is valuable! If you have suggestions or questions, feel free to reach out .Thank you for contributing!

Credits We used online YouTube video channel: Net Ninja (MERN stack crash course)

We would like to extend our thanks to the following individuals for their contributions to this project:

_ Mohamed _ _ Ahmed _ _ Hana __ Elmoatasem _ _ Peter __ Ashraf _ _ Peter __ Youssef _ _ Khaled Magdy _ _ Hazem Nasser _ _ Malak Wael _ _ Ahmed Hamouda _ Without the help of these individuals, this project would not have been possible. Thank you for your support

License This project uses Stripe to process. By using this project, you agree to be bound by the Stripe Services Agreement.

You can find the full text of the Stripe Services Agreement at the following link:

https://stripe.com/legal

Please make sure to read and understand the Stripe Services Agreement before using this project.

If you have any questions about the Stripe Services Agreement or how it applies to your use of this project, please contact Stripe at support@stripe.com.