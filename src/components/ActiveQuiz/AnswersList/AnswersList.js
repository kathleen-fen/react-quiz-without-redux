import React from 'react'
import classes from './AnswersList.css'
import AnsnwerItem from './AnswerItem/AnswerItem'

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        {props.answers.map((answer,index)=>{
            return (
                <AnsnwerItem
                    key = {index}
                    answer={answer}
                    onAnswerClick={props.onAnswerClick}
                    state = {props.state ? props.state[answer.id]:null}
                />
            )
        })}
    </ul>
)

export default AnswersList