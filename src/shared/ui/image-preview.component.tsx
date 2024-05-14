import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'

interface ImagePreviewProperties {
  fileList: FileList | null
}
export const ImagePreview = (props: ImagePreviewProperties) => {
  const { fileList } = props

  if (!fileList) return <></>

  return (
    <PhotoProvider>
      <div className="w-full overflow-hidden">
        <div className="flex w-full items-center gap-3 overflow-x-scroll">
          {fileList &&
            Array.from(fileList).map((file) => (
              <PhotoView key={file.name} src={URL.createObjectURL(file)}>
                <Image
                  alt="preview"
                  src={URL.createObjectURL(file)}
                  width={120}
                  height={120}
                  className="aspect-square cursor-pointer rounded-md object-cover object-center"
                />
              </PhotoView>
            ))}
        </div>
      </div>
    </PhotoProvider>
  )
}
