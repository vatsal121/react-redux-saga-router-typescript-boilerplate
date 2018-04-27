// import { fork } from "redux-saga/effects";
import { signUpWatcherSaga } from "./containers/SignUpPage/saga";
import { signInWatcherSaga } from "./containers/SignInPage/saga";

// tslint:disable:typedef
function* allWatcherSagas() {
  // yield takeEvery(Login_RequestLogin, requestLogin);
  // loginWatcherSaga();
}


// export default function* mySaga() {
//   yield [
//     allWatcherSagas,
//     signUpWatcherSaga,
//   ];
// }
export default [
    // allWatcherSagas,
    signUpWatcherSaga,
    signInWatcherSaga
];