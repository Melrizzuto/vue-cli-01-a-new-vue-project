<template>
  <h2>My family</h2>
  <ul>
    <li>
      <family-info
        v-for="member in familyMembers"
        :key="member.id"
        :member="member"
      ></family-info>
    </li>
  </ul>
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
