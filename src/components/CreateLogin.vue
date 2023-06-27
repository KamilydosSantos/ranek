<template>
    <section class="user-form">
        <h2 class="user-form__title">Crie a Sua Conta</h2>
        <transition mode="out-in">
            <button v-if="!create" class="btn user-form__create" @click="create = true">Criar Conta</button>
            <UserForm v-else>
                <button class="btn" @click.prevent="createUser">Criar Usuário</button>
            </UserForm>/>
        </transition>
    </section>
</template>

<script>
import UserForm from "@/components/UserForm.vue"

export default {
    name: "CreateLogin",
    components: {
        UserForm
    },
    data() {
        return {
            create: false,
        }
    },
    methods: {
        async createUser() {
            try {
                await this.$store.dispatch("createUser", this.$store.state.user);
                await this.$store.dispatch("getUser", this.$store.state.user.email);
                this.$router.push({name: "user"});
            } catch(error) {
                console.log(error);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.user-form__title{
    text-align: center;
    margin-top: 40px;
    margin-bottom: 10px;
}
.user-form__create {
    max-width: 300px;
}
.btn{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}
</style>