import { createStore } from '@reduxjs/toolkit';
import Reducers from '../reducers/index';
export const Store = createStore(Reducers);
// Aca va ir un poco de logica