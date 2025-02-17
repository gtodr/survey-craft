import React, { useState, FC } from 'react'
import { produce } from 'immer'
import QuestionCard from './components/QuestionCard'

const List2: FC = () => {
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ])

  //   function addQuestion() {
  //     setQuestionList(
  //       produce(draft => {
  //         draft.push({
  //           id: `q${draft.length + 1}`,
  //           title: `问卷${draft.length + 1}`,
  //           isPublished: false,
  //         })
  //       })
  //     )
  //   }

  function deleteQuestion(id: string) {
    // setQuestionList(pre =>
    //   pre.filter(q => {
    //     if (q.id === id) return false
    //     return true
    //   })
    // )

    setQuestionList(
      produce(draft => {
        const index = draft.findIndex(q => q.id === id)
        draft.splice(index, 1)
      })
    )
  }

  function publishQuestion(id: string) {
    // setQuestionList(pre =>
    //   pre.map(question => {
    //     if (question.id === id) {
    //       return {
    //         ...question,
    //         isPublished: true,
    //       }
    //     } else return question
    //   })
    // )

    setQuestionList(
      produce(draft => {
        const item = draft.find(q => q.id === id)
        if (item) item.isPublished = true
      })
    )
  }

  return (
    <>
      <div>
        <h1>问卷列表页2</h1>
        {questionList.map(question => {
          const { id, title, isPublished } = question
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              deleteQuestion={deleteQuestion}
              publishQuestion={publishQuestion}
            />
          )
        })}
      </div>
      <div>
        <button>发布问卷</button>
      </div>
    </>
  )
}

export default List2
