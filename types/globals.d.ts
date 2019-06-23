declare const expect: Chai.ExpectStatic;

declare namespace NodeJS {

  interface Global {
    expect: Chai.ExpectStatic;
  }
}
