<script setup lang="ts">
import { ref } from "vue";
import { t } from "../../../i18n/utils/translate";

type Status = "idle" | "loading" | "success" | "error";

const name = ref("");
const email = ref("");
const message = ref("");
const status = ref<Status>("idle");

const resetAfterDelay = () => {
  setTimeout(() => {
    status.value = "idle";
  }, 5000);
};

const send = async () => {
  if (status.value === "loading" || status.value === "success") return;
  status.value = "loading";

  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        template_params: {
          from_name: name.value,
          from_email: email.value,
          message: message.value,
        },
      }),
    });

    if (!res.ok) throw new Error();

    status.value = "success";
    name.value = "";
    email.value = "";
    message.value = "";
    resetAfterDelay();
  } catch {
    status.value = "error";
    resetAfterDelay();
  }
};
</script>

<template>
  <form class="contact-form" @submit.prevent="send" novalidate>
    <div class="contact-form-row">
      <div class="contact-form-field">
        <label class="contact-form-label" for="cf-name">{{ t("contact-form-name") }}</label>
        <input
          id="cf-name"
          v-model="name"
          class="contact-form-input"
          type="text"
          :placeholder="t('contact-form-name-placeholder')"
          required
          autocomplete="name"
        />
      </div>
      <div class="contact-form-field">
        <label class="contact-form-label" for="cf-email">{{ t("contact-form-email") }}</label>
        <input
          id="cf-email"
          v-model="email"
          class="contact-form-input"
          type="email"
          :placeholder="t('contact-form-email-placeholder')"
          required
          autocomplete="email"
        />
      </div>
    </div>
    <div class="contact-form-field">
      <label class="contact-form-label" for="cf-message">{{ t("contact-form-message") }}</label>
      <textarea
        id="cf-message"
        v-model="message"
        class="contact-form-input contact-form-textarea"
        :placeholder="t('contact-form-message-placeholder')"
        required
        rows="3"
      ></textarea>
    </div>
    <div class="contact-form-footer">
      <Transition name="cf-fade">
        <p v-if="status === 'success'" class="contact-form-feedback contact-form-feedback-success">
          {{ t("contact-form-success") }}
        </p>
        <p v-else-if="status === 'error'" class="contact-form-feedback contact-form-feedback-error">
          {{ t("contact-form-error") }}
        </p>
      </Transition>
      <button
        type="submit"
        class="contact-form-submit"
        :class="{ 'contact-form-submit-loading': status === 'loading' }"
        :disabled="status === 'loading' || status === 'success'"
        data-hoversound="hover"
      >
        <span>{{ status === "loading" ? t("contact-form-sending") : t("contact-form-send") }}</span>
      </button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  width: 100%;

  &-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xs);
  }

  &-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &-label {
    font-size: var(--font-size-xxs);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-text-300);
  }

  &-input {
    width: 100%;
    background: transparent;
    border: var(--stroke-sm) solid var(--color-beige-700);
    border-radius: var(--radius-sm);
    padding: 6px var(--space-sm);
    font-size: var(--font-size-sm);
    font-family: inherit;
    color: var(--color-text-400);
    outline: none;
    transition: border-color 0.15s ease;
    resize: none;
    appearance: none;
    -webkit-appearance: none;

    &::placeholder {
      color: var(--color-text-300);
      opacity: 0.6;
    }

    &:focus {
      border-color: var(--color-text-400);
    }
  }

  &-textarea {
    min-height: 72px;
    line-height: var(--line-height-copy);
  }

  &-footer {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    flex-wrap: wrap;
  }

  &-submit {
    border: none;
    border-radius: 100px;
    height: 36px;
    padding: 0 20px;
    background-color: var(--color-orange-400);
    color: var(--color-white-400);
    font-size: var(--font-size-sm);
    font-family: inherit;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    cursor: pointer;
    transition:
      background-color 0.1s ease,
      opacity 0.1s ease;
    white-space: nowrap;

    @include mixins.hover {
      &:hover:not(:disabled) {
        background-color: var(--color-black-400);
        color: var(--color-beige-400);
      }
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    &-loading span {
      opacity: 0.7;
    }
  }

  &-feedback {
    font-size: var(--font-size-sm);
    font-weight: 600;
    letter-spacing: 0.02em;

    &-success {
      color: #2d8a4e;
    }

    &-error {
      color: #c0392b;
    }
  }
}

.cf-fade-enter-active,
.cf-fade-leave-active {
  transition: opacity 0.3s ease;
}

.cf-fade-enter-from,
.cf-fade-leave-to {
  opacity: 0;
}
</style>
