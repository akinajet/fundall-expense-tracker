<template>
  <div class="h-screen bg-[#FCFBFC] p-10">
    <div class="max-w-6xl mx-auto flex gap-4">
      <div class="w-2/5">
        <img src="/fundall.png" />
        <div class="m-28 flex items-center justify-center text-3xl font-bold">
          <div>
            <img src="/l1.png" />
            <p class="text-primary mt-5">Welcome back!</p>
            <p class="mt-1">We miss you.</p>
          </div>
        </div>
      </div>
      <div class="w-3/5 px-10">
        <div
          class="p-20 bg-white rounded-lg border-4 border-gray-50 text-gray-1"
        >
          <p class="font-semibold text-2xl">Holla</p>
          <p class="font-medium">Sign in to the vibe!</p>
          <div class="mt-16">
            <CoreLoginForm />
            <p class="text-xsm font-medium text-center">
              Don’t have an account?
              <span
                class="text-primary cursor-pointer"
                @click="$router.push('/register')"
                >Register Here</span
              >
            </p>
            <p class="mt-5 text-xs font-medium text-center text-[#97A19D]">
              By clicking on Login, you agree to our
              <span class="text-primary"
                >Terms & Conditions and Privacy Policy</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
