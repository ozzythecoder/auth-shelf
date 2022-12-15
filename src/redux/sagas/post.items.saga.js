import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postItems(action) {
  try {
    yield axios.post('/api/shelf', action.payload)
    yield put({ type: 'FETCH_ALL_ITEMS' })
  } catch (err) {
    alert('Error posting to database. Please try again later.');
  }
}

function* postItemsSaga() {
  yield takeLatest('ADD_NEW_ITEM', postItems)
}

export default postItemsSaga;