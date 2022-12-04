import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchProductSaga(action) {
  const products = yield call(api.fetchProducts);
  console.log(products);
  yield put(actions.getProducts.getProductsSuccess(products.data));
}

function* mySaga() {
  yield takeLatest(actions.getProducts.getProductsRequest, fetchProductSaga);
}

// generate function es6
export default mySaga;
