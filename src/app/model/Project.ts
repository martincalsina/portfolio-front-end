export class Project {

    private id: number;
    private name: string;
    private description: string;
    private picture: string;
    private url: string;
    private userId: number;

    constructor(id: number, name: string, description: 
                string, picture: string, url: string, userId: number) {

        this.id = id;
        this.name = name;
        this.description = description;
        this.picture = picture;
        this.url = url;
        this.userId = userId;
        
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getPicture(): string {
        return this.picture;
    }

    public getUrl(): string {
        return this.url;
    }

    public getUserId(): number {
        return this.userId;
    }

    public setPicture(picture: string): void {
        this.picture = picture;
    }

}