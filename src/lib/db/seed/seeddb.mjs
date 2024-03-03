import { exit } from 'process';
import dbConnect from '../dbConnect.mjs';
import { dbExists, seedDefaultSubscriber, seedDefaultUser } from './seedhelpers.mjs';
import bcrypt from 'bcryptjs';
import { subscribers } from './seedfile.mjs';

// Load Seedfile
// const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
// const galleries = loadJSON('./seedfile.json');


/* 

    SEED

*/

// Database Connection
await dbConnect();
let exists = await dbExists();

if(exists === undefined)
{
    console.log('----------------------')
    console.log('Opretter Database')

    const user = await seedDefaultUser({
        "name" : "admin",
        "email" : "admin@mediacollege.dk",
        "hashedPassword" : await bcrypt.hash("admin", 10)
    })

    const subscriber = await seedDefaultSubscriber(subscribers[0])

} else {


    console.log('----------------------')
    console.log('Database er allerede oprettet')
    console.log('Slet/drop databasen hvis du ønsker at køre seed scriptet igen.')
    console.log('----------------------')

}

exit();