export default (a, b) => {
  console.assert(a instanceof Array && b instanceof Array, 'Arguments of `intersect` should be arrays.')

  for (const value of a) {
    if (b.includes(value)) return true
  }

  return false
}
