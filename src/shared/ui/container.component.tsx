import clsx from 'clsx'

interface IContainerProperties extends React.ComponentProps<'div'> {}

export const Container = (props: IContainerProperties) => {
  return (
    <div {...props} className={clsx('container', props.className)}>
      {props.children}
    </div>
  )
}
