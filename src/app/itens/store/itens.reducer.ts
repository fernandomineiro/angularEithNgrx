import { createReducer, on } from '@ngrx/store';
import { Itens } from './itens';
import {
  itensFetchAPISuccess,
  deleteItenAPISuccess,
  saveNewItenAPISucess,
  updateItenAPISucess,
} from './itens.action';

export const initialState: ReadonlyArray<Itens> = [];

export const itenReducer = createReducer(
  initialState,
  on(itensFetchAPISuccess, (state, { allitens }) => {
    return allItens;
  }),
  on(saveNewItenAPISucess, (state, { newIten }) => {
    let newState = [...state];
    newState.unshift(newIten);
    return newState;
  }),
  on(updateItenAPISucess, (state, { updateIten }) => {
    let newState = state.filter((_) => _.id != updateIten.id);
    newState.unshift(updateIten);
    return newState;
  }),
  on(deleteItenAPISuccess, (state, { id }) => {
    let newState = state.filter((_) => _.id != id);
    return newState;
  })
);
