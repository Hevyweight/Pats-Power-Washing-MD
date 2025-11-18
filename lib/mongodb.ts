// lib/mongodb.ts
import mongoose, { Mongoose } from "mongoose";

// 1) Read the env var and narrow it to a plain string
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

const MONGODB_URI: string = uri;

// 2) Define the cache shape
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// 3) Extend globalThis with a typed cache
const globalForMongoose = globalThis as typeof globalThis & {
  mongooseCache?: MongooseCache;
};

// 4) Initialize cache using ??= (Sonar rule)
globalForMongoose.mongooseCache ??= {
  conn: null,
  promise: null,
};

// 5) Now this is always defined and correctly typed
const cached: MongooseCache = globalForMongoose.mongooseCache;

export async function connectToDatabase(): Promise<Mongoose> {
  // Reuse existing connection
  if (cached.conn) {
    return cached.conn;
  }

  // Create the initial connection promise
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  // Resolve and store
  cached.conn = await cached.promise;
  return cached.conn;
}
