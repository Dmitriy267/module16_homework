import {testPrime} from "../../Prime/testPrime.js";

describe ("tests for function testPrime",()=>{
    
    
it("number checking function", ()=>{
expect (testPrime(51)).toBe(false);
});
 it("prime number",()=>{
  expect (testPrime(7)).toBe(true);   
 });   
})