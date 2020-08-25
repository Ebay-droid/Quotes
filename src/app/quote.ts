export class Quote {
  // quote: string;
  // Author:string
  // date: Date
  showDetails: boolean;

  constructor(public quote: string,public Author: string,public creator: string, public created: Date){
    this.showDetails=false;
  }
}
