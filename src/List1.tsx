import React, { FC } from 'react'
// import type { FC } from 'react'
// import './List1.css'
import QuestionCard from './components/QuestionCard'

// TS 类型
const List1: FC = () => {
  // 问卷列表数据
  const questionList = [
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ]

  //   function edit(id: string) {
  //     console.log('edit ', id)
  //   }

  return (
    <div>
      <h1>问卷列表页1</h1>
      {questionList.map(question => {
        const { id, title, isPublished } = question
        return <QuestionCard key={id} id={id} title={title} isPublished={isPublished} />
      })}
    </div>
  )
}

export default List1
