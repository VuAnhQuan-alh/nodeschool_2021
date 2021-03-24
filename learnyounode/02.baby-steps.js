process.argv.reduce((acc, cur) => {
  if (isNaN(Number(cur))) {
    acc.push(cur)
  } else {
    if (!acc[2]) {
      acc.push(Number(cur))
    } else {
      acc[2] += Number(cur)
    }
  }
  return acc
}, [])