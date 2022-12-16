import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteItem(action) {
  try {
    yield axios.delete('/api/shelf/' + action.payload.id)
  } catch (err) {
    alert('Error deleting item from database. Please try again later.')
  }
}

function* deleteSaga() {
  yield takeLatest('DELETE_ITEM', deleteItem);
}

export default deleteSaga;