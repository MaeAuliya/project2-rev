<template>
  <div>
    <h1 class="title is-3"> Add ToDo</h1>
      
     <form 
     class="box"
     @submit.prevent="createTask">
        <div class="columns">
            <div class="column is-one-fifth">
                  <input v-model="name" 
                  type="text"
                  class="input is-primary is-normal"
                  placeholder="name" />
            </div>
            <div class="column">
              <input 
              type="text"
              class="input is-info is-normal"
              v-model="description" 
              placeholder="description" />
            </div>
        </div>
        
        <div class="field is-center is-2">
                  
           <input v-model="category" 
            type="text"
            class="mb-3"
            placeholder="category" />
        </div> 
        
        <button class="button is-success mb-5" type="submit">Add Task</button>  
      </form>         
  </div>
</template>

<script>
/* eslint-disable */
import taskColRef from "../firebase";
import { addDoc } from "firebase/firestore";
export default {
  data() {
    return {
      name: null,
      description: null,
      category: null,
      checked: false,
    };
  },
  methods: {
    async createTask() {
      console.log("Creating Document");
      const addedDoc = await addDoc(taskColRef, this.$data);
      console.log(addedDoc);
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>
