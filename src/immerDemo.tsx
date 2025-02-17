import React, { useState, FC } from 'react'
import { produce } from 'immer'
import QuestionCard from './components/QuestionCard'

const Demo: FC = () => {
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ])

  function setPublished(id: string) {
    setQuestionList(
      produce(draft => {
        const question = draft.find(q => q.id === id)
        if (question) {
          question.isPublished = true
        }
      })
    )
  }

  function addQuestion() {
    setQuestionList(
      produce(draft => {
        draft.push({
          id: `q${draft.length + 1}`,
          title: `问卷${draft.length + 1}`,
          isPublished: false,
        })
      })
    )
  }

  return (
    <div>
      <h1>Immer 示例</h1>
      <p>问题列表</p>
      <button onClick={addQuestion}>添加问卷</button>
      <ul>
        {questionList.map(question => {
          const { id, title, isPublished } = question
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              publishQuestion={setPublished}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Demo
