import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private firstPlayerPoints: number = 0;
  private secondPlayerScore: number = 0;
  private scoreNames: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.firstPlayerPoints += 1;
    else
      this.secondPlayerScore += 1;
  }

  getScore(): string {
    if (this.playersPointsAreTheSame()) {
      return this.getScoreWhenPlayersHaveSamePoints();
    }
    if (this.isThereAPlayerWithFourOrMorePoints()) {
      return this.getScoreWhenAPlayerHasFourOrMorePoints();
    }
    return `${this.scoreNames[this.firstPlayerPoints]}-${this.scoreNames[this.secondPlayerScore]}`;
  }

  private getScoreWhenAPlayerHasFourOrMorePoints() {
    const minusResult: number = this.firstPlayerPoints - this.secondPlayerScore;
    if (minusResult === 1)
      return 'Advantage player1';

    if (minusResult === -1)
      return 'Advantage player2';

    if (minusResult >= 2)
      return 'Win for player1';

    return 'Win for player2';
  }

  private getScoreWhenPlayersHaveSamePoints() {
    if (this.firstPlayerPoints <= 2) {
      return `${this.scoreNames[this.firstPlayerPoints]}-All`;
    }
    return 'Deuce'
  }

  private isThereAPlayerWithFourOrMorePoints() {
    return this.firstPlayerPoints >= 4 || this.secondPlayerScore >= 4;
  }

  private playersPointsAreTheSame() {
    return this.firstPlayerPoints === this.secondPlayerScore;
  }
}
