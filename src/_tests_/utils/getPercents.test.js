import {getPercents} from "../../utils/getPercents.js";

describe ("tests for function getPercents",()=>{
    
    
it("the function returns a percentage of the number", ()=>{
expect (getPercents(30,200)).toBe(60);
});
    
})