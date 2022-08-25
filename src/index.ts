import { User } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log('fetched:');
  collection.models.forEach((el) => console.log(el));
});

collection.fetch();
