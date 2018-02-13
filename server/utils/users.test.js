const expect = require('expect');
const {Users} = require('./users');

describe('Users', () =>{
  var users;

  beforeEach(() =>{
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Val',
      room: 'Home'
    },{
      id: '2',
      name: 'Tan',
      room: 'React'
    },{
      id: '3',
      name: 'Pus',
      room: 'Home'
    }];
  });


  it('should add new user', () =>{
    var users = new Users();
    var user = {
      id: '123',
      name: 'Valery',
      room: 'Bam Bam'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });
  it('should remove a user', () =>{
    var userId ='1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () =>{
    var userId ='10';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);

  });

  it('should find a user', () =>{
    var userId ='3';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find a user', () =>{
    var userId ='99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return for home room', () =>{
    var userList = users.getUserList('Home');

    expect(userList).toEqual(['Val', 'Pus']);
  });

  it('should return for React room', () =>{
    var userList = users.getUserList('React');

    expect(userList).toEqual(['Tan']);
  });
});
