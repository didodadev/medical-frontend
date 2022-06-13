export type IDataFieldTypes = 'input' | 'editor' | 'image' | 'icon' | 'single-icon'

export interface IDataField {
  title?: string
  type: IDataFieldTypes
  bind?: string
  required?: boolean
  label?: string
  inputType?: string
  textArea?: boolean
  EN?: boolean
}

export type IController<T> = (d: T) => {
  err?: string
}

export interface IControllers<T> {
  [key: string]: IController<T>
}