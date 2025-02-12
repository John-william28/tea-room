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
              placeholder="Entrez votre email"
              class="input"
              @input="inputHandler('email')"
            />
            <p v-if="error.email" class="error">{{ error.email }}</p>
          </article>
          <article>
            <label for="password">Mot de passe</label>
            <input
              v-model="data.password"
              id="password"
              type="password"
              placeholder="Entrez votre mot de passe"
              class="input"
              @input="inputHandler('password')"
            />
            <p v-if="error.password" class="error">{{ error.password }}</p>
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
    email: "",
    password: ""
  });
  
  // Patterns de validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  const isUserInputValid = (input: string, type: string): boolean => {
    if (type === "email") return emailPattern.test(input);
    if (type === "password") return passwordPattern.test(input);
    return false;
  };
  
  const submitHandler = () => {
    let isValid = true;
  
    if (!isUserInputValid(data.email, "email")) {
      error.email = "Veuillez entrer une adresse email valide.";
      isValid = false;
    } else {
      error.email = "";
    }
  
    if (!isUserInputValid(data.password, "password")) {
      error.password =
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.";
      isValid = false;
    } else {
      error.password = "";
    }
  
    if (isValid) {
      console.log("Formulaire valide :", data);
    } else {
      console.error("Formulaire invalide :", data);
    }
  };
  
  const inputHandler = (type: string) => {
    if (type === "email") {
      error.email = isUserInputValid(data.email, "email") ? "" : "Format de l'email incorrect.";
    }
    if (type === "password") {
      error.password = isUserInputValid(data.password, "password")
        ? ""
        : "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.";
    }
  };
  
  watch(data, (val) => {
    console.log("Changement dans la variable data", val);
  });
  </script>

  