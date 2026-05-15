<script setup lang="ts">
import { t } from "../../../i18n/utils/translate";
</script>

<template>
  <section class="about-sections">
    <div class="about-section">
      <h2 class="about-section-title">{{ t('about') }}</h2>
      <p class="about-section-content" v-html="t('about-intro')"></p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-sections {
  padding: var(--space-xl) var(--space-outer);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  background: var(--color-background-200);

  @include mixins.landscape {
    display: none;
  }
}

.about-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  max-width: 800px;
  margin: 0 auto;

  &-title {
    font-size: var(--font-size-title-sm);
    font-weight: 900;
    text-transform: uppercase;
    color: var(--color-accent);
  }

  &-content {
    font-size: var(--font-size-lg);
    line-height: 1.6;
    color: var(--color-text);
  }
}
</style>
