export function verifyPassword(password, stateVar, setStateVar) {
  if (password && password.length <= 30 && password.length >= 10) {
    console.log("entrei no true");
    setStateVar({ ...stateVar, password: true });
  } else {
    console.log("entrei no ");
    setStateVar({ ...stateVar, password: false });
  }
}

export function verifyEmail(email, stateVar, setStateVar) {
  const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (regexEmail.test(email)) {
    setStateVar({ ...stateVar, email: true });
  } else {
    setStateVar({ ...stateVar, email: false });
  }
}
