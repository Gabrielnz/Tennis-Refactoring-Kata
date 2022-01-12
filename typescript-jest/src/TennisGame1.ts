import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private firstPlayerScore: number = 0;
  private secondPlayerScore: number = 0;

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.firstPlayerScore += 1;
    else
      this.secondPlayerScore += 1;
  }

  getScore(): string {
    let score: string = '';
    let tempScore: number = 0;
    if (this.playersScoresAreTheSame()) {
      score = this.getScoreNameWhenPlayersHaveSameScore();
    }
    else if (this.isThereAnyPlayerWithFourOrMorePoints()) {
      const minusResult: number = this.firstPlayerScore - this.secondPlayerScore;
      if (minusResult === 1) score = 'Advantage player1';
      else if (minusResult === -1) score = 'Advantage player2';
      else if (minusResult >= 2) score = 'Win for player1';
      else score = 'Win for player2';
    }
    else {
      for (let i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.firstPlayerScore;
        else { score += '-'; tempScore = this.secondPlayerScore; }
        switch (tempScore) {
          case 0:
            score += 'Love';
            break;
          case 1:
            score += 'Fifteen';
            break;
          case 2:
            score += 'Thirty';
            break;
          case 3:
            score += 'Forty';
            break;
        }
      }
    }
    return score;
  }

  private getScoreNameWhenPlayersHaveSameScore() {
    switch (this.firstPlayerScore) {
      case 0:
        return 'Love-All';
      case 1:
        return 'Fifteen-All';
      case 2:
        return 'Thirty-All';
      default:
        return 'Deuce';
    }
  }

  private isThereAnyPlayerWithFourOrMorePoints() {
    return this.firstPlayerScore >= 4 || this.secondPlayerScore >= 4;
  }

  private playersScoresAreTheSame() {
    return this.firstPlayerScore === this.secondPlayerScore;
  }
}
