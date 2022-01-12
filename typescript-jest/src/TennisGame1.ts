import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private firstPlayerScore: number = 0;
  private secondPlayerScore: number = 0;

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.firstPlayerScore += 1;
    else
      this.secondPlayerScore += 1;
  }

  getScore(): string {
    let score: string = '';
    if (this.playersScoresAreTheSame()) {
      score = this.getScoreNameWhenPlayersHaveSameScore();
    }
    else if (this.isThereAnyPlayerWithFourOrMorePoints()) {
      score = this.getScoreNameWhenAPlayerHasFourOrMorePoints(score);
    }
    else {
      let tempScore: number = 0;
      for (let i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.firstPlayerScore;
        else { score += '-'; tempScore = this.secondPlayerScore; }
        switch (tempScore) {
          case 0:
            score += 'Love';
            break;
          case 1:
            score += 'Fifteen';
            break;
          case 2:
            score += 'Thirty';
            break;
          case 3:
            score += 'Forty';
            break;
        }
      }
    }
    return score;
  }

  private getScoreNameWhenAPlayerHasFourOrMorePoints(score: string) {
    const minusResult: number = this.firstPlayerScore - this.secondPlayerScore;
    if (minusResult === 1)
      score = 'Advantage player1';
    else if (minusResult === -1)
      score = 'Advantage player2';
    else if (minusResult >= 2)
      score = 'Win for player1';
    else
      score = 'Win for player2';
    return score;
  }

  private getScoreNameWhenPlayersHaveSameScore() {
    const scores = ['Love-All', 'Fifteen-All', 'Thirty-All'];
    if (this.firstPlayerScore <= 2) {
      return scores[this.firstPlayerScore]
    }
    return 'Deuce'
  }

  private isThereAnyPlayerWithFourOrMorePoints() {
    return this.firstPlayerScore >= 4 || this.secondPlayerScore >= 4;
  }

  private playersScoresAreTheSame() {
    return this.firstPlayerScore === this.secondPlayerScore;
  }
}
