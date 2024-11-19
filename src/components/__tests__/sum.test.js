import { sum } from "../sum";

test("this  should return the sum of two numbers", ()=> {
      const result = sum(2,5);
      expect(result).toBe(7);
});