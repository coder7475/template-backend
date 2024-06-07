import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import parameters from './parameters';

// declare server variable
let server: Server;

async function main() {
  try {
    // Connect to mongodb
    await mongoose.connect(parameters.database_url as string);
    console.log('connected to mongodb...');
    // create server
    server = app.listen(parameters.port, () => {
      console.log(`App is listening on port ${parameters.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

process.on('unhandledRejection', () => {
  console.log(`😈 unahandledRejection is detected , shutting down ...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected , shutting down ...`);
  process.exit(1);
});
