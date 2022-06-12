export interface IPostRequestKeys {
  image: string
}

// Service
export interface IServiceView {
  title: string
  content: string
}

export interface IServiceData extends IServiceView, IPostRequestKeys {
  id: number
  seourl: string
  thumbnailURL: string
}

// Doctor
export interface IDoctorSocial {
  icon: string
  url: string
}

export interface IDoctorView {
  fullName: string
  branch: string
  about: string
  socials: IDoctorSocial[]
}

export interface IDoctorData extends IDoctorView, IPostRequestKeys {
  id: number,
  seourl: string
  thumbnailURL: string
}

// Gallery Image
export interface IImageView {
  title: string
  subTitle: string
  category: string
}

export interface IImageData extends IImageView, IPostRequestKeys {
  id: number,
  seourl: string
  thumbnailURL: string
}

// Blog
export interface IBlogView {
  title: string
  content: string
  coverLetter: string
}

export interface IBlogData extends IBlogView, IPostRequestKeys {
  id: number,
  seourl: string
  thumbnailURL: string
}
