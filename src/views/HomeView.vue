<script setup>
import { useUser } from "@/composables/useUser";

const { user, setUser } = useUser();
</script>

<template>
  <h1>{{ user.name }}</h1>
  <button @click="setUser({ name: 'Juan' })">Cambiar nombre</button>
</template>
