<script setup>
import { ref, computed } from 'vue'
const props = defineProps(['done', 'total','progress'])

const progressBarValue = computed(() => {
    return `width:${props.progress}%`
})

console.log(progressBarValue.value);
</script>

<template>
  <div class="relative mt-40">
   
    <div class="absolute flex flex-col w-full gap-2 bottom-20">
      <p >No task to track</p>
      <p  class="font-semibold text-gray-800">{{ props.done }} of {{ props.total }} tasks complete</p>
      <div
      
        class="h-3 transition-all duration-500 bg-blue-600 rounded-xl d"
        
   
      ></div>
      <p class="text-blue-600 transition-all duration-1000"> <span class="text-green-600 capitalize">{{}}</span></p>
    </div>
  </div>
</template>
