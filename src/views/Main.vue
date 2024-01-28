<script setup>
import { useTaskStore } from '../store/HomeTodoList';

const taskStore = useTaskStore()

</script>

<template>
  <div class="w-full lg:w-4/6">
    <div
      class="flex items-center justify-center py-6 text-gray-200 bg-blue-600 shadow-md sm:py-3 sm:justify-start sm:px-3 sm:gap-6"
    >
      <div class="flex items-center">
        <h1
          class="w-full p-3 text-3xl font-bold text-center sm:py-3 sm:text-3xl"
        >
          TODO APP
        </h1>
        <i class="text-3xl font-bold fa-regular fa-rectangle-list"></i>
      </div>
      <p class="hidden text-sm text-gray-300 sm:block sm:text-xl">
        Empower Your Productivity Your Tasks, Your Way!
      </p>
      <div class="ml-auto">
        <button class="pr-3 text-xl"  @click="taskStore.showAboutHandler">
          <i class="fa-solid fa-circle-info"></i>
        </button>
      </div>
    </div>
    <section class="flex flex-col w-full shadow lg:flex-row bg-slate-100">
      <div class="w-full lg:w-[30%] border">
        <aside class="lg:pt-9">
          <nav>
            <ul class="flex text-xl lg:text-2xl lg:flex lg:flex-col">
              <li class="w-full text-center border-b">
                <router-link
                  active-class="active"
                  class="block px-6 py-3 lg:p-6"
                  to="/home"
                  >Home</router-link
                >
              </li>
              <li class="w-full text-center border-b">
                <router-link
                  active-class="active"
                  class="block px-6 py-3 lg:p-6"
                  to="/work"
                  >Work</router-link
                >
              </li>
              <li class="w-full text-center border-b disabled">
                <router-link
                  active-class="active"
                  class="block px-6 py-3 lg:p-6 disabled"
                  to="/school"
                  >School</router-link
                >
              </li>
            </ul>
          </nav>
        </aside>
      </div>
      <div class="w-full px-3 lg:p-6">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<style scoped>
.active {
  display: inline-block;
  width: 100%;
  font-weight: 600;
  color: #3468c0;
  border-bottom: 3px solid rgba(0, 0, 255, 0.57);
  background-color: rgba(214, 214, 214, 0.351);
}

@media screen and (min-width: 1024px) {
  .active {
    border-bottom: 3px solid rgba(0, 0, 255, 0);
    border-left: 3px solid rgba(0, 0, 255, 0.57);
  }
}
</style>
