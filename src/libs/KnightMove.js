export default class KnightMove {
    static MOVES = [[1,2], [1,-2], [-1,2], [-1,-2], [2,1], [-2,1], [2,-1], [-2,-1]];

    validMovesFor(pos) {
        let result = [];
        for (let move of KnightMove.MOVES) {
            let newX = pos[0] + move[0];
            let newY = pos[1] + move[1];

            if (newX > 8 || newX < 1 || newY > 8 || newY < 1)
                continue;
            result.push([newX, newY]);
        }

        return result;
    }
}