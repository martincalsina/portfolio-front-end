export class User {

    private id: number;
    private email: string;
    private password: string;
    private name: string;
    private headline: string;
    private description: string;
    private picture: string;

    constructor(id: number, email: string, password: string, 
                name: string, headline: string, description: string, picture: string) {

            this.id = id;
            this.email = email;
            this.password = password;
            this.name = name;
            this. headline = headline;
            this.description = description;
            this.picture = picture;

    }

    public getId(): number {
        return this.id;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public getName(): string {
        return this.name;
    }

    public getHeadline(): string {
        return this.headline;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string) {
        this.description = description;
    }

    public getPicture(): string {
        return this.picture;
    }

    public setPicture(picture: string) {
        this.picture = picture;
    }

}