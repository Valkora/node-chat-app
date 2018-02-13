const expect = require('expect');

const {isRealString} = require('./validation');

describe('is real string ', () => {
  it('should reject non-string values', () =>{

    var res = isRealString(123);

    expect(res).toBe(false);
  });

  it('should reject string with only space', () =>{
    var res = isRealString('              ');

    expect(res).toBe(false);
  });

  it('should allow string with non-space characters', () =>{
    var res = isRealString('      mjyrnhtebgrfvs      ');

    expect(res).toBe(true);
  });
});

//import isRealString

//isRealString
