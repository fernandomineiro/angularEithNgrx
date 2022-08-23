import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Itens } from './itens';

export const selectItens = createFeatureSelector<Itens[]>('myitens');

export const selectItenById = (itenId: number) =>
  createSelector(selectItens, (itens: Itens[]) => {
    let itenbyId = itens.filter((_) => _.id == itenId);
    if (itenbyId.length == 0) {
      return null;
    }
    return itenbyId[0];
  });
