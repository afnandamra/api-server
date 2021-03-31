# LAB: Data Modeling

Dynamic API Phase 3: Add Persistence (Database) to your API

**Author:** Afnan Damra
**Version:** 1.0.0

**Links:**

- [Repo Link](https://github.com/afnandamra/api-server)
- [GitHub Actions](https://github.com/afnandamra/api-server/actions)
- [Deployed Site](https://afnan-api-server-db.herokuapp.com/)
- [PR Link](https://github.com/afnandamra/api-server/pull/1)

## Setup

### Install

- Clone the repository from GitHub
- Run the command `npm i express dotenv morgan uuid cors mongoose jest @codefellows/supergoose` to install dependencies
- create .env file with PORT variable and `MONGODB_URI=mongodb://localhost:27017/api_v1`

### Test

- Run the command `npm test` to test and verify the server and the midddlewares are working.
- Run the command `npm run lint` for testing lint.

### Run

- Start the server using `nodemon`
- Visit http://localhost:PORT at the PORT number you've assigned in your .env

## Documentation

### UML Diagram

Below is a UML of my application (created at https://app.diagrams.net)

![UML Lab4](assets/lab04-diagram.jpg)
