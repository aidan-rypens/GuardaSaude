export class ExamComment {
    date: string;
    authorId: number;
    authorName: string;
    commentText: string;

    constructor(date: string, authorId: number, authorName: string, commentText: string) {
        this.date = date;
        this.authorId = authorId;
        this.authorName = authorName;
        this.commentText = commentText;
    }
}