export default class QueenMove {
    validMovesFor(pos) {
        let moves = [];
        for (let i = 1; i <= 7; i++) {
            moves.push([i, i], [i, -i], [-i, i], [-i, -i], [0, i], [0, -i], [i, 0], [-i, 0]);
        }
        let result = [];
        for (let move of moves) {
            let newX = pos[0] + move[0];
            let newY = pos[1] + move[1];
            if (newX > 8 || newX < 1 || newY > 8 || newY < 1) continue;
            result.push([newX, newY]);
        }

        return result;
    }
}
