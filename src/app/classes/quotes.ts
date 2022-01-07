export class Quotes {

  

  constructor (
    public id: number,
    public quote: string,
    public postBy: string,
    public author: string,
    public postDate: Date,
    public likes: number = 0,
    public dislikes: number = 0
  ) {}
}
