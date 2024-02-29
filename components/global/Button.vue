<template>
  <a-button
    type="primary"
    :loading="isLoading"
    size="large"
    :block="isBlock"
    class="bg-primary"
    ><div class="font-semibold text-xsm text-black uppercase"><slot /></div
  ></a-button>
</template>

<script lang="ts" setup>
const props = defineProps({
  isLoading: {
    type: Boolean,
    required: false,
  },
  isBlock: {
    type: Boolean,
    required: false,
  },
});
</script>

<style></style>
