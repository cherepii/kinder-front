import { type ComponentProps, useId } from 'react'

import { IconComponent } from '../icon.component'

interface IAttachmentInputProperties extends ComponentProps<'input'> {
  label?: string
}
export const AttachmentInput = ({ label, ...rest }: IAttachmentInputProperties) => {
  const id = useId()

  return (
    <label
      htmlFor={id}
      className="relative flex h-[5.625rem] w-full cursor-pointer flex-col items-center justify-center"
    >
      <IconComponent name="inputBg" className="absolute inset-0 z-[-1]" />
      <input
        {...rest}
        type="file"
        id={id}
        accept="image/*"
        multiple
        hidden
        className="h-0 w-0 border-none outline-none"
      />
      <div className="flex items-center">
        <p className="mr-2 font-noto-sans text-[1.875rem] font-medium ">
          {label ?? 'Прикрепите фото'}
        </p>
        <IconComponent name="attachment" />
      </div>
    </label>
  )
}
