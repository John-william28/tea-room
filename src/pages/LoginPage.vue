<template>
    <main class="loginmain">
      <h1>LoginPage</h1>
      <form v-on:submit.prevent="submitHandler">
        <section>
          <article>
            <label for="email">Email</label>
            <input
              v-model="data.email"
              id="email"
              type="email"
              placeholder="entrez votre email"
              class="input"
              @input="inputHandler"
            />
            <p v-if="error.email" class="error">{{ error.email }}</p>
          </article>
          <article>
            <label for="password">Mot de passe</label>
            <input
              v-model="data.password"
              id="password"
              type="password"
              placeholder="entrez votre mot de passe"
              class="input"
            />
          </article>
        </section>
        <section>
          <button type="submit" class="button is-primary">Valider</button>
          <button type="reset" class="button is-danger">Réinitialiser</button>
        </section>
      </form>
    </main>
  </template>
  
  <script lang="ts" setup>
  import { reactive, watch } from "vue";
  
  const data = reactive({
    email: "",
    password: ""
  });
  
  const error = reactive({
    email: ""
  });
  
  // Pattern pour vérifier une adresse email valide
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  const isUserInputValid = (input: string): boolean => {
    return emailPattern.test(input);
  };
  
  const submitHandler = () => {
    if (isUserInputValid(data.email)) {
      console.log("Email valide :", data.email);
    } else {
      console.error("Email invalide :", data.email);
      error.email = "Veuillez entrer une adresse email valide.";
    }
  };
  
  const inputHandler = () => {
    if (isUserInputValid(data.email)) {
      error.email = "";
    } else {
      error.email = "Format de l'email incorrect.";
    }
  };
  
  watch(data, (val) => {
    console.log("Changement dans la variable data", val);
  });
  </script>
  