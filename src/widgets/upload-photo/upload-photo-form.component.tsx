import { AttachmentInput, Button, ImagePreview, Input } from '@shared/ui'
import type { ChangeEvent } from 'react'
import { useCallback, useState } from 'react'

export const UploadPhotoForm = () => {
  const [files, setFiles] = useState<FileList | null>(null)

  const handleAddFiles = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { files: inputFiles } = e.target
    if (inputFiles) setFiles(inputFiles)
  }, [])

  return (
    <div className="mx-auto flex w-full max-w-[21.875rem] flex-col items-center gap-[1.125rem] pb-[4.5rem]">
      <Input placeholder="Имя и фамилия" />
      <Input placeholder="Номер телефона" />
      <AttachmentInput onChange={handleAddFiles} />
      <ImagePreview fileList={files} />
      <div className="mx-auto w-full max-w-[14.5625rem]">
        <Button
          onClick={() => console.log('first')}
          variant="secondary"
          containerClassName="mt-[1.5625rem]"
        >
          Загрузить
        </Button>
      </div>
    </div>
  )
}
