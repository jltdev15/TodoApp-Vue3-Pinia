<script setup>
import { useTaskStore } from "../../store/SchoolTodoList";
const { task } = defineProps(["task"]);

const taskStore = useTaskStore();
</script>
<template>
  <li class="flex items-center justify-between px-3 border-2">
    <label class="flex gap-6 cursor-pointer label">
      <input
        :checked="task.isDone"
        type="checkbox"
        class="w-5 h-5 lg:w-6 lg:h-6 checkbox checkbox-primary"
        @click="taskStore.toggleTask(task.id, task.isDone = !task.isDone)"
      />
      <p
        :class="{ 'done-task': task.isDone }"
        class="w-full text-base text-gray-600 capitalize lg:text-2xl"
      >
        {{ task.description }}
      </p>
    </label>
    <div class="flex">
      <button class="px-2" v-if="task.isDone" @click="taskStore.deleteTaskHandler(task.id)">
        <i class="text-base text-red-600 lg:text-2xl fa-solid fa-trash"></i>
      </button>
      <button v-else class="px-2" @click="taskStore.showUpdateModal(task.id)">
        <i class="text-base text-blue-600 lg:text-2xl fa-solid fa-edit"></i>
      </button>
    </div>
  </li>
</template>

<style scoped>
.done-task {
  text-decoration: line-through;
  opacity: 0.3;
}
</style>
