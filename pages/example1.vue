<template>
  <div id="watch-example">
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'
export default {
  data() {
    return {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
    }
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion, oldQuestion) {
      console.log('NEWQUESTION, OLDQUESTION', newQuestion, oldQuestion)
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    },
  },
  created() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer() {
      if (!this.question.includes('?')) {
        this.answer = 'Questions usually contain a question mark. ;-)'
      } else {
        this.answer = 'Thinking...'
        axios
          .get('https://yesno.wtf/api')
          .then((res) => {
            this.answer = _.capitalize(res.data.answer)
          })
          .catch((err) => {
            this.answer = 'Error! Could not reach the API. ' + err
          })
      }
    },
  },
}
</script>
