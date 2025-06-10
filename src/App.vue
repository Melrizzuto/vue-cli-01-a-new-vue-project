<template>
  <h2>My family</h2>
  <ul>
    <li v-for="member in familyMembers" :key="member.id">
      {{ member.name }} {{ member.surname }} ({{ member.age }} years old)
    </li>
  </ul>
  <p v-if="familyMembers.length === 0">No family members found.</p>
  <p v-else>We have {{ familyMembers.length }} family members.</p>
  <p v-if="familyMembers.length > 3">We have a big family!</p>
  <p v-else>We have a small family.</p>
  <p v-for="member in familyMembers" :key="member.id">
    {{ member.name }} is {{ member.age }} years old.
  </p>
</template>

<script>
export default {
  data() {
    // This function returns an object with family members' details
    return {
      familyMembers: [
        {
          id: "antonio",
          name: "Antonio",
          surname: "Rizzuto",
          age: 59,
        },
        {
          id: "daniela",
          name: "Daniela",
          surname: "Prudente",
          age: 55,
        },
        {
          id: "giuseppe",
          name: "Giuseppe",
          surname: "Rizzuto",
          age: 30,
        },
        {
          id: "melania",
          name: "Melania",
          surname: "Rizzuto",
          age: 32,
        },
      ],
    };
  },
};
</script>
