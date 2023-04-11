<script setup>
import { useUser } from "@/composables/useUser";

const { user } = useUser();
</script>

<template>
  <div class="about">
    <h1>User: {{ user.name }}</h1>
  </div>
</template>
