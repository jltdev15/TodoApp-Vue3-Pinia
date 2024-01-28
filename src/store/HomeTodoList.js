import { computed, ref, watch } from "vue";
import { defineStore } from "pinia";
export const useTaskStore = defineStore("todosHome", () => {
  // States
  const taskList = ref([]);
  const countTask = ref("");
  const isUpdateShow = ref(false);
  const taskValue = ref("");
  const updateTaskId = ref("");
  const updateEmpty = ref(false);
  const isAboutShow = ref(false)
  // Watcher
  watch(taskList, (newValue) => {
    console.log(newValue);
    // taskList.value = newValue;
    saveLocalStorage(newValue);
  });

  // Getters
  const progressValue = computed(() => {
    return (100 / totalTask) * finishedTask;
  });

  const totalTask = computed(() => {
    return taskList.value.length;
  });
  const finishedTask = computed(() => {
    const finishTaskCount = taskList.value.filter(
      (item) => item.isDone === true
    );
    return finishTaskCount.length;
  });

  // Actions
  // Showing the about modal
  const showAboutHandler = () => {
    isAboutShow.value = !isAboutShow.value;
  }
  // Showing the modal
  const showUpdateModal = (id) => {
    isUpdateShow.value = true;
    console.log(id);
    updateTaskId.value = id;

    const taskFound = taskList.value.filter((task) => task.id === id);
    console.log(taskFound[0].description);
    taskValue.value = taskFound[0].description;
  };

  // Updating the task
  const updateTaskHandler = () => {
    if (taskValue.value === '') {
      return (updateEmpty.value = true);
    }
    const updatedTask = taskList.value.map((obj) =>
      obj.id === updateTaskId.value
        ? { ...obj, description: taskValue.value }
        : obj
    );
    taskList.value = updatedTask;
    isUpdateShow.value = false;

    console.log(updatedTask);
  };
  const addNewTaskHandler = async (task) => {
    taskList.value.push(task);
    saveLocalStorage(taskList.value);
    console.log(taskList.value);
  };
  const saveLocalStorage = async (data) => {
    localStorage.setItem("HomeTaskList", JSON.stringify(data));
  };
  const toggleTask = async (id, done) => {
    const newTaskArr = taskList.value.map((obj) =>
      obj.id === id ? { ...obj, isDone: done } : obj
    );
    taskList.value = newTaskArr;
  };
  const deleteTaskHandler = async (id) => {
    console.log(id);
    const newTaskArr = taskList.value.filter((task) => task.id !== id);
    taskList.value = newTaskArr;
  };

  const getDataLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("HomeTaskList"));
    console.log(data);
    // console.log(data);
    taskList.value = data;
  };
  return {
    updateEmpty,
    updateTaskHandler,
    taskList,
    updateTaskId,
    getDataLocalStorage,
    deleteTaskHandler,
    totalTask,
    finishedTask,
    addNewTaskHandler,
    toggleTask,
    saveLocalStorage,
    showUpdateModal,
    isUpdateShow,
    taskValue,
    isAboutShow,
    showAboutHandler
  };
});
