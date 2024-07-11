import { instance } from '@shared/api'
import { FileStatusesEnum, statusesMap } from '@shared/types'
import { Button, IconComponent } from '@shared/ui'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { toast } from 'react-toastify'

interface IProperties {
  fileId: string | null
  opened: boolean
  onSuccessStatusChange: () => void
  toggleOpened: () => void
}
export const ChangeFileStatusModal = (props: IProperties) => {
  const { fileId, opened, toggleOpened, onSuccessStatusChange } = props

  const [loading, setLoading] = useState(false)

  const [statusValue, setStatusValue] = useState<FileStatusesEnum>(
    FileStatusesEnum.SIGNED
  )

  const handleChangeStatus = async () => {
    if (!fileId) {
      toast.warning('Выберите файл!')
      return
    }

    try {
      setLoading(true)
      const res = await instance.put(`/files/${fileId}`, { status: statusValue })
      toggleOpened()
      onSuccessStatusChange()
      if (res.status === 200) {
        toast.success('Статус успешно изменен!')
      } else {
        toast.error('Не удалось поменять статус. Попробуйте снова')
      }
    } catch {
      toast.error('Не удалось поменять статус. Попробуйте снова')
    } finally {
      setLoading(false)
    }
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
          <div className="aspect-square w-full max-w-[520px] rounded-[1.25rem] bg-[#F3DA97] p-9 shadow-2xl max-lg:h-[28.125rem] max-lg:px-5 max-lg:py-7">
            <button className="ml-auto block" onClick={toggleOpened}>
              <IconComponent name="close" />
            </button>
            <div className="mx-auto mt-2 flex h-full w-full max-w-[27rem]  flex-col items-center max-lg:mt-[4.375rem]">
              <h2 className="text-center text-3xl font-bold max-lg:text-xl">
                Изменение статуса файла
              </h2>
              <select
                name="change_status_select"
                id="changeFileStatus"
                className="mt-10 h-10 w-full cursor-pointer rounded-lg text-xl"
                onChange={(e) => setStatusValue(e.target.value as FileStatusesEnum)}
              >
                {Object.entries(statusesMap).map(([key, value]) => (
                  <option value={key} key={key}>
                    {value}
                  </option>
                ))}
              </select>
              <Button
                disabled={loading}
                containerClassName={clsx(
                  'mt-auto opacity-100',
                  loading && 'animate-pulse'
                )}
                onClick={handleChangeStatus}
              >
                Сохранить
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
