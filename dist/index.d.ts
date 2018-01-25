import { Action, Store } from 'redux';
export declare const reduxMesh: (store: Store<any>) => (next: any) => (action: Action) => void;
