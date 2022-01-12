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
    if (this.playersPointsAreTheSame()) {
      score = this.getScoreWhenPlayersHaveSamePoints();
    }
    else if (this.isThereAnyPlayerWithFourOrMorePoints()) {
      score = this.getScoreWhenAPlayerHasFourOrMorePoints();
    }
    else {
      const scoreNames = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      score += `${scoreNames[this.firstPlayerScore]}-${scoreNames[this.secondPlayerScore]}`;
    }
    return score;
  }

  private getScoreWhenAPlayerHasFourOrMorePoints() {
    const minusResult: number = this.firstPlayerScore - this.secondPlayerScore;
    if (minusResult === 1)
      return 'Advantage player1';
    else if (minusResult === -1)
      return 'Advantage player2';
    else if (minusResult >= 2)
      return 'Win for player1';
    
      return 'Win for player2';
  }

  private getScoreWhenPlayersHaveSamePoints() {
    const scores = ['Love-All', 'Fifteen-All', 'Thirty-All'];
    if (this.firstPlayerScore <= 2) {
      return scores[this.firstPlayerScore]
    }
    return 'Deuce'
  }

  private isThereAnyPlayerWithFourOrMorePoints() {
    return this.firstPlayerScore >= 4 || this.secondPlayerScore >= 4;
  }

  private playersPointsAreTheSame() {
    return this.firstPlayerScore === this.secondPlayerScore;
  }
}
