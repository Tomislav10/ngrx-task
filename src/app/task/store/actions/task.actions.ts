import {createAction} from '@ngrx/store';


export const change = createAction(
  '[Task page] Change'
);

export const increase = createAction(
  '[Task page] Increase'
);

export const decrease = createAction(
  '[Task page] Decrease'
);

export const reset = createAction(
  '[Task page] Reset'
);
