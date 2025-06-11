<template>
  <h3>
    {{ role }}
    <span v-if="isFavorite">❤️</span>
  </h3>

  <button @click="toggleVisibility">
    {{ visible ? "Hide" : "Show" }} Infos
  </button>

  <button @click="toggleFavorite">
    {{ isFavorite ? "Unfavorite" : "Favorite" }}
  </button>

  <ul v-if="visible">
    <li>Full Name: {{ name }} {{ surname }}</li>
    <li>Age: {{ age }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: false,
      isFavorite: this.favorite,
    };
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
  },
};
</script>
