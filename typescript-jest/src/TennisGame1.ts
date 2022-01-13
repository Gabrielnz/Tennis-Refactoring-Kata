import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private player1Name: string;
  private player2Name: string;
  private firstPlayerPoints: number = 0;
  private secondPlayerPoints: number = 0;
  private scores: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name)
      this.firstPlayerPoints += 1;
    else
      this.secondPlayerPoints += 1;
  }

  getScore(): string {
    if (this.playersPointsAreTheSame()) {
      return this.getScoreWhenPlayersHaveSamePoints();
    }
    if (this.isThereAPlayerWithFourOrMorePoints()) {
      return this.getScoreWhenAPlayerHasFourOrMorePoints();
    }
    return `${this.scores[this.firstPlayerPoints]}-${this.scores[this.secondPlayerPoints]}`;
  }

  private getScoreWhenAPlayerHasFourOrMorePoints() {
    const minusResult: number = this.firstPlayerPoints - this.secondPlayerPoints;
    if (minusResult === 1)
      return `Advantage ${this.player1Name}`;

    if (minusResult === -1)
      return `Advantage ${this.player2Name}`;

    if (minusResult >= 2)
      return `Win for ${this.player1Name}`;

    return `Win for ${this.player2Name}`;
  }

  private getScoreWhenPlayersHaveSamePoints() {
    if (this.firstPlayerPoints <= 2) {
      return `${this.scores[this.firstPlayerPoints]}-All`;
    }
    return 'Deuce'
  }

  private isThereAPlayerWithFourOrMorePoints() {
    return this.firstPlayerPoints >= 4 || this.secondPlayerPoints >= 4;
  }

  private playersPointsAreTheSame() {
    return this.firstPlayerPoints === this.secondPlayerPoints;
  }
}
