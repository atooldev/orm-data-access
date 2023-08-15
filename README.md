# @atooldev/orm-data-access

Utility package for ORM data access operations.

## Installation

```sh
npm install @atooldev/orm-data-access
```

## Usage

```js
// Import the createDataAccess function
import createDataAccess from '@atooldev/orm-data-access';

// Define your configuration and data models
const config = { /* Your configuration here */ };
const dataModels = [ /* Your data models here */ ];

// Create the data access instance
const dataAccess = createDataAccess('typeorm', config, dataModels);

// Use the data access methods
const allData = await dataAccess.getAllData('ModelName');
const record = await dataAccess.getDataById('ModelName', 'recordId');
// ... more usage examples
```

## Features

Easily create a data access instance for different ORMs to be used in in admin interfaces, API endpoints, etc.
Perform CRUD operations on your data models.
Retrieve metadata about tables, columns, and relations.

## API Documentation

```js
await dataAccess.connect();
console.log('Connected to the database.');
```

Retrieving All Data

```js
const { data, total } = await dataAccess.getAllData('User', { page: 1, perPage: 10 });
console.log(`Retrieved ${total} records.`);
console.log(data);
```

Retrieving Data by ID

```js
const recordId = '123';
const record = await dataAccess.getDataById('User', recordId);
console.log(`Record with ID ${recordId}:`, record);
```

## Contribute

Contributions to this middleware are welcome! If you encounter any issues, have suggestions, or want to improve the codebase, feel free to open an issue or submit a pull request.

To contribute to this project, follow these steps:

1. Fork the repository.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`.
4. Make your changes and test thoroughly.
5. Commit your changes: `git commit -m "Add your commit message here"`.
6. Push to the branch: `git push origin feature/your-feature-name`.
7. Create a pull request in this repository.

Thank you for contributing to making this middleware better!


## License

This project is licensed under the terms of the [MIT License](LICENSE).
