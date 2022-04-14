import {ToArray, ToString} from "./Utils";

test("Convert Position array to String", () => {
    expect(ToString([1, 1])).toBe('a1');
    expect(ToString([3, 3])).toBe('c3');
    expect(ToString([8, 8])).toBe('h8');
})

test("Convert the position string to array", () => {
    expect(ToArray('a1')).toMatchObject([1, 1])
    expect(ToArray('c3')).toMatchObject([3, 3]);
})