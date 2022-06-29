type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return user.username === sentValue.username && user.password === sentValue.password;
};

const bdUser: User = { username: 'Joo', password: '12345' };
const sentUser: User = { username: 'João', password: '12345' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
