import { TennisGame } from './TennisGame';

export class TennisGame2 implements TennisGame {
  player1Points: number = 0;
  player2Points: number = 0;

  player1Result: string = '';
  player2Result: string = '';

  private player1Name: string;
  private player2Name: string;

  private scores = ['Love', 'Fifteen', 'Thirty', 'Forty'];

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  getScore(): string {
    if (this.firstPlayerWins() || this.secondPlayerWins()) {
      return `Win for ${this.getPlayerWithMostPoints()}`;
    }

    if (this.firstPlayerHasAdvantage() || this.secondPlayerHasAdvantage()) {
      return `Advantage ${this.getPlayerWithMostPoints()}`;
    }

    if (this.playersHaveSamePoints()) {
      return this.getScoreWhenPlayersHaveSamePoints();
    }

    return this.getPlayersScore();
  }

  private getPlayersScore() {
    this.player1Result = this.scores[this.player1Points];
    this.player2Result = this.scores[this.player2Points];
    return this.player1Result + '-' + this.player2Result;
  }

  private secondPlayerWins() {
    return this.secondPlayerHasFourOrMorePoints() && this.secondPlayerHasTwoOrMorePointsOfAdvantage();
  }

  private firstPlayerWins() {
    return this.firstPlayerHasFourOrMorePoints() && this.firstPlayerHasTwoOrMorePointsOfAdvantage();
  }

  private secondPlayerHasAdvantage() {
    return this.secondPlayerHasMorePointsThanFirstPlayer() && this.firstPlayerHaveThreeOrMorePoints();
  }

  private firstPlayerHasAdvantage() {
    return this.firstPlayerHasMorePointsThanSecondPlayer() && this.secondPlayerHasThreeOrMorePoints();
  }

  private secondPlayerHasTwoOrMorePointsOfAdvantage() {
    return (this.player2Points - this.player1Points) >= 2;
  }

  private firstPlayerHasTwoOrMorePointsOfAdvantage() {
    return (this.player1Points - this.player2Points) >= 2;
  }

  private secondPlayerHasFourOrMorePoints() {
    return this.player2Points >= 4;
  }

  private firstPlayerHasFourOrMorePoints() {
    return this.player1Points >= 4;
  }

  private getScoreWhenPlayersHaveSamePoints(): string {
    if (this.firstPlayerHaveThreeOrMorePoints())
      return 'Deuce'
    return this.scores[this.player1Points] + '-All'
  }

  private secondPlayerHasThreeOrMorePoints() {
    return this.player2Points >= 3;
  }


  private secondPlayerHasMorePointsThanFirstPlayer() {
    return this.player2Points > this.player1Points;
  }

  private firstPlayerHasMorePointsThanSecondPlayer() {
    return this.player1Points > this.player2Points;
  }

  private firstPlayerHaveThreeOrMorePoints() {
    return this.player1Points >= 3;
  }

  private playersHaveSamePoints() {
    return this.player1Points === this.player2Points;
  }

  private getPlayerWithMostPoints(): string {
    if (this.firstPlayerHasMorePointsThanSecondPlayer())
      return this.player1Name
    return this.player2Name
  }

  addPointToFirstPlayer(): void {
    this.player1Points++;
  }

  addPointToSecondPlayer(): void {
    this.player2Points++;
  }

  wonPoint(player: string): void {
    if (player === this.player1Name)
      this.addPointToFirstPlayer();
    else
      this.addPointToSecondPlayer();
  }
}
