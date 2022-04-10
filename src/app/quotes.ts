export class Quotes {
    
    constructor(
        public quote: string,
        public author: string,
        public editor: string,
        public createdDate: Date,
        public upVote:number,
        public downVote:number
    ) {
       
    }
}

