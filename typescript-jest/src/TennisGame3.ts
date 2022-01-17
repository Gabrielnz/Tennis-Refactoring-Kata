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
    if (this.firstPlayerPoints < 4 && this.secondPlayerPoints < 4 && !(this.firstPlayerPoints + this.secondPlayerPoints === 6)) {
      const p: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      score = p[this.firstPlayerPoints];
      return (this.firstPlayerPoints === this.secondPlayerPoints) ? score + '-All' : score + '-' + p[this.secondPlayerPoints];
    } else {
      if (this.firstPlayerPoints === this.secondPlayerPoints)
        return 'Deuce';
      score = this.firstPlayerPoints > this.secondPlayerPoints ? this.firstPlayerName : this.secondPlayerName;
      return (((this.firstPlayerPoints - this.secondPlayerPoints) * (this.firstPlayerPoints - this.secondPlayerPoints)) === 1) ? 'Advantage ' + score : 'Win for ' + score;
    }
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.firstPlayerPoints += 1;
    else
      this.secondPlayerPoints += 1;
  }
}
