// @flow
export function test() {
  const returnValue = []
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      returnValue.push(['odd', i])
    }
    else {
      returnValue.push(['even', i])
    }
  }
}
