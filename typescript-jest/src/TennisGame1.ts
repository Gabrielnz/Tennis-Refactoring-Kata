import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private firstPlayerPoints: number = 0;
  private secondPlayerPoints: number = 0;
  private scores: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
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
      return 'Advantage player1';

    if (minusResult === -1)
      return 'Advantage player2';

    if (minusResult >= 2)
      return 'Win for player1';

    return 'Win for player2';
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
