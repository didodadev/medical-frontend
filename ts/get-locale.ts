const getLocaleKey = (object: object, key: string): string | void => {
  if (typeof window === 'undefined') return

  const paths = location.pathname.split('/')

  if (paths.includes('tr')) {
    return object[key as keyof object]
  } else if (paths.includes('en')) {
    return object[key + 'EN' as keyof object]
  } else {
    return object[key + 'DE' as keyof object]
  }
}

export default getLocaleKey