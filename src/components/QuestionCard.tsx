import React, { FC } from 'react'
// import classnames from 'classnames'
import './QuestionCard.css'
// import styles from './QuestionCard.module.scss'

// ts 自定义类型
type PropsType = {
  id: string
  title: string
  isPublished: boolean
  deleteQuestion?: (id: string) => void
  publishQuestion?: (id: string) => void
}

// FC - functional component
const QuestionCard: FC<PropsType> = props => {
  const { id, title, isPublished } = props

  //   function publish(id: string) {
  //     publishQuestion && publishQuestion(id)
  //   }

  //   function del(id: string) {
  //     deleteQuestion && deleteQuestion(id)
  //   }

  // useEffect(() => {
  //   console.log('question card mounted')

  //   return () => {
  //     console.log('question card unmounted', id) // 销毁
  //   }

  //   // 生命周期：创建，更新（state 变化），销毁
  // }, [])

  // let itemClassName = 'list-item'
  // if (isPublished) itemClassName += ' published'
  // // 逻辑稍微复杂

  // const itemClassName = classnames('list-item', { published: isPublished })
  // const itemClassName = classnames({
  //   'list-item': true,
  //   published: isPublished,
  // })

  //   const listItemClass = styles['list-item']
  //   const publishedClass = styles.published
  //   const itemClassName = classnames({
  //     [listItemClass]: true,
  //     [publishedClass]: isPublished,
  //   })

  function edit(id: string) {
    console.log('edit ', id)
  }

  return (
    <div key={id} className="list-item">
      <strong>{title}</strong>
      &nbsp;
      {/* 条件判断 */}
      {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
      &nbsp;
      <button
        onClick={() => {
          edit(id)
        }}
      >
        编辑问卷
      </button>
    </div>
  )
}

export default QuestionCard
