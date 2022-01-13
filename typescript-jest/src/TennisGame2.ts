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
    if (this.player1Points === this.player2Points && this.player1Points < 4) {
      score = this.scores[this.player1Points] + '-All';
    }
    if (this.player1Points === this.player2Points && this.player1Points >= 3)
      score = 'Deuce';

    if (this.player1Points > 0 && this.player2Points === 0) {
      this.player1Result = this.scores[this.player1Points];

      this.player2Result = 'Love';
      score = this.player1Result + '-' + this.player2Result;
    }
    if (this.player2Points > 0 && this.player1Points === 0) {
      this.player2Result = this.scores[this.player2Points];

      this.player1Result = 'Love';
      score = this.player1Result + '-' + this.player2Result;
    }

    if (this.player1Points > this.player2Points && this.player1Points < 4) {
      this.player1Result = this.scores[this.player1Points];
      this.player2Result = this.scores[this.player2Points];

      score = this.player1Result + '-' + this.player2Result;
    }
    if (this.player2Points > this.player1Points && this.player2Points < 4) {
      this.player1Result = this.scores[this.player1Points];
      this.player2Result = this.scores[this.player2Points];

      score = this.player1Result + '-' + this.player2Result;
    }

    if (this.player1Points > this.player2Points && this.player2Points >= 3) {
      score = `Advantage ${this.player1Name}`;
    }

    if (this.player2Points > this.player1Points && this.player1Points >= 3) {
      score = `Advantage ${this.player2Name}`;
    }

    if (this.player1Points >= 4 && this.player2Points >= 0 && (this.player1Points - this.player2Points) >= 2) {
      score = `Win for ${this.player1Name}`;
    }
    if (this.player2Points >= 4 && this.player1Points >= 0 && (this.player2Points - this.player1Points) >= 2) {
      score = `Win for ${this.player2Name}`;
    }
    return score;
  }

  P1Score(): void {
    this.player1Points++;
  }

  P2Score(): void {
    this.player2Points++;
  }

  wonPoint(player: string): void {
    if (player === this.player1Name)
      this.P1Score();
    else
      this.P2Score();
  }
}
