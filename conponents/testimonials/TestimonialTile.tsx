import React from 'react'
import styles from './style.module.scss'

type TestimonialTileProps ={
    person: string
    description: string
}
export const TestimonialTile: React.FunctionComponent<TestimonialTileProps> = ({person, description }) => {
  return(
    <div className={styles.tile}>
      <QuoteImage/>
      <Testimonial text={description}/>
      <Signature text={person}/>
    </div>
  )
}

type textProps ={
  text: string
}
const Testimonial: React.FunctionComponent<textProps> = ({text}) => (
    <article className={styles.testimonialText}>
      {text}
    </article>
)
const Signature: React.FunctionComponent<textProps> = ({text}) => (
    <div className={styles.signature}>
      {text}
    </div>
)
const QuoteImage: React.FunctionComponent = () => (
    <div className={styles.imageQuote}>”</div>
)
