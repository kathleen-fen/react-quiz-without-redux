import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import Quiz from './conteiners/Quiz/Quiz'
import QuizList from './conteiners/QuizList/QuizList'
import Auth from './conteiners/Auth/Auth'
import QuizCreator from './conteiners/QuizCreator/QuizCreator'


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path = "/auth" component = {Auth} />
          <Route path = "/quiz-creator" component = {QuizCreator} />
          <Route path = "/quiz/:id" component = {Quiz} />
          <Route path = "/" component = {QuizList} />  
        </Switch>  
      </Layout>
    )
  }
}



export default App;
