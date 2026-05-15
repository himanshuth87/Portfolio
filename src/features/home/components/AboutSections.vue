<script setup lang="ts">
import { t } from "../../../i18n/utils/translate";
import profilePhoto from "../../../assets/images/profile.webp";
</script>

<template>
  <section class="about-sections">
    <div class="about-section">
      <div class="about-section-photo-wrapper">
        <img :src="profilePhoto" :alt="t('name')" class="about-section-photo" />
      </div>
      <div class="about-section-text">
        <h2 class="about-section-title">{{ t('about') }}</h2>
        <p class="about-section-content" v-html="t('about-intro')"></p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-sections {
  padding: var(--space-xl) var(--space-outer);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  background: var(--color-beige-500);

  @include mixins.landscape {
    display: none;
  }
}

.about-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;

  @include mixins.mq("md") {
    flex-direction: row;
    align-items: flex-start;
  }

  &-photo-wrapper {
    flex-shrink: 0;
    width: 200px;
    height: 200px;
    border-radius: var(--radius-xl);
    overflow: hidden;
    border: var(--stroke-lg) solid var(--color-orange-400);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    @include mixins.mq("md") {
      width: 280px;
      height: 380px;
      border-radius: var(--radius-xxl);
    }
  }

  &-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &-text {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  &-title {
    font-size: var(--font-size-title-sm);
    font-weight: 900;
    text-transform: uppercase;
    color: var(--color-orange-400);
  }

  &-content {
    font-size: var(--font-size-lg);
    line-height: 1.6;
    color: var(--color-text-400);
  }
}
</style>
