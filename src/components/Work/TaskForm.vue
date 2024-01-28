<template>
  <div class="pb-6">
    <div class="flex">
      <input
        class="w-full px-3 text-2xl transition-all duration-500 bg-transparent border-0 border-b-2 focus:border-blue-800 focus:text-gray-900 focus:font-semibold outline-0 focus:border-b-2 focus:bg-gray-100"
        type="text"
        placeholder="TODO HERE"
        v-model="newTask"
        @blur="isEmpty = false"
      />

      <button class="py-3 pl-3 " @click="submitTask">
        <i class="text-5xl text-blue-800 active:text-blue-700 fa-solid fa-circle-plus"></i>
      </button>
    </div>
    <div v-if="isEmpty" class="absolute">
      <p class="px-1 py-1 text-xl text-red-600">This field is required.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../../store/WorkTodoList.js";

const taskStore = useTaskStore();

const newTask = ref("");
const isEmpty = ref(false);
const generateId = () => {
  return Math.floor(Math.random() * 1000000);
};

const submitTask = () => {
  if (newTask.value.length === 0) {
    return (isEmpty.value = true);
  }
  if (newTask.value.length > 0) {
    taskStore.addNewTaskHandler({
      id: generateId(),
      description: newTask.value,
      isDone: false,
    });
    newTask.value = "";
  }
};
</script>
