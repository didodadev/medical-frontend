function pathHandler(path: string): string {
  if (process.client) {
    const basePATH = location.pathname.slice(0, 3)

    return (`${basePATH}${path}`)
  }

  return ''
}

export default pathHandler