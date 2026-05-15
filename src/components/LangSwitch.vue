<script setup lang="ts">
import Button from "./Button.vue";
import { locale } from "../i18n/store";
import { changeLocale } from "../i18n/utils/locale";
import { LOCALES } from "../i18n/constants";
import type { Locale } from "../i18n/types";

const handleLangSwitch = () => {
  const keys = Object.keys(LOCALES) as Locale[];
  const currentIndex = locale.value ? keys.indexOf(locale.value) : -1;
  const nextIndex = (currentIndex + 1) % keys.length;
  const nextLocale = keys[nextIndex];
  if (nextLocale) {
    changeLocale(nextLocale);
  }
};
</script>

<template>
  <Button
    variant="border"
    size="sm"
    @click="handleLangSwitch"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
  >
    {{ locale ? LOCALES[locale].name : "EN" }}
  </Button>
</template>
