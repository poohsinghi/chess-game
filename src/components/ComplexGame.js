import { forwardRef, useImperativeHandle, useState } from "react";
import { Chessboard } from "react-chessboard";
import { TextField } from "@mui/material";
import KnightMove from "../libs/KnightMove";
import { ToArray, ToString } from "../libs/Utils";
import BishopMove from "../libs/BishopMove";
import QueenMove from "../libs/QueenMove";

const ComplexGame = forwardRef((props, ref) => {
    const [steps, setSteps] = useState("The initial Knight position: c3, Queen: c2, Bishop:c1\r\n");
    const [position, setPosition] = useState({ c3: "wN", c2: "wQ", c1: "wB" });
    const knight = new KnightMove();
    const bishop = new BishopMove();
    const queen = new QueenMove();
    const pieces = [{ Knight: "wN" }, { Queen: "wQ" }, { Bishop: "wB" }];

    function move(idx) {
        let randomPieces = Math.floor(Math.random() * Object.keys(position).length);
        let posStr = Object.keys(position).find((key) => position[key] === Object.values(pieces[randomPieces])[0]);
        let pos = ToArray(posStr);
        let possibleMoves = [];
        let piecesIcon = "";
        switch (randomPieces) {
            case 0:
                possibleMoves = knight.validMovesFor(pos);
                piecesIcon = "wN";
                break;
            case 1:
                possibleMoves = queen.validMovesFor(pos);
                piecesIcon = "wQ";
                break;
            case 2:
                possibleMoves = bishop.validMovesFor(pos);
                piecesIcon = "wB";
                break;
            default:
                break;
        }
        let index;
        let dest;
        let samePos;
        do {
            index = Math.floor(Math.random() * possibleMoves.length);
            dest = ToString(possibleMoves[index]);
            samePos = Object.keys(position).find((el) => el === dest);
        } while (samePos);
        setPosition((p) => {
            if (p.hasOwnProperty(posStr)) {
                delete p[posStr];
            }

            p[dest] = piecesIcon;
            return p;
        });
        setSteps((s) => {
            return s + "The " + Object.keys(pieces[randomPieces])[0] + "#" + idx + " moves: " + dest + "\r\n";
        });
    }

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    useImperativeHandle(ref, () => ({
        async play() {
            for (let i = 1; i < 11; i++) {
                move(i);
                await delay(1000);
            }
        },
    }));

    return (
        <div className="Content">
            <div className="ChessBoard">
                <Chessboard position={position} arePiecesDraggable={false} animationDuration={200} />
            </div>
            <div className="Output">
                <TextField multiline value={steps} className="MoveList" rows={20} InputProps={{ readOnly: true }} />
            </div>
        </div>
    );
});

export default ComplexGame;
