<template>
  <a-form
    ref="loginFormRef"
    layout="vertical"
    :model="loginFormState"
    :hideRequiredMark="true"
    :rules="rules"
    @finish="handleFinish"
    @validate="handleValidate"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item label="Email or Username" name="email">
      <a-input
        v-model:value="loginFormState.email"
        placeholder="Enter Email"
        class="w-full"
        size="large"
      />
    </a-form-item>
    <a-form-item label="Password" name="password">
      <a-input-password
        v-model:value="loginFormState.password"
        placeholder="Enter Password"
        class="w-full"
        size="large"
      />
    </a-form-item>
    <a-form-item>
      <Button
        :is-block="true"
        :isLoading="loading"
        html-type="submit"
        class="mt-5"
      >
        Log In
      </Button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import type { Rule } from "ant-design-vue/es/form";
import type { FormInstance } from "ant-design-vue";
import type { LoginForm } from "~/types/forms/LoginForm";
import type { AuthenticatedUser } from "~/types/AuthenticateUser";

import { ref } from "vue";

const { $repositories } = useNuxtApp();
const emit = defineEmits(["post-login-request"]);

const loading = ref<boolean>(false);

//#region Form handlers, events, validations, state and references
const loginFormRef = ref<FormInstance>();
const loginFormState = reactive<LoginForm>({
  email: "",
  password: "",
});

const rules: Record<string, Rule[]> = {
  email: [{ required: true, trigger: "change" }],
  password: [{ required: true, trigger: "change" }],
};

// form actions
const handleFinish = (values: LoginForm) => {
  handleLoginRequest(loginFormState);
};
const handleFinishFailed = (errors: any) => {
  message.error("kindly fill all inputs correctly", 10);
};
const resetForm = () => {
  loginFormRef.value?.resetFields();
};
const handleValidate = (...args: any) => {
  console.log(args);
};

//#endregion

const handleLoginRequest = async (data: LoginForm) => {
  loading.value = true;
  const response: AuthenticatedUser =
    await $repositories.AppRepo.AuthenticateUser(data);
  console.log(response);
  const token = useCookie("fundall.expense.tracker.auth.token");
  token.value = response.access_token;

  window.location.href = "/expense-tracker";
  loading.value = false;
};
</script>
