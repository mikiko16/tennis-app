export class CreateArticle {
    constructor(
        public title: string,
        public image: string,
        public text: string,
        public date: Date
    ) {}
}