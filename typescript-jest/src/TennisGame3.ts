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
    if (this.bothPlayersHaveNotReachedFourPointsYet() && this.totalPointsHaveNotReachedSixYet()) {
      const scoreNames: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      if (this.playersHaveSamePoints()) {
        return scoreNames[this.firstPlayerPoints] + '-All';
      }
      return scoreNames[this.firstPlayerPoints] + '-' + scoreNames[this.secondPlayerPoints];
    }

    if (this.playersHaveSamePoints())
      return 'Deuce';

    if (this.aPlayerHasTheAdvantage()) {
      return 'Advantage ' + this.getPlayerNameThatHasMorePoints();
    }

    return 'Win for ' + this.getPlayerNameThatHasMorePoints();
  }

  private getPlayerNameThatHasMorePoints(): string {
    if (this.firstPlayerHasMorePointsThanSecondPlayer())
      return this.firstPlayerName;
    return this.secondPlayerName;
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
