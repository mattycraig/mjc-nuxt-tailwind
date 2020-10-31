<template>
  <div v-if="loading" class="loading">
    <div class="loader"></div>
    <div class="h1">Loading...</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(#fff, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loader {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid transparent;
  border-top-color: red;
  animation: spin 1.7s linear infinite;

  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 1px solid transparent;
    border-top-color: blue;
    animation: spin-reverse 0.6s linear infinite;
  }

  &:after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 10px;
    border-radius: 50%;
    border: 1px solid transparent;
    border-top-color: red;
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
