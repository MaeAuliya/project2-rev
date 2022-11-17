<template>
  <div class="home">
    <h1 class="title is-1">ToDo App</h1>
    <input type="text" class="mb-5" v-model="search" name="search" placeholder="Search Category">
    <div class="columns box mb-5" v-for="task in filteredItems" :key="task.id">
      <div class="column is-one-fifth"
      :class="{'has-text-success line-through' : task.checked}">
        <h3>{{ task.name }}</h3>
      </div>
      <div class="column"
      :class="{'has-text-success line-through' : task.checked}">
        <h3>{{ task.description }}</h3>
      </div>
      <div class="column"
      :class="{'has-text-success line-through' : task.checked}">
        <div class="tag is-primary">
          <h3>{{ task.category }}</h3>
        </div>
      </div>
      <div class="column">
      
      <input type="checkbox" v-model="task.checked">

        
          <router-link 
          :to="{ path: `/edit/${task.id}` }"
          
          class="button is-primary is-outlined ml-3"
          >Edit
          </router-link>

        
          <button @click="deleteTask(task.id)"
            class="button is-danger is-outlined ml-3"> Delete
          </button>
        
        
      </div> 
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import taskColRef from "../firebase";
import { getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      tasks: [],
      selectedDoc: null,
      search: "",
    };
  },
  methods: {
    async fetchTask() {
      let taskSS = await getDocs(taskColRef);
      let tasks = [];
      taskSS.forEach((task) => {
        let taskData = task.data();
        taskData.id = task.id;
        tasks.push(taskData);
      });
      this.tasks = tasks;
    },
    async deleteTask(taskId) {
      let taskRef = doc(taskColRef, taskId);
      await deleteDoc(taskRef);
      this.$router.go();
    },
    statusDone(taskId) {
      updateDoc(doc(taskColRef, taskId)),{
        checked: true
      }
    }
  },
  created() {
    this.fetchTask();
  },
  computed: {
    filteredItems(){
      return this.tasks.filter((item) => {
          return item.category.match(this.search)
      })
    }
  }
};
</script>


<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

.line-through {
  text-decoration: line-through;
}

.home{
  padding: 20px;
  margin: 0 auto;
}

</style>