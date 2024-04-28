import { useState } from "react";

export default function ScoreKeeper ({ numPlayers=3, target=5 }) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));

    // one way for incrementing
    // const incrementScore = (idx) => {
    //     setScores(prevScores => {
    //         const copy = [...prevScores];
    //         copy[idx] += 1;
    //         return copy;
    //     })
    // }

    // other way of incrementing
    const incrementScore = (idx) => {
        setScores(prevScores => {
            return prevScores.map((score, i) => {
                if(i === idx) return score + 1;
                return score;
            })
        })
    }

    const reset = () => {
        setScores(new Array(numPlayers).fill(0))
    }

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, idx) => {
                    return (
                    <li key={idx}>
                        Player{idx + 1}: {score}
                        <button onClick={() => incrementScore(idx)}>+1</button>
                        {score >= target && "Winner!"}
                    </li>
                    );
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}



// import { useState } from "react";

// function ScoreKeerper () {
//     const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });

//     return (
//         <div>
//             <p>Player 1: { scores.p1Score }</p>
//             <p>Player 2: { scores.p2Score }</p>
//             <button onClick={() => {
//                 setScores(oldScores => {
//                     return {...oldScores, p1Score: oldScores.p1Score + 1};
//                 });
//             }}>+1 Player 1</button>
//             <button onClick={() => {
//                 setScores(oldScores => {
//                     return {...oldScores, p2Score: oldScores.p2Score + 1};
//                 });
//             }}>+1 Player 2</button>
//         </div>
//     );
// }

// export default ScoreKeerper;