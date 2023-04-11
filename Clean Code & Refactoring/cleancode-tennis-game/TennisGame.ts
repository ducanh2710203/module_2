export class TennisGame {
    score: string = '';

    getScore(playerName1: string,
             playerName2: string,
             personScore1: number,
             personScore2: number) {
        let Love = 0;
        let tempScore = Love;

        let comparePoints = personScore1 == personScore2;
        let Fifteen = 1;
        let Thirty = 2;
        let Forty = 3;
        if (comparePoints) {
            switch (personScore1) {
                case Love:
                    this.score = "Love-All";
                    break;
                case Fifteen:
                    this.score = "Fifteen-All";
                    break;
                case Thirty:
                    this.score = "Thirty-All";
                    break;
                case Forty:
                    this.score = "Forty-All";
                    break;
                default:
                    this.score = "Deuce";
                    break;

            }
        } else if (personScore1 >= 4 || personScore2 >= 4) {
            let minusResult = personScore1 - personScore2;
            if (minusResult == Fifteen) this.score = "Advantage player1";
            else if (minusResult == -Fifteen) this.score = "Advantage player2";
            else if (minusResult >= Thirty) this.score = "Win for player1";
            else this.score = "Win for player2";
        } else {
            for (let i = Fifteen; i < Forty; i++) {
                if (i == Fifteen) tempScore = personScore1;
                else {
                    this.score += "-";
                    tempScore = personScore2;
                }
                switch (tempScore) {
                    case Love:
                        this.score += "Love";
                        break;
                    case Fifteen:
                        this.score += "Fifteen";
                        break;
                    case Thirty:
                        this.score += "Thirty";
                        break;
                    case Forty:
                        this.score += "Forty";
                        break;
                }
            }
        }
    }
}
