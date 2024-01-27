<template>
  <div class="SignUp">
    <h1>Sign In</h1>
    <form action="#">
      <label for="name"> Name : </label>
      <input type="text" placeholder="name" />
      <label for="email"> Email : </label>
      <input type="email" placeholder="email" />
      <label for="password"> password : </label>
      <input type="password" placeholder="password" />
      <input type="button" value="Sigin In" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style scoped>
.SignUp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 96%;
  margin: 0.8rem auto;
}
h1 {
  color: #3b2e8c;
  text-align: center;
  padding: 1rem;
}
form {
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 1rem;
  margin: 1rem;
  background-color: #ededed;
  border-radius: 1rem;
  border: 1px solid #3b2e8c;
  text-transform: capitalize;
}
label {
  color: #3b2e8c;
  text-align: left;
  padding: 0.5rem 1.5rem;
  margin: 2rem 0 0 0;
}
input {
  border: 1px solid rgba(242, 242, 242, 0.85);
  display: flex;
  color: #3b2e8c;
  width: 90%;
  padding: 0.8rem;
  margin: 0.5rem auto;
  border-radius: 0.5rem;
}
input:focus {
  outline: none;
}
input[type="button"] {
  width: 60%;
  color: #3b2e8c;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 4% auto;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.4s ease;
  border: 1px solid #3b2e8c;
}
input[type="button"]:hover {
  background-color: #3b2e8c;
  color: #ededed;
}
</style>
