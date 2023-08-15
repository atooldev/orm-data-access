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
