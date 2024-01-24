export class Network {

    private id: number;
    private name: string;
    private icon: string;
    private url: string;
    private userId: number;

    constructor(id: number, name: string, icon: string, url: string, userId: number) {

        this.id = id;
        this.name = name;
        this.icon = icon;
        this.url = url;
        this.userId = userId;

    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getIcon(): string {
        return this.icon;
    }

    public getUrl(): string {
        return this.url;
    }

    public getUserId(): number {
        return this.userId;
    }

}