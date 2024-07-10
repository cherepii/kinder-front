export enum FileStatusesEnum {
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  REPEATED = 'repeated',
  SIGNED = 'signed',
}

export const statusesMap: { [key in FileStatusesEnum]: string } = {
  [FileStatusesEnum.SIGNED]: 'Загружено',
  [FileStatusesEnum.ACCEPTED]: 'Принято',
  [FileStatusesEnum.REJECTED]: 'Отклонено',
  [FileStatusesEnum.REPEATED]: 'Повторяется',
}
export const statusesColorMap: { [key in FileStatusesEnum]: string } = {
  [FileStatusesEnum.SIGNED]: '#919191',
  [FileStatusesEnum.ACCEPTED]: '#49b345',
  [FileStatusesEnum.REJECTED]: '#fa3939',
  [FileStatusesEnum.REPEATED]: '#E1D200',
}
export interface IUser {
  phoneNumber: string
  createdAt: string
  instagramName: string | null
  tg_user_id: number | null
  tg_username: string | null
  updatedAt: string
  username: string
  files: [
    {
      _id: string
      path: string
      owner: string
      createdAt: string
      status: FileStatusesEnum
    }
  ]
  id: string
}

export interface IFile {
  _id: string
  path: string
  createdAt: string
  status: FileStatusesEnum
  owner: IUser
}
