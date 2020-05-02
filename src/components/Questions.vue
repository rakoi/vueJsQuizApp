<template>
  <div>
    <v-row>
      <v-col md="6" offset-md="3" offset-sm="2">
        <v-card class="mx-auto" elevation:2 flat:true max-width="600">
          <v-card-title>Question {{counter}}</v-card-title>
          <v-card-text class="text--primary">
            <div>
              <v-divider></v-divider>
              <p>
                <i v-html="currentQuestion" ></i>
              </p>
              <v-spacer></v-spacer>
              <div id="answers">
                <v-list>
                  <v-list-item text-center v-for="(item,index) in answers" v-bind:key="index">
                    <v-btn outlined @click="selectedAns(index)" color="indigo"><b v-html="item"></b></v-btn>
                  </v-list-item>
                  <v-spacer></v-spacer>
                </v-list>
              </div>
            </div>
            <v-card-subtitle>
              <v-alert 
               v-show="showCorrectAns"
              type="error">Correct answer is <i v-html="correct_answer"></i> </v-alert>

              <v-alert 
               v-show="correctAns"
              type="success">Correct</v-alert>

              
            </v-card-subtitle>
            <v-card-actions>
              <v-btn
                block
                @click="nextNumber"
                v-show="showNextBtn"
                :disabled="disableButton"
                color="success"
              >Next</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      counter: 1,
      currentQuestion: "",
      answers: [],
      answerIndex: 1,
      correct_answer: "",
      questionsLength: 1,
      disableButton: false,
      showNextBtn: false,
      correctAns:false,
      showCorrectAns:false
    };
  },
  computed: mapGetters(["allquestions","scores"]),
  methods: {
    ...mapActions(["fetchQuestions","increaseScore"]),
    nextNumber: function() {
      if (parseInt(this.counter) === parseInt(this.allquestions.length - 1)) {
        this.disableButton = true;
        this.updateQandA();
      } else {
        this.counter++;
        this.updateQandA();
      }
    },
    selectedAns: function(index) {
      if (index != this.answerIndex) {
        this.showCorrectAns=true;
      } else {
          this.correctAns=true
        this.increaseScore();
            
      }
      this.showNextBtn = true;
    },
    updateQandA: function() {
      Array.prototype.insert = function(index, item) {
        this.splice(index, 0, item);
      };
      this.showCorrectAns=false,
      
      this.showNextBtn = false;
      this.correctAns=false
      var ansindex = parseInt(Math.random() * 4);
      var question = this.allquestions[this.counter];
      this.questionsLength = this.allquestions.length;

      this.currentQuestion = question.question;
      this.answers = question.incorrect_answers;
      this.correct_answer = question.correct_answer;

      this.answerIndex = ansindex;
      this.answers.insert(ansindex, question.correct_answer);
    }
  },
  created() {
      var categoryId=this.$route.params.id;
    this.fetchQuestions(categoryId).then(() => {
      this.updateQandA();
    });
  }
};
</script>