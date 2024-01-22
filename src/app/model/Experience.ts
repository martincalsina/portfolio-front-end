export class Experience {

    private id: number;
    private institution: string;
    private position: string;
    private description: string;
    private startDate: Date;
    private endDate: Date | null;
    private userId: number;
        
    constructor(id: number, institution: string, position: string, 
               description: string, startDate: Date, endDate:Date | null, userId: number) {

        this.id = id;
        this.institution = institution;
        this.position = position;
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

    public getPosition(): string {
        return this.position;
    }

    public getDescription(): string {
        return this.description;
    }

    public getStartDate(): Date {
        return this.startDate;
    }

    public getEndDate(): Date | null {
        return this.endDate;
    }

    public getUserId(): number {
        return this.userId;
    }

}