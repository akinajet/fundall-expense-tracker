<template>
  <a-form
    ref="newUserFormRef"
    layout="vertical"
    :hideRequiredMark="true"
    :model="newUserFormState"
    :rules="rules"
    @finish="handleFinish"
    @validate="handleValidate"
    @finishFailed="handleFinishFailed"
  >
    <div class="flex gap-4">
      <div>
        <a-form-item label="First Name" name="firstname">
          <a-input
            v-model:value="newUserFormState.firstname"
            placeholder="Enter First Name"
            class="w-full"
            size="large"
          />
        </a-form-item>
      </div>
      <div>
        <a-form-item label="Last Name" name="lastname">
          <a-input
            v-model:value="newUserFormState.lastname"
            placeholder="Enter Last Name"
            class="w-full"
            size="large"
          />
        </a-form-item>
      </div>
    </div>
    <a-form-item label="Email" name="email">
      <a-input
        v-model:value="newUserFormState.email"
        placeholder="Enter Email"
        class="w-full"
        size="large"
      />
    </a-form-item>
    <a-form-item label="Password" name="password">
      <a-input-password
        v-model:value="newUserFormState.password"
        placeholder="Enter Password"
        class="w-full"
        size="large"
      />
    </a-form-item>
    <a-form-item label="Confirm Password" name="password_confirmation">
      <a-input-password
        v-model:value="newUserFormState.password_confirmation"
        placeholder="Confirm Password"
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
        Sign Up
      </Button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import type { Rule } from "ant-design-vue/es/form";
import type { FormInstance } from "ant-design-vue";
import type { NewUserForm } from "~/types/forms/NewUserForm";

import { ref } from "vue";

const { $repositories } = useNuxtApp();
const emit = defineEmits(["post-login-request"]);

const loading = ref<boolean>(false);

//#region Form handlers, events, validations, state and references
const newUserFormRef = ref<FormInstance>();
const newUserFormState = reactive<NewUserForm>({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const rules: Record<string, Rule[]> = {
  firstname: [{ required: true, trigger: "change" }],
  lastname: [{ required: true, trigger: "change" }],
  email: [{ required: true, trigger: "change" }],
  password: [{ required: true, trigger: "change" }],
};

// form actions
const handleFinish = (values: NewUserForm) => {
  handleSignUpRequest(newUserFormState);
};
const handleFinishFailed = (errors: any) => {
  message.error("kindly fill all inputs correctly", 10);
};
const resetForm = () => {
  newUserFormRef.value?.resetFields();
};
const handleValidate = (...args: any) => {
  console.log(args);
};

//#endregion

const handleSignUpRequest = async (data: NewUserForm) => {
  loading.value = true;
  const response = await $repositories.AppRepo.CreateUser(data);
  if (response) {
    navigateTo("/login");
  }
  loading.value = false;
};
</script>
