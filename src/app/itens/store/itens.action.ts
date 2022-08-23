import { createAction, props } from '@ngrx/store';
import { Itens } from './itens';

export const invokeItenAPI = createAction('[Itens API] Invoke Itens Fetch API');

export const itensFetchAPISuccess = createAction(
  '[Itens API] Fetch API Success',
  props<{ allItens: Itens[] }>()
);

export const invokeSaveNewItenAPI = createAction(
  '[Itens API] Inovke save new Iten api',
  props<{ newIten: Itens }>()
);

export const saveNewItenAPISucess = createAction(
  '[Itens API] save new Iten api success',
  props<{ newIten: Itens }>()
);

export const invokeUpdateItenAPI = createAction(
  '[Itens API] Inovke update Iten api',
  props<{ updateIten: Itens }>()
);

export const updateItenAPISucess = createAction(
  '[Itens API] update  Iten api success',
  props<{ updateIten: Itens }>()
);

export const invokeDeleteItenAPI = createAction(
  '[Itens API] Inovke delete Iten api',
  props<{ id: number }>()
);

export const deleteItenAPISuccess = createAction(
  '[Itens API] deletado Itens com sucesso',
  props<{ id: number }>()
);
