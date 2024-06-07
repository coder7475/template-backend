import mongoose from 'mongoose';
import app from './app';
import parameters from './parameters';

async function main() {
  try {
    await mongoose.connect(parameters.database_url as string);
    console.log('connected to mongodb...');
    app.listen(parameters.port, () => {
      console.log(`App is listening on port ${parameters.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
