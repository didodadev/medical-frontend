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
  fullName: string
  branch: string
  thumbnailURL: string
  about: string
  socials: ISocial[]
}

export interface IDoctor {
  fullName: string
  branch: string
  about: string
  image: string
  socials: ISocial[]
}

export interface IEmptyDoctor {
  fullName: string | null
  branch: string | null
  about: string | null
  image: string | null
  socials: ISocial[]
}

const doctor: IEmptyDoctor = {
  fullName: null,
  branch: null,
  about: null,
  image: null,
  socials: []
}

const service = {
  title: null,
  content: null,
  image: null
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
