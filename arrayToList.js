function arrayToList(array) {
  if (array.length === 0) {
    return null;
  } else {
    return {
      value: array[0],
      rest: arrayToList(array.slice(1))
    };
  }
}

function listToArray(list) {
  let array = [];
  while (list !== null) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

function prepend(element, list) {
  return {
    value: element,
    rest: list
  };
}

function nth(list, n) {
  for (let i = 0; i < n; i++) {
    if (list === null) return undefined;
    list = list.rest;
  }
  return list ? list.value : undefined;
}

function nth(list, n) {
  if (n === 0) {
    return list ? list.value : undefined;
  } else {
    return list && nth(list.rest, n - 1);
  }
}

