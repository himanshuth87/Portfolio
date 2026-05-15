<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { transitions } from "../../../animations";
import { t } from "../../../i18n/utils/translate";
import Social from "../../../components/Social.vue";
import ContactForm from "./ContactForm.vue";

const contactElement = ref<HTMLElement | null>(null);

onMounted(() => {
  if (contactElement.value) {
    transitions.contact.setup(contactElement.value);
  }
});

onUnmounted(() => {
  transitions.contact.destroy();
});
</script>

<template>
  <div class="contact grid" ref="contactElement">
    <div class="contact-content">
      <h2 class="contact-title" v-html="t('lets-work-together')"></h2>
      <Social variant="background" />
    </div>
    <div class="contact-form-wrapper">
      <ContactForm />
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  width: 100%;
  max-width: calc(var(--svw) * 100);
  overflow: hidden;
  min-height: calc(var(--lvh) * 100);
  padding: var(--space-outer);
  padding-top: var(--space-lg);
  align-content: center;

  @include mixins.mq("md") {
    padding-top: 0;
    align-content: center;
  }

  &-content {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);

    @include mixins.mq("sm") {
      grid-column: 1 / 8;
    }

    @include mixins.mq("md") {
      gap: var(--space-xl);
      grid-column: 1 / 6;
      padding-top: 0;
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 6;
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-xl);
    }
  }

  &-form-wrapper {
    grid-column: 1 / 13;

    // Glass card — lifts the form off the 3D canvas behind it
    background: rgba(245, 239, 230, 0.9);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(245, 239, 230, 0.6);
    border-radius: var(--radius-lg);
    padding: var(--space-md);

    @include mixins.mq("sm") {
      grid-column: 1 / 9;
    }

    @include mixins.mq("md") {
      grid-column: 1 / 7;
      padding: var(--space-md);
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 7;
    }
  }
}

// Dark mode overrides for the glass card
:global(html.dark) .contact-form-wrapper {
  background: rgba(10, 10, 10, 0.88);
  border-color: rgba(255, 255, 255, 0.07);
}
</style>
