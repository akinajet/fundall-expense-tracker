<template>
  <a-form
    ref="expenseTrackerFormRef"
    layout="vertical"
    :model="expenseTrackerFormState"
    :rules="rules"
    @finish="handleFinish"
    @validate="handleValidate"
    @finishFailed="handleFinishFailed"
  >
    <div class="w-full md:w-4/5">
      <a-form-item label="Target Monthly Expenses" name="monthlyTarget">
        <a-input-number
          v-model:value="expenseTrackerFormState.monthlyTarget"
          :formatter="
            (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          "
          :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
          :controls="false"
          class="w-full"
          size="large"
          autocomplete="off"
        >
        </a-input-number>
      </a-form-item>
      <a-form-item label="Date" name="date">
        <a-date-picker
          v-model:value="expenseTrackerFormState.date"
          value-format="YYYY-MM-DD"
          size="large"
          class="w-full"
        />
      </a-form-item>
    </div>
    <div class="mt-10">
      <p class="mb-3 text-xsm font-semibold">Today's Expenses</p>
      <div class="flex gap-4">
        <div class="w-3/5">
          <a-form-item label="" name="expense1">
            <a-input
              v-model:value="expenseTrackerFormState.expense1"
              placeholder="Expense"
              class="w-full"
              size="large"
            />
          </a-form-item>
        </div>
        <div class="w-2/5">
          <a-form-item label="" name="amount1">
            <a-input-number
              v-model:value="expenseTrackerFormState.amount1"
              :formatter="
                (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              "
              :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
              :controls="false"
              class="w-full"
              size="large"
              autocomplete="off"
              @change="handleAmountChange"
            >
            </a-input-number>
          </a-form-item>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="w-3/5">
          <a-form-item label="" name="expense2">
            <a-input
              v-model:value="expenseTrackerFormState.expense2"
              placeholder="Expense"
              class="w-full"
              size="large"
            />
          </a-form-item>
        </div>
        <div class="w-2/5">
          <a-form-item label="" name="amount2">
            <a-input-number
              v-model:value="expenseTrackerFormState.amount2"
              :formatter="
                (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              "
              :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
              :controls="false"
              class="w-full"
              size="large"
              autocomplete="off"
              @change="handleAmountChange"
            >
            </a-input-number>
          </a-form-item>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="w-3/5">
          <a-form-item label="" name="expense3">
            <a-input
              v-model:value="expenseTrackerFormState.expense3"
              placeholder="Expense"
              class="w-full"
              size="large"
            />
          </a-form-item>
        </div>
        <div class="w-2/5">
          <a-form-item label="" name="amount3">
            <a-input-number
              v-model:value="expenseTrackerFormState.amount3"
              :formatter="
                (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              "
              :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
              :controls="false"
              class="w-full"
              size="large"
              autocomplete="off"
              @change="handleAmountChange"
            >
            </a-input-number>
          </a-form-item>
        </div>
      </div>
    </div>
    <div class="">
      <div class="w-full flex items-center justify-end gap-2">
        <p class="text-xsm font-semibold">Total Actual Expenses: ₦</p>
        <a-input-number
          v-model:value="totalDailyExpense"
          :formatter="
            (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          "
          :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
          :controls="false"
          class="w-1/3"
          size="large"
          disabled
        >
        </a-input-number>
      </div>
    </div>
    <a-form-item>
      <div class="w-full flex justify-center">
        <Button
          :is-block="false"
          :isLoading="loading"
          html-type="submit"
          class="mt-5 mx-auto"
        >
          SAVE TODAY’S EXPENSES
        </Button>
      </div>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import type { Rule } from "ant-design-vue/es/form";
import type { FormInstance } from "ant-design-vue";
import type { ExpenseTrackerForm } from "~/types/forms/ExpenseTrackerForm";

import { ref } from "vue";

const { $repositories } = useNuxtApp();
const emit = defineEmits(["post-login-request"]);

const loading = ref<boolean>(false);
const totalDailyExpense = ref<number>(0);

//#region Form handlers, events, validations, state and references
const expenseTrackerFormRef = ref<FormInstance>();
const expenseTrackerFormState = reactive<ExpenseTrackerForm>({
  monthlyTarget: 0,
  date: "",
  amount1: 0,
  amount2: 0,
  amount3: 0,
  expense1: "",
  expense2: "",
  expense3: "",
});

//form rules
const checkAmount1 = async (_rule: Rule, value: number) => {
  if (
    value < 0 ||
    (expenseTrackerFormState.expense1.length > 0 && value <= 0)
  ) {
    return Promise.reject("Kindly enter a valid amount");
  } else if (expenseTrackerFormState.expense1.length === 0) {
    expenseTrackerFormRef.value?.validateFields("expense1");
  } else {
    return Promise.resolve();
  }
};
const checkAmount2 = async (_rule: Rule, value: number) => {
  if (
    value < 0 ||
    (expenseTrackerFormState.expense2.length > 0 && value <= 0)
  ) {
    return Promise.reject("Kindly enter a valid amount");
  } else if (expenseTrackerFormState.expense3.length === 0) {
    expenseTrackerFormRef.value?.validateFields("expense2");
  } else {
    return Promise.resolve();
  }
};
const checkAmount3 = async (_rule: Rule, value: number) => {
  if (
    value < 0 ||
    (expenseTrackerFormState.expense3.length > 0 && value <= 0)
  ) {
    return Promise.reject("Kindly enter a valid amount");
  } else if (expenseTrackerFormState.expense3.length === 0) {
    expenseTrackerFormRef.value?.validateFields("expense3");
  } else {
    return Promise.resolve();
  }
};
const checkExpense1 = async (_rule: Rule, value: string) => {
  if (value.length <= 0 && expenseTrackerFormState.amount1 > 0) {
    return Promise.reject("Kindly input an expense");
  } else if (expenseTrackerFormState.amount1 <= 0) {
    expenseTrackerFormRef.value?.validateFields("amount1");
  } else {
    return Promise.resolve();
  }
};
const checkExpense2 = async (_rule: Rule, value: string) => {
  if (value.length <= 0 && expenseTrackerFormState.amount2 > 0) {
    return Promise.reject("Kindly input an expense");
  } else if (expenseTrackerFormState.amount2 <= 0) {
    expenseTrackerFormRef.value?.validateFields("amount2");
  } else {
    return Promise.resolve();
  }
};
const checkExpense3 = async (_rule: Rule, value: string) => {
  if (value.length <= 0 && expenseTrackerFormState.amount3 > 0) {
    return Promise.reject("Kindly input an expense");
  } else if (expenseTrackerFormState.amount3 <= 0) {
    expenseTrackerFormRef.value?.validateFields("amount3");
  } else {
    return Promise.resolve();
  }
};

const rules: Record<string, Rule[]> = {
  date: [{ required: true, trigger: "change" }],
  amount1: [
    {
      validator: checkAmount1,
      trigger: ["blur", "change"],
    },
  ],
  amount2: [
    {
      validator: checkAmount2,
      trigger: ["blur", "change"],
    },
  ],
  amount3: [
    {
      validator: checkAmount3,
      trigger: ["blur", "change"],
    },
  ],
  expense1: [
    {
      validator: checkExpense1,
      trigger: ["blur", "change"],
    },
  ],
  expense2: [
    {
      validator: checkExpense2,
      trigger: ["blur", "change"],
    },
  ],
  expense3: [
    {
      validator: checkExpense3,
      trigger: ["blur", "change"],
    },
  ],
};

// form actions
const handleFinish = (values: ExpenseTrackerForm) => {
  handleAddExpenseRequest(expenseTrackerFormState);
};
const handleFinishFailed = (errors: any) => {
  message.error("kindly fill all inputs correctly", 10);
};
const resetForm = () => {
  expenseTrackerFormRef.value?.resetFields();
};
const handleValidate = (...args: any) => {
  console.log(args);
};

//#endregion

const handleAddExpenseRequest = async (data: ExpenseTrackerForm) => {
  loading.value = true;
  const response: boolean = await $repositories.AppRepo.AddExpense(data);
  console.log(response);
  loading.value = false;
};

const handleAmountChange = () => {
  totalDailyExpense.value =
    expenseTrackerFormState.amount1 +
    expenseTrackerFormState.amount2 +
    expenseTrackerFormState.amount3;
};
</script>
