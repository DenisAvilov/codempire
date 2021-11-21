/* eslint-disable no-param-reassign */
import {
  createSlice,
  PayloadAction,
  getDefaultMiddleware,
  configureStore,
} from '@reduxjs/toolkit'
import logger from 'redux-logger';
import { categoriesArray } from './initState';

const chucknorris: Chucknorris = {
  categories: '',
  createdAt: '',
  iconUrl: '',
  id: '',
  updatedAt: '',
  url: '',
  value: '',
}

const randomQuote = createSlice({
  name: 'random',
  initialState: chucknorris,
  reducers: {
    create: (state, { payload }: PayloadAction<Chucknorris>) => {
      if (payload) {
        state.categories = payload.categories
        state.createdAt = payload.createdAt
        state.iconUrl = payload.iconUrl
        state.id = payload.id
        state.updatedAt = payload.updatedAt
        state.url = payload.url
        state.value = payload.value
      }
    },
  },
})

const categoriesAll = createSlice({
  name: 'categories',
  initialState: categoriesArray,
  reducers: {
    findCategories: (state, { payload }: PayloadAction<Chucknorris>) => {
      state.splice(0, state.length, payload)
    },
  },
})

export const {
  create: randomAction,
} = randomQuote.actions

export const {
  findCategories: findAction,
} = categoriesAll.actions

const reducer = {
  randomQuote: randomQuote.reducer,
  categoriesAll: categoriesAll.reducer,
}

const middleware = [...getDefaultMiddleware(), logger];
export default configureStore({
  reducer,
  middleware,
})

export type Chucknorris = {
    categories: string,
    createdAt: string,
    iconUrl: string,
    id: string,
    updatedAt: string
    url: string
    value: string
}
