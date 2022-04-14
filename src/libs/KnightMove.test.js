import KnightMove from './KnightMove'

test("Knight Moves from Inside Board", () => {
    const knight = new KnightMove();
    const pos = [3, 3];
    let moves = knight.validMovesFor(pos);
    expect(moves.length).toBe(8);

    for (let move of moves) {
        switch (Math.abs(move[0] - pos[0]))
        {
            case 1:
                expect(Math.abs(move[1] - pos[1])).toBe(2);
                break;
            case 2:
                expect(Math.abs(move[1] - pos[1])).toBe(1);
                break;
            default:
                fail();
                break;
        }
    }
});

test("Knight Moves from Corner", () => {
    const knight = new KnightMove();
    const pos = [1, 1];
    let moves = knight.validMovesFor(pos);
    expect(moves.length).toBe(2);

    const positions = [[2, 3], [3, 2]];
    for (let move of moves) {
        expect(positions.some(e => e[0] === move[0] && e[1] === move[1])).toBeTruthy();
    }
})