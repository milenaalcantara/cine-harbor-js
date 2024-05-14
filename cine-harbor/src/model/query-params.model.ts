export class QueryParams {
    constructor(
      public page: number = 0,
      public size: number = 10,
      public total?: number,
     
    ) {}
  }
  