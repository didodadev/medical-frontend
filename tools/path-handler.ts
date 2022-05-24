function pathHandler(path: string) {
  if (process.client) {
    const basePATH = location.pathname

    return (`${basePATH}${path}`)
  }
}

export default pathHandler