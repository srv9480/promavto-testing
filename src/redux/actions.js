import { DOGYES, DOG, DOGFAIL } from "./actionTypes";

export function requestDog() {
  return {
    type: DOGYES
  };
}
export function requestDogGood(data) {
  return {
    type: DOG,
    url: data.message
  };
}
export function requestDogBad() {
  return {
    type: DOGFAIL
  };
}