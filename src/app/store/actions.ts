import { Action } from '@ngrx/store';

interface Product {
    albumId:number;
    id:number;
    title:string;
    url:string;
    thumbnailUrl:string;
}

export enum ActionTypes {
  LoadItems = '[Products] Load items from server',
  LoadSuccess = '[Products] Load success',
  Search = '[Products] Search'
}

export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;
}

export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}
// export class SearchItem implements Action {
//     readonly type = ActionTypes.Search;
  
//     constructor(public payload: Product) {}
//   }

export type ActionsUnion =  LoadItems | GetItems ;
