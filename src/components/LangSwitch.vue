<script setup lang="ts">
import Button from "./Button.vue";
import { locale } from "../i18n/store";
import { changeLocale } from "../i18n/utils/locale";
import { LOCALES } from "../i18n/constants";
import type { Locale } from "../i18n/types";

const handleLocaleChange = (newLocale: Locale) => {
  changeLocale(newLocale);
};
</script>

<template>
  <div class="lang-switch">
    <Button
      v-for="(info, key) in LOCALES"
      :key="key"
      :variant="locale === key ? 'accent' : 'border'"
      size="sm"
      @click="handleLocaleChange(key as Locale)"
      data-cursor="circle-white"
      data-sound="click"
      data-hoversound="hover"
    >
      {{ info.name }}
    </Button>
  </div>
</template>

<style scoped lang="scss">
.lang-switch {
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
  justify-content: center;

  @include mixins.mq("md") {
    justify-content: flex-start;
  }
}
</style>
