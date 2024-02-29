<template>
  <div class="h-screen bg-[#FCFBFC] p-10">
    <div class="max-w-6xl mx-auto flex gap-4">
      <div class="w-2/5">
        <img src="/fundall.png" />
        <div class="my-20 mx-10 flex items-center justify-center">
          <div class="flex flex-col items-center">
            <img src="/r1.png" />
            <p class="text-3xl font-bold mt-14">
              <span class="text-primary">Welcome! </span>Let’s get to know you.
            </p>
            <p class="mt-4 font-medium">
              Your first step toward a better financial lifestyle starts here.
            </p>
          </div>
        </div>
      </div>
      <div class="w-3/5 px-10">
        <div
          class="p-20 bg-white rounded-lg border-4 border-gray-50 text-gray-1"
        >
          <div class="">
            <CoreRegisterForm />
            <p class="text-xsm font-medium text-center">
              Already have an account
              <span
                class="text-primary cursor-pointer"
                @click="$router.push('/login')"
                >Login Here</span
              >
            </p>
          </div>
        </div>

        <p class="mt-5 text-xsm font-medium text-center text-[#97A19D]">
          By clicking on Login, you agree to our
          <span class="text-primary"
            >Terms &<br />
            Conditions and Privacy Policy</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
