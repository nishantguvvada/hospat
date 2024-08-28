**Project Overview**

Create a custom Hospital Patient App Tracker in Odoo 15. Your goal is to:

● Create a Patient Model with the following fields:

○ reference: This should be an auto-incrementing generated field of the form **HP-xxxxxx**.

○ name

○ age

○ gender

● Create views for the Patient model which allow the user to view a list of patients and create new patients.

○ You should be able to create new Patients.

○ You should be able to view a list of patients.

● You should use PostgreSQL running in Docker.

**Project Setup**

- Clone the repository: git clone https://github.com/nishantguvvada/hospat
- Run the frontend: cd frontend -> npm install -> npm run dev
- Setup the backend: cd backend
  - npm install
  - Install Prisma: npm i prisma
  - Run postgres docker container
  - Create .env file -> add DATABASE_URL="postgres docker container url"
  - npx prisma migrate dev (This command builds and migrates the tables whose schema is provided within schema.prisma file to the postgres running via docker) | run npx prisma studio to view the db
  - node index.js
