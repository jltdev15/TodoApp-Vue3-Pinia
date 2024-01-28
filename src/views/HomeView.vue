<script setup>
import TaskForm from "../components/Home/TaskForm.vue";
import TaskItem from "../components/Home/TaskItem.vue";
import TaskUpdate from "../components/Home/TaskUpdate.vue";
import About from "../components/About.vue";
import { useTaskStore } from "../store/HomeTodoList";
import { storeToRefs } from "pinia";
import { ref, watch, computed, onMounted } from "vue";
const taskStore = useTaskStore();

const { totalTask, finishedTask, taskList } = storeToRefs(taskStore);

const progressValue = computed(() => {
  return (100 / totalTask.value) * finishedTask.value;
});

console.log(taskStore.isUpdateShow);

onMounted(async () => {
  const listData = JSON.parse(localStorage.getItem("HomeTaskList"));
  if (listData === null) {
    return taskStore.saveLocalStorage([]);
  }
  taskList.value = listData;
});
</script>

<template>
  <div class="pt-1 sm:pt-3">
    <about v-if="taskStore.isAboutShow">
      <template #title>
        <div class="relative flex items-center justify-center">
          <p class="text-3xl font-bold">About</p>
          <button
            class="absolute text-2xl right-5"
            @click="taskStore.isAboutShow = false"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </template>
      <template #details>
        <div class="w-4/6 mx-auto text-left">
          <h2 class="py-0 text-xl font-bold capitalize">
            This is a basic TODO APP
          </h2>
          <p>Powered by</p>
          <div class="flex items-center justify-start gap-3">
            <i class="fa-brands fa-vuejs"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <span>Tailwind CSS</span>
          </div>
          <p>Pinia - state mngt</p>
        </div>
      </template>
      <template #developer>
        <div class="w-4/6 py-3 mx-auto text-center">
          <ul class="flex justify-center gap-6 py-1 text-2xl">
            <a
              href="https://www.facebook.com/technologyguruph/"
              class="transition-all hover:text-blue-800"
              ><i class="fa-brands fa-facebook"></i
            ></a>
            <a href="https://github.com/jltdev15" class="hover:text-violet-600"
              ><i class="fa-brands fa-github"></i
            ></a>
          </ul>
          <p>@jltdev</p>
        </div>
      </template>
    </about>
    <task-update v-if="taskStore.isUpdateShow">
      <template #update>
        <input
          v-model.trim="taskStore.taskValue"
          class="w-full px-3 py-3 text-2xl transition-all duration-500 bg-transparent border-0 border-b-2 focus:border-blue-800 focus:text-gray-900 focus:font-semibold outline-0 focus:border-b-2 focus:bg-gray-100"
          type="text"
          placeholder="Task to update"
          @blur="taskStore.updateEmpty = false"
        />
        <p v-if="taskStore.updateEmpty" class="text-red-600">
          Cant update empty fields.
        </p>
      </template>
      <template #actions>
        <div class="flex gap-3">
          <button
            class="w-full py-3 font-semibold text-gray-900 bg-blue-100"
            @click="taskStore.isUpdateShow = false"
          >
            Close
          </button>
          <button
            class="w-full py-3 font-semibold bg-blue-600 text-gray-50"
            @click="taskStore.updateTaskHandler"
          >
            Save changes
          </button>
        </div>
      </template>
    </task-update>
    <task-form></task-form>
    <ul class="flex py-6 mt-3 flex-col h-[12rem] overflow-auto bg-gray-50">
      <TaskItem
        v-for="task in taskStore.taskList"
        :key="task.id"
        :task="task"
      />
      <div class="px-3" v-if="taskStore.taskList.length === 0">
        <p class="text-base">Add Task to start using the App</p>
      </div>
    </ul>
    <div class="mt-12">
      <div class="flex flex-col w-full gap-2 bottom-20">
        <h2 class="text-3xl font-bold text-gray-700">Progress</h2>
        <p v-if="taskStore.taskList.length === 0">No task to track</p>
        <p v-else class="font-semibold text-gray-800">
          {{ taskStore.finishedTask }} of {{ taskStore.totalTask }} tasks
          complete
        </p>
        <div
          :style="
            isNaN(progressValue) ? 'width:0%' : 'width:' + progressValue + '%'
          "
          class="h-3 transition-all duration-500 bg-blue-600 rounded-xl d"
        ></div>
        <div>
          <p
            v-if="progressValue !== 100"
            class="inline text-blue-600 transition-all duration-1000"
          >
            {{ isNaN(progressValue) ? "" : Math.round(progressValue) + "%" }}
          </p>
          <span class="inline text-green-600 capitalize">{{
            progressValue === 100 ? "Complete" : ""
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
