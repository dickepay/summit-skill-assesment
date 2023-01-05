
export class TodoItem
{
    public readonly id : number;
    public task : string;
    constructor(id:number, task:string){
        this.id = id;
        this.task = task;
    }

    public setTask(task:string): void
    {
        this.task = task;
    }

}
