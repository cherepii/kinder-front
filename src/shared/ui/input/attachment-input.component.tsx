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
      className="relative flex h-[5.625rem] w-full cursor-pointer flex-col items-center justify-center max-lg:h-[3.625rem]"
    >
      <IconComponent name="inputBg" className="absolute inset-0 z-[-1] max-lg:hidden" />
      <IconComponent
        name="inputBgMob"
        className="absolute inset-y-0 left-[50%] z-[-1] hidden translate-x-[-50%] max-lg:block"
      />
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
        <p className="mr-2 font-noto-sans text-[1.875rem] font-medium max-lg:mr-0 max-lg:text-[1.25rem] ">
          {label ?? 'Прикрепите фото'}
        </p>
        <IconComponent name="attachment" className="max-lg:scale-[0.7]" />
      </div>
    </label>
  )
}
