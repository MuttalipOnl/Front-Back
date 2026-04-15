export function isEmail(value) {
  var re = /\S+@\S+\.\S+/;
  return re.test(value);
}

export function isNotEmpty(value) {
  return value.trim() != "";
}

export function hasMinLength(value, minlength) {
  return value.length >= minlength;
}

export function isEquals(value, valueToCompare) {
  return value === valueToCompare;
}
