
<template>
  <teleport to="body">
    <div></div>
    <section class="transition-all duration-300 main">
      <header class="header">
        <slot name="title"></slot>
      </header>
      <section class="px-3 py-6">
        <slot name="details"> </slot>
      </section>
      <footer class="bg-gray-600">
        <slot name="developer"></slot>
      </footer>

    </section>
  </teleport>
</template>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  z-index: 10;
}
.main {
  position: fixed;
  top: 30vh;
  left: 50%;
  width: 30%;
  z-index: 100;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: rgb(239 246 255);
  transform: translateX(-50%);
}

.header {
  padding: 24px 0;
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: rgb(37 99 235);
}

@media (min-width: 360px) and (max-width: 480px) {
  .main {
    position: fixed;
    top: 30vh;
    left: 50%;
    width: 90%;
    z-index: 100;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0;
    margin: 0;
    overflow: hidden;
    background-color: rgb(239 246 255);
  }
}
</style>
