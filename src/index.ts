import { User } from './models/User';
import { UserForm } from './views/UserForm';

const collection = User.buildUserCollection();

// collection.on('change', () => {
//   console.log('fetched:');
//   collection.models.forEach((el) => console.log(el));
// });

// collection.fetch();

const root = document.getElementById('root');

if (root) {
  const userForm = new UserForm(
    root,
    User.buildUser({ name: 'name', age: 15 })
  );
  userForm.render();
} else {
  throw new Error('Root element not found');
}
