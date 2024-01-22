export class Skill {

    private id: number;
    private name: string;
    private description: string;
    private icon: string;
    private isSoft: boolean;
    private userId: number;

    constructor(id: number, name: string, description: string, 
                icon: string, isSoft: boolean, userId:number) {

        this.id = id;
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.isSoft = isSoft;
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

    public getIcon(): string {
        return this.icon;
    }

    public getIsSoft(): boolean {
        return this.isSoft;
    }

    public getUserId(): number {
        return this.userId;
    }

}