<template>
  <h3>{{ member.name }}</h3>
  <button @click="toggleVisibility">Show Infos</button>
  <ul v-if="visible">
    <li>Full Name: {{ member.name }} {{ member.surname }}</li>
    <li>Age: {{ member.age }}</li>
  </ul>
</template>

<script>
export default {
  name: "MemberCard",
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
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
