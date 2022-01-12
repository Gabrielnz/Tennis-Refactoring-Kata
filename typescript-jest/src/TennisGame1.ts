import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private firstPlayerScore: number = 0;
  private secondPlayerScore: number = 0;
  private scoreNames: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.firstPlayerScore += 1;
    else
      this.secondPlayerScore += 1;
  }

  getScore(): string {
    if (this.playersPointsAreTheSame()) {
      return this.getScoreWhenPlayersHaveSamePoints();
    } else if (this.isThereAPlayerWithFourOrMorePoints()) {
      return this.getScoreWhenAPlayerHasFourOrMorePoints();
    }
    return `${this.scoreNames[this.firstPlayerScore]}-${this.scoreNames[this.secondPlayerScore]}`;
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
    if (this.firstPlayerScore <= 2) {
      return `${this.scoreNames[this.firstPlayerScore]}-All`;
    }
    return 'Deuce'
  }

  private isThereAPlayerWithFourOrMorePoints() {
    return this.firstPlayerScore >= 4 || this.secondPlayerScore >= 4;
  }

  private playersPointsAreTheSame() {
    return this.firstPlayerScore === this.secondPlayerScore;
  }
}
