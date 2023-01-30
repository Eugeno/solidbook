import * as React from 'react'

import Description from './description.mdx'
import Question from './question.mdx'
import { IQuiz } from '../IQuiz'

export const srpPatterns3: IQuiz = {
  name: 'srp-patterns-3',
  question: <Question />,
  variants: [
    {
      text: '1 класс'
    },
    {
      text: '2 класса'
    },
    {
      text: '3 класса',
      description: <Description />
    }
  ],
  meta: {
    correctAnswers: [2]
  }
}
