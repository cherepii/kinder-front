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
      ownerId: string
      createdAt: string
    }
  ]
  id: string
}
