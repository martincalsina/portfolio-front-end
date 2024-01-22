export class Education {

    private id: number;
    private institution: string;
    private title: string;
    private description: string;
    private startDate: Date;
    private endDate: Date;
    private userId: number;
        
    constructor(id: number, institution: string, title: string, 
               description: string, startDate: Date, endDate: Date, userId: number) {

        this.id = id;
        this.institution = institution;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.userId = userId;

    }

    public getId(): number {
        return this.id;
    }

    public getIntitution(): string {
        return this.institution;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getStartDate(): Date {
        return this.startDate;
    }

    public getEndDate(): Date {
        return this.endDate;
    }

    public getUserId(): number {
        return this.userId;
    }

}