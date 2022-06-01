export interface ISocial {
  icon: string
  link: string
}

export interface IWorkingHours {
  day: string,
  hours: Date
}

export interface IViewDoctor {
  id: number
  seourl: string
  fullname: string
  branch: string
  thumbnailURL: string
  about: string
  socials: ISocial[]
}

export interface IDoctor {
  fullname: string
  branch: string
  about: string
  image: string
  socials: ISocial[]
}

export interface IEmptyDoctor {
  fullname: string | null
  branch: string | null
  about: string | null
  image: string | null
  socials: ISocial[]
}

const doctor: IEmptyDoctor = {
  fullname: null,
  branch: null,
  about: null,
  image: null,
  socials: []
}

const social: ISocial = {
  icon: '',
  link: ''
}

const dataList = { doctor, social }

function cloneData (key: string) {
  // @ts-expect-error
  const emptyData = dataList[key]

  if (!emptyData) {
    console.error(`"${key}" is not found.`)

    return {}
  }

  return { ...emptyData }
}

export default cloneData
