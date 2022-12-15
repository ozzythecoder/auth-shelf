import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ALL_ITEMS" dispatches
function* fetchAllItems() {
  try {
    // If a user is logged in, this will return all items on the shelf
    const response = yield axios.get('/api/shelf');

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_ITEMS', payload: response.data });
  } catch (error) {
    console.log('Items get request failed', error);
  }
}

function* fetchItemsSaga() {
  yield takeLatest('FETCH_ALL_ITEMS', fetchAllItems);
}

export default fetchItemsSaga;
