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
    let score: string = '';
    if (this.playersHaveSamePoints()) {
      score = this.getScoreWhenPlayersHaveSamePoints(score);
    }
      

    if (this.firstPlayerHasOneOrMorePoints() && this.secondPlayerHasZeroPoints()) {
      this.player1Result = this.scores[this.player1Points];

      this.player2Result = 'Love';
      score = this.player1Result + '-' + this.player2Result;
    }
    if (this.secondPlayerHasOneOrMorePoints() && this.firstPlayerHasZeroPoints()) {
      this.player2Result = this.scores[this.player2Points];

      this.player1Result = 'Love';
      score = this.player1Result + '-' + this.player2Result;
    }

    if (this.firstPlayerHasMorePointsThanSecondPlayer() && this.firstPlayerHaveLessThanFourPoints()) {
      this.player1Result = this.scores[this.player1Points];
      this.player2Result = this.scores[this.player2Points];

      score = this.player1Result + '-' + this.player2Result;
    }
    if (this.secondPlayerHasMorePointsThanFirstPlayer() && this.secondPlayerHasLessThanFourPoints()) {
      this.player1Result = this.scores[this.player1Points];
      this.player2Result = this.scores[this.player2Points];

      score = this.player1Result + '-' + this.player2Result;
    }

    if (this.firstPlayerHasMorePointsThanSecondPlayer() && this.secondPlayerHasThreeOrMorePoints()) {
      score = `Advantage ${this.player1Name}`;
    }

    if (this.secondPlayerHasMorePointsThanFirstPlayer() && this.firstPlayerHaveThreeOrMorePoints()) {
      score = `Advantage ${this.player2Name}`;
    }

    if (this.firstPlayerHasFourOrMorePoints() && this.secondPlayerHasZeroOrMorePoints() && (this.player1Points - this.player2Points) >= 2) {
      score = `Win for ${this.player1Name}`;
    }
    if (this.secondPlayerHasFourOrMorePoints() && this.player1Points >= 0 && (this.player2Points - this.player1Points) >= 2) {
      score = `Win for ${this.player2Name}`;
    }
    return score;
  }

  private secondPlayerHasFourOrMorePoints() {
    return this.player2Points >= 4;
  }

  private secondPlayerHasZeroOrMorePoints() {
    return this.player2Points >= 0;
  }

  private firstPlayerHasFourOrMorePoints() {
    return this.player1Points >= 4;
  }

  private getScoreWhenPlayersHaveSamePoints(score: string) {
    if (this.firstPlayerHaveLessThanFourPoints())
      score = this.scores[this.player1Points] + '-All';

    if (this.firstPlayerHaveThreeOrMorePoints())
      score = 'Deuce';
    return score;
  }

  private secondPlayerHasThreeOrMorePoints() {
    return this.player2Points >= 3;
  }

  private secondPlayerHasLessThanFourPoints() {
    return this.player2Points < 4;
  }

  private secondPlayerHasMorePointsThanFirstPlayer() {
    return this.player2Points > this.player1Points;
  }

  private firstPlayerHasMorePointsThanSecondPlayer() {
    return this.player1Points > this.player2Points;
  }

  private secondPlayerHasOneOrMorePoints() {
    return this.player2Points > 0;
  }

  private firstPlayerHasZeroPoints() {
    return this.player1Points === 0;
  }

  private secondPlayerHasZeroPoints() {
    return this.player2Points === 0;
  }

  private firstPlayerHasOneOrMorePoints() {
    return this.player1Points > 0;
  }

  private firstPlayerHaveThreeOrMorePoints() {
    return this.player1Points >= 3;
  }

  private firstPlayerHaveLessThanFourPoints() {
    return this.player1Points < 4;
  }

  private playersHaveSamePoints() {
    return this.player1Points === this.player2Points;
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
