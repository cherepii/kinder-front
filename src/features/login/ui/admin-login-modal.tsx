import { Button, Input } from '@shared/ui'
import { AnimatePresence, motion } from 'framer-motion'
import type { FormEvent } from 'react'
import { useState } from 'react'

export interface IFormValues {
  name: string
  password: string
}

interface IProperties {
  opened: boolean
  setOpened: (value: boolean) => void
  onSubmit: (value: IFormValues) => void
}
export const AdminLoginModal = (props: IProperties) => {
  const { opened, onSubmit } = props

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    onSubmit({ name, password })
  }

  return (
    <AnimatePresence>
      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex h-full w-full items-center justify-center bg-[rgba(255,255,255,.8)] px-4"
        >
          <form
            onSubmit={handleSubmit}
            className="aspect-square w-full max-w-[37.5rem] rounded-[1.25rem] bg-[#F3DA97] p-9 shadow-2xl max-lg:h-[28.125rem] max-lg:px-5 max-lg:py-7"
          >
            <div className="mx-auto mt-[3rem] flex w-full max-w-[27rem]  flex-col items-center max-lg:mt-[4.375rem]">
              <h2 className="text-center text-[3.75rem] font-bold leading-[3.75rem] max-lg:text-[2.75rem] max-lg:leading-[2.75rem]">
                Вход в систему
              </h2>
              <Input
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                containerClassName="my-[1.875rem] max-lg:my-[1.375rem]"
              />
              <Input
                placeholder="Пароль"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                containerClassName="mb-[1.875rem] max-lg:mb-[1.375rem]"
              />
              <Button variant="secondary" type="submit" disabled={false}>
                Войти
              </Button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
