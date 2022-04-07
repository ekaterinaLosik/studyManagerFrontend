interface ITask {
    id?: string;
    title: string;
    type: string;
    course: string;
    dueDate: Date;
    body: string;
  }
  interface ITaskTypeOption {
    type: string;
  }
  
  interface ITypePercentage {
    count: number;
    type: string;
  }
  
  export { ITask, ITaskTypeOption, ITypePercentage };