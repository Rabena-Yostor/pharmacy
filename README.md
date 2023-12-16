Certainly! Here's an improved version of your README.md file with better formatting and organization:

---

# El7a2ny Pharmacy System

## Introduction

El7a2ny Pharmacy System is a comprehensive solution designed to streamline the operations of pharmacies within a virtual clinic setup. It caters to patients, pharmacists, and administrators, enabling efficient management of medicine inventory, patient prescriptions, and order processing.

## Motivation

This system was developed to facilitate a seamless interaction between patients and pharmacists, ensuring that medication is dispensed accurately and efficiently, with an emphasis on ease of use and patient safety.

## Build Status

1. The project is currently under development.
2. Design for error should be improved.
3. Need to implement unit testing.
4. The website is still not deployed.

## Code Style

- Standard Code style that is easy for anyone to understand.
- Async/Await: using async/await, which is good. Make sure to handle errors with a try-catch block.

## Screenshots

(Include screenshots or video demonstrations of the system in action)

## Tech/Framework Used

- MongoDB
- Express.js
- React
- Node.js
- Axios
- Stripe

## Features

- Patient account management
- Real-time inventory tracking
- Prescription processing and validation
- Sales reporting and analytics
- Secure pharmacist registration and authentication
- Paying with credit card or visa.
- Refunding money to the wallet for further use.
- Reporting issues and following up on their status.

## Code Examples

### Server.js

Example for the `server.js` file:

```javascript
// Your server.js code here
```

### Medicine Model

Here is the medicine model example:

```javascript
// Medicine model code here
```

### Medicine Controller

Example of the medicine controller:

```javascript
// Medicine controller code here
```

### Frontend Shopcart Page

Frontend shopcart page example:

```javascript
// Shopcart page code here
```

### App.js

Frontend `app.js` example:

```javascript
// App.js code here
```

## Installation

1. Clone the repository from GitHub.
2. Create a `.env` file and add the following:

```env
PORT=4000
MONGO_URI='your_mongo_db_uri_here'
```

3. Open a new terminal.
4. Navigate to the `backend` directory.
5. Run `npm install` followed by `node server.js`.
6. Open a new terminal.
7. Navigate to the `frontend` directory.
8. Run `npm install` followed by `npm start`.

## API References

(All method names are the same as their Functionality)

... (Include your API references here)

## Tests

Testing for now using Postman and MongoDB.

## How to Use?

1. **Login:**
   - Select user type (patient/admin/Pharmacist).
   - Type your username/password then login.
   - Option to reset your password, and an OTP will be sent to your mail.
   - If you don’t have a username and password, you can register.

2. **Logout:**
   - Press the logout button.

3. **Pharmacist:**
   - If logged in as a pharmacist, you can add/edit medicines, shop, view all medicines, and add admins/pharmacists.

4. **Admin:**
   - Similar functionalities as the pharmacist.

5. **Patient:**
   - Register as a patient, view basic info, search, and view medicines.

## Contribute

We welcome contributions from the community to enhance the project. Whether you want to report a bug, propose a new feature, or submit a pull request, here's how you can contribute:

1. Clone the repository.
2. Install dependencies.
3. Create a branch and do your work.
4. Provide messages for the creators to view.
5. Commit and push your work.
6. Wait for the creator to view your work and to be merged if master approved upon.

Feedback is valuable! If you have suggestions or questions, feel free to reach out. Thank you for contributing!

## Credits

We used online YouTube video channel: Net Ninja (MERN stack crash course).

We would like to extend our thanks to the following individuals for their contributions to this project:


- Hana Elmoatasem
- Peter Ashraf
- Khaled Magdy
- Malak Wael
- Ahmed Hamouda
- Peter Youssef
- Mohamed Ahmed
- Hazem Nasser

Without the help of these individuals, this project would not have been possible. Thank you for your support!

## License

This project uses Stripe to process. By using this project, you agree to be bound by the Stripe Services Agreement.

You can find the full text of the Stripe Services Agreement at the following link: [Stripe Legal](https://stripe.com/legal).

Please make sure to read and understand the Stripe Services Agreement before using this project. If you have any questions about the Stripe Services Agreement or how it applies to your use of this project, please contact Stripe at support@stripe.com.
