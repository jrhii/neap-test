const pg = require('pg');
const connectionString = 'postgresql://postgres:no1nos@localhost:5432/todo';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
    'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)'
);
query.on('end', () => {
    client.end();
});
