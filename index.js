function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('add() expects only numbers.');
  }

  return a + b;
}

module.exports = add;
