export class Quote {
  constructor(
    public quote: String,
    public author: String,
    public upVotes: number,
    public downVotes: number
  ) { 
    this.upVotes = 0;
    this.downVotes = 0;
  }

}
