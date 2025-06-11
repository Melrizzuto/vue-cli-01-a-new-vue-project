<template>
  <header><h2>My Family</h2></header>
  <ul v-for="member in familyMembers" :key="member.id">
    <li>
      <family-info
        :name="member.name"
        :surname="member.surname"
        :age="member.age"
        :role="member.role"
        :favorite="member.favorite"
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
          role: "My Dad",
          favorite: true,
        },
        {
          id: "daniela",
          name: "Daniela",
          surname: "Prudente",
          age: 55,
          role: "My Mom",
          favorite: true,
        },
        {
          id: "giuseppe",
          name: "Giuseppe",
          surname: "Rizzuto",
          age: 30,
          role: "My Brother",
          favorite: true,
        },
        {
          id: "melania",
          name: "Melania",
          surname: "Rizzuto",
          age: 32,
          role: "It's Me",
          favorite: false,
        },
      ],
    };
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
  background-color: #f9f9f9;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: #333;
}

header {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin: 2rem auto;
  border-radius: 12px;
  padding: 1.5rem 2rem;
  background-color: #58004d;
  color: #fff;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 1.5rem auto;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  background-color: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 90%;
  max-width: 40rem;
}

#app li:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

#app h2 {
  padding: 0.5rem;
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  margin-bottom: 1.5rem;
  text-align: center;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
