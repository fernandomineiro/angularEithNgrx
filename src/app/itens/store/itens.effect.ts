import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { Appstate } from 'src/app/shared/store/appstate';
import { ItensService } from '../itens.service';
import {
  itensFetchAPISuccess,
  deleteItenAPISuccess,
  invokeItensAPI,
  invokeDeleteItenAPI,
  invokeSaveNewItenAPI,
  invokeUpdateItenAPI,
  saveNewItenAPISucess,
  updateItenAPISucess,
} from './itens.action';
import { selectItens } from './itens.selector';

@Injectable()
export class ItensEffect {
  constructor(
    private actions$: Actions,
    private itensService: ItensService,
    private store: Store,
    private appStore: Store<Appstate>
  ) {}

  loadAllItens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeItensAPI),
      withLatestFrom(this.store.pipe(select(selectItens))),
      mergeMap(([, itenformStore]) => {
        if (itenformStore.length > 0) {
          return EMPTY;
        }
        return this.itensService
          .get()
          .pipe(map((data) => itensFetchAPISuccess({ allItens: data })));
      })
    )
  );

  saveNewIten$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSaveNewItenAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.itensService.create(action.newIten).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return saveNewItenAPISucess({ newIten: data });
          })
        );
      })
    );
  });

  updateItenAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeUpdateItenAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.itenssService.update(action.updateIten).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return updateItenAPISucess({ updateIten: data });
          })
        );
      })
    );
  });

  deleteItensAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeDeleteItenAPI),
      switchMap((actions) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.itensService.delete(actions.id).pipe(
          map(() => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return deleteItenAPISuccess({ id: actions.id });
          })
        );
      })
    );
  });
}
