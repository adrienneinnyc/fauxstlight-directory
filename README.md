# fauxstlight-directory

### Tools

The directory is built using Node, Express, React with TypeScript, PostgreSQL for the database, and Sequelize. The backend uses a REST API, and the CRUD endpoints for employees each have one test, using Supertest/Mocha. The frontend uses Reactstrap for some basic styling and incorporates YUP validations for forms (though this was just a start; more validation is needed---see "Gaps").

### Quick Start

1. Clone the repo.
2. CD into the project and run `npm install`.
3. If you already have Postgres on your machine, just create a local database for 'fauxstlight' and `npm run seed`. Otherwise, you'll need Postgres.
4. CD into `client` and `npm install && npm start`

### Gaps

I didn't have time to add features like pagination, filtering, or search, or any front end testing. Error handling and form validations are also a little meager right now. I would have liked to add notifications/confirmations when a user deletes or add a user as well. Right now, the list updates, but the user would have to scroll to confirm the user is now part of the directory.
