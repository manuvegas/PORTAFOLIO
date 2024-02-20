import React from 'react'

const SectionContainer = ({children,className,id}) => {
    const style=`${className} max-w-[740px] mx-auto pb-24`

  return (
    <section  id={id} className={style}>
      {children}
    </section>
  )
}

export default SectionContainer