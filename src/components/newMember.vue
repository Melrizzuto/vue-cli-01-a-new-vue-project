<template>
  <div>
    <h2>New Family Member</h2>
    <form @submit.prevent="addMember">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="memberName" required />

      <label for="surname">Surname:</label>
      <input type="text" id="surname" v-model="memberSurname" required />

      <label for="age">Age:</label>
      <input type="number" id="age" v-model.number="memberAge" required />

      <label for="role">Role:</label>
      <input type="text" id="role" v-model="memberRole" required />

      <button type="submit">Add Member</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["add-member"],
  data() {
    return {
      memberName: "",
      memberSurname: "",
      memberAge: null,
      memberRole: "",
      favorite: false,
    };
  },
  methods: {
    addMember() {
      this.$emit(
        "add-member",
        this.memberName,
        this.memberSurname,
        this.memberAge,
        this.memberRole,
        this.favorite
      );
    },
  },
};
</script>

<style scoped>
form {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
input {
  display: block;
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
button {
  background-color: #58004d;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #72005f;
}
</style>
