<template>
    <section>
        <UserForm>
            <button class="btn" @click.prevent="updateUser">Atualizar Usuário</button>
        </UserForm>
    </section>
</template>

<script>
import UserForm from '@/components/UserForm.vue';
import { api } from "@/services.js";

export default {
    name: "EditUser",
    components: { 
        UserForm
     },
     methods: {
        updateUser() {
            api.put(`/user/${this.$store.state.user.id}`, this.$store.state.user)
            .then(() => {
                this.$store.dispatch("getUser", this.$store.state.user.id);
                this.$router.push({ name: "user" });
            })
            .catch(error => {
                console.log(error.response);
            });
        }
    }
};
</script>

<style>

</style>