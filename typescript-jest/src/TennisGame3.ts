import { TennisGame } from './TennisGame';

export class TennisGame3 implements TennisGame {
  private secondPlayerPoints: number = 0;
  private firstPlayerPoints: number = 0;
  private firstPlayerName: string;
  private secondPlayerName: string;

  constructor(firstPlayerName: string, secondPlayerName: string) {
    this.firstPlayerName = firstPlayerName;
    this.secondPlayerName = secondPlayerName;
  }

  getScore(): string {
    let score: string;
    if (this.bothPlayersHaveNotReachedFourPointsYet() && this.totalPointsHaveNotReachedSixYet()) {
      const scoreNames: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      score = scoreNames[this.firstPlayerPoints];
      if (this.playersHaveSamePoints()) {
        return score += '-All';
      }
      return score + '-' + scoreNames[this.secondPlayerPoints];
    }

    if (this.playersHaveSamePoints())
      return 'Deuce';

    if (this.firstPlayerHasMorePointsThanSecondPlayer())
      score = this.firstPlayerName;
    else {
      score = this.secondPlayerName;
    }

    if (this.aPlayerHasTheAdvantage()) {
      return 'Advantage ' + score;
    }

    return 'Win for ' + score;
  }

  private aPlayerHasTheAdvantage() {
    return ((this.firstPlayerPoints - this.secondPlayerPoints) * (this.firstPlayerPoints - this.secondPlayerPoints)) === 1;
  }

  private firstPlayerHasMorePointsThanSecondPlayer() {
    return this.firstPlayerPoints > this.secondPlayerPoints;
  }

  private playersHaveSamePoints() {
    return this.firstPlayerPoints === this.secondPlayerPoints;
  }

  private totalPointsHaveNotReachedSixYet() {
    return !(this.firstPlayerPoints + this.secondPlayerPoints === 6);
  }

  private bothPlayersHaveNotReachedFourPointsYet() {
    return this.firstPlayerPoints < 4 && this.secondPlayerPoints < 4;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.firstPlayerPoints += 1;
    else
      this.secondPlayerPoints += 1;
  }
}
