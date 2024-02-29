<template>
  <div>
    <a-config-provider
      :theme="{
        token: {
          colorPrimary: '#4DE897',
          fontFamily: 'Montserrat',
        },
        algorithm: theme.defaultAlgorithm,
      }"
    >
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </a-config-provider>
  </div>
</template>
<script setup lang="ts">
import { theme } from "ant-design-vue";
</script>
