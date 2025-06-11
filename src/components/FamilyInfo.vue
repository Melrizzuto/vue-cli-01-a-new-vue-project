<template>
  <h3>{{ role }}</h3>
  <button @click="toggleVisibility">
    {{ visible ? "Hide" : "Show" }} Infos
  </button>
  <ul v-if="visible">
    <li>Full Name: {{ name }} {{ surname }}</li>
    <li>Age: {{ age }}</li>
  </ul>
</template>

<script>
export default {
  props: ["name", "surname", "age", "role"],
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    },
  },
};
</script>
