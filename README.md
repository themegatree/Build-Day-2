# Library Management System:

## Process Model

Client | | Browser | | Server
---| --- |--- |--- | ---
Listen | | | | 
===> | Run `node app.js` | ===> | LISTEN request | ===>
<===| Console log port number | <=== | Port number found | <===
Render | | | | 
===> | Render `/login` | ===> | GET request | ===>
<===| Render HTML | <=== | Render `login.ejs` | <===
| | | | 
===> | Correct user details from `/login` | ===> | GET request | ===>
<===| Render HTML | <=== | Response HTML `libray.ejs` | <===
Redirect | | | | 
===> | Render `/new-person` | ===> | GET request | ===>
<===| Render HTML | <=== | Render `new-person.ejs` | <===
| | | | 
===> | Render `/new-admin` | ===> | GET request | ===>
<===| Render HTML | <=== | Render `/new-admin.ejs` | <===
| | | | 
===> | Render `/new-item` | ===> | GET request | ===>
<===| Render HTML | <=== | Render `/new-item.ejs` | <===
Post | | | | 

## Database Schema

### Admins
Responsibilities | Collaborators
--- | ---
id | 
Username | 
Password | 

### People
Responsibilities | Collaborators
--- | ---
id | 
Username | 

### Items
Responsibilities | Collaborators
--- | ---
id | 
Name | 
AdminId | 
PersonId | 


## Mock-Up

![new-amdin-ejs](./images/mockup-new-admin.png)

![login-ejs](./images/mockup-login.png)

![library-ejs](./images/mockup-library.png)