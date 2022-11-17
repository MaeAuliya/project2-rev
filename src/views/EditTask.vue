<template>
  <div>
    <h1 class="title is-3">Edit ToDo</h1>
      
     <form 
     class="box"
     @submit.prevent="updateTask">
        <div class="columns">
            <div class="column is-one-fifth">
                  <input v-model="taskInfo.name" 
                  type="text"
                  class="input is-primary is-normal"
                  placeholder="name" />
            </div>
            <div class="column">
              <input 
              type="text"
              class="input is-info is-normal"
              v-model="taskInfo.description" 
              placeholder="description" />
            </div>
        </div>
        
        <div class="field is-center is-2">
                  
           <input v-model="taskInfo.category" 
            type="text"
            class="mb-3"
            placeholder="category" />
        </div> 
        
        <button class="button is-success mb-5" type="submit">Edit Task</button>  
      </form>         
  </div>
</template>

  <script>
  /* eslint-disable */
  import taskColRef from "../firebase";
  import { getDoc, doc, setDoc } from "firebase/firestore";
  export default {
    data() {
      return {
        selectedTask: {},
        taskId: null,
        docRef: null,
        taskInfo: {
          name:null,
        description:null,
        category: null,
        checked: false,
        }
      };
    },
    methods: {
      async getTask() {
        let taskRef = doc(taskColRef, this.taskId);
        this.docRef = taskRef;
        let task = await getDoc(this.docRef);
        let taskData = task.data();
        this.taskInfo.name = taskData.name;
        this.taskInfo.description = taskData.description;
        this.taskInfo.category = taskData.category;
        this.taskInfo.checked = taskData.checked;
      },
      async updateTask(){
          await setDoc(this.docRef, this.taskInfo);
          this.$router.push("/");
      }
    },
    created() {
      let taskId = this.$route.params.taskId;
      this.taskId = taskId;
      this.getTask();
    },
  };
  </script>
  
  <style>
  </style>