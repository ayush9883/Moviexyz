import { MongoClient } from "mongodb";

// if env not exist then throw error
if (!process.env.MONGODB_URI) {
    throw new Error("Invalid/Missing enviroment variable: 'MONGODB_URI'")
}

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;
const options = {};

if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
    
} else {
    // in production mode, it's best to not use a globle variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

// export a module scoped mongoclient promise, by doing this in a seprate module,
// client can be shared acrose function.

export default clientPromise;