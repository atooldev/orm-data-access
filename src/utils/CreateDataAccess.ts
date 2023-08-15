import { TypeORMDataAccess } from '..';
// Import other DataAccess classes as needed

function createDataAccess(ormName: string, config: any, dataModels: any) {
    switch (ormName) {
        case 'typeorm':
            return new TypeORMDataAccess(config, dataModels);
        case 'sequelize':
            // return new SequelizeDataAccess(config, dataModels);
            throw new Error('SequelizeDataAccess is not yet implemented');
        case 'sql':
            // return new SQLDataAccess(config, dataModels);
            throw new Error('SQLDataAccess is not yet implemented');
        default:
            console.warn(`Unsupported ORM: ${ormName}`);
            throw new Error(`Unsupported ORM: ${ormName}`);
    }
}

export default createDataAccess;

