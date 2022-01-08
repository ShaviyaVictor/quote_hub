export class Quotes {

  showInsights!: boolean;

  constructor (
    public id: number,
    public quote: string,
    public postBy: string,
    public author: string,
    public postDate: Date,
    public likes: number = 0,
    public dislikes: number = 0,
  ) {
    this.showInsights = false;
  }
}
