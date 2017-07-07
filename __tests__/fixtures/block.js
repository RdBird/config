export function test() {
  const returnValue = [];
  const reprs = [];

  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      returnValue.push(['odd', i]);
    }
    else {
      returnValue.push(['even', i]);
    }

    switch (i) {
      case 0: {
        const zeroStr = `zero=${i}`;
        reprs.push(zeroStr);
        break;
      }
      case 1: {
        const oneStr = `one=${i}`;
        reprs.push(oneStr);
        break;
      }
      default:
        // do nothing
    }
  }

  // Ternary operator
  return (
    reprs.length === 0 ? 'zero' :
      reprs.length === 1 ? 'one' :
        'other'
  );
}
