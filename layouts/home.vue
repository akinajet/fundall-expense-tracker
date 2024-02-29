<template>
  <div class="max-w-7xl mx-auto px-5 h-screen">
    <div class="py-5 flex justify-between">
      <img src="/fundall.png" />
      <div class="flex gap-6 items-center">
        <p class="cursor-pointer font-semibold" @click="$router.push('/login')">
          LOG IN
        </p>
        <Button @click="$router.push('/register')">sign up</Button>
      </div>
    </div>
    <div class="">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
