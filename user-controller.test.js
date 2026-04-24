const UserController = require("./user-controller");
const User = require("./user");

test('add user to userController', () => {    
    const userController = new UserController();
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {
    const userController = new UserController();    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
  });

test('verify an user not added in userController', () => {
    const userController = new UserController();
    let user = new User(6600, "Mauricio", "mauricio@generation.org");
    expect(userController.getUsers()).not.toContain(user);
  })

test('verify remove() removing an user not in userController', () => {
    const userController = new UserController();
    let user = new User(6600, "Mauricio", "mauricio@generation.org");
    let userNotInList = new User(2, "Santiago", "santiago@generation.org");
    userController.add(user);
    userController.remove(userNotInList);
    expect(userController.getUsers()).toContain(user);
  })

test('verify findByEmail to userController', () => {
  const userController = new UserController();
  let user = new User(6600, "Mauricio", "mauricio@generation.org");
  userController.add(user);
  expect(userController.findByEmail("mauricio@generation.org")).toEqual(user);
})

test('verify findByEmail with a non added user to userController', () => {
  const userController = new UserController();
  let user = new User(6600, "Mauricio", "mauricio@generation.org");
  userController.add(user);
  expect(userController.findByEmail("santiago@generation.org")).toBeUndefined();
})

test('verify findById to userController', () => {
  const userController = new UserController();
  let user = new User(6600, "Mauricio", "mauricio@generation.org");
  userController.add(user);
  expect(userController.findById(6600)).toEqual(user);
})

test('verify findById with a non added user to userController', () => {
  const userController = new UserController();
  let user = new User(6600, "Mauricio", "mauricio@generation.org");
  userController.add(user);
  expect(userController.findById(1)).toBeUndefined();
})
