<template>
  <div class="h-screen bg-[#FCFBFC] p-10">
    <div class="max-w-6xl mx-auto flex gap-4">
      <div class="w-2/5 pr-16">
        <img src="/fundall.png" />
        <div class="mt-10 text-[#30443C]">
          <div class="flex items-center gap-6">
            <div class="h-20 w-20 rounded-xl bg-[#C4C4C4]">
              <img :src="useUserStore().user?.avatar" class="mx-auto" />
            </div>
            <div>
              <p class="text-xl font-bold">
                {{
                  useUserStore().user?.firstname +
                  " " +
                  useUserStore().user?.lastname
                }}
              </p>
              <p class="font-medium">
                {{ useUserStore().user?.email }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <p class="text-lg font-medium">Target Monthly Expenses</p>
            <p class="font-bold text-xl">
              ₦ {{ useUserStore().user?.total_balance }}
            </p>
            <a-progress
              :percent="50"
              :show-info="false"
              size="small"
              class="mt-2"
            />
          </div>

          <div class="mt-10 bg-white p-3 rounded-lg">
            <p class="text-xs font-medium">Daily Expenses Summary</p>
          </div>
        </div>
      </div>
      <div class="w-3/5 px-10 pt-10 bg-[#F2F3F7]">
        <div
          class="p-5 bg-white rounded-lg border-gray-50 text-gray-1 relative"
        >
          <p class="font-bold text-xl">
            <span class="text-primary">Welcome Back, </span>
            {{ useUserStore().user?.firstname }}
          </p>
          <p class="font-medium text-xsm mt-1">
            Now, let’s get your expenses for this month
          </p>
          <div class="absolute bottom-2 right-4">
            <img src="/d1.png" class="h-28" />
          </div>
        </div>
        <div class="mt-5 px-10 py-3">
          <CoreExpenxeTrackerExpenseTrackerForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

const { $repositories } = useNuxtApp();

const percentageDiff = ref<number>();

const loading = ref<boolean>(false);

onMounted(() => {
  GetExpenses();
  // if (useUserStore().user) {
  //   const spent: number = parseInt(useUserStore().user?.spent ?? "0");
  //   const balance: number = parseInt(useUserStore().user?.total_balance ?? "0")
  //   percentageDiff.value = spent / balance
  //     (useUserStore().user?.spent / useUserStore().user?.total_balance) * 100;
  // }
});

const GetExpenses = async () => {
  loading.value = true;
  const response = await $repositories.AppRepo.GetExpenses();
  console.log(response);
  loading.value = false;
};
</script>

<style></style>
