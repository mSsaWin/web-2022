<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header auth-choice">

                        <div class="sign-in" id="SignIn" v-bind:class="{'active-field-color': current_field}" v-on:click="swapFields()">
                            <p>Войти</p>
                        </div>
                        <div class="sign-up" id="SignUp" v-bind:class="{'active-field-color': !current_field}" v-on:click="swapFields()">
                            <p>Зарегистрироваться</p>
                        </div>
                        <button type="button" class="btn-close me-1 text-reset" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>

                    </div>
                    <div class="offcanvas-body active-field-color" >
                        <form class="row g-3 signin-field" v-show="current_field" @submit="signIn" method="post"> 
                            <div class="col-12">
                                <label for="inputEmail" class="form-label">Эл. адрес</label>
                                <input name="login" v-model="login" type="email" class="form-control" id="inputEmail">
                                <div class="error text-danger">{{ errors.login }}</div>
                            </div>
                            <div class="col-12">
                                <label for="inputPassword" class="form-label">Пароль</label>
                                <input name="password" v-model="password" type="password" class="form-control" id="inputPassword">
                                <div class="error text-danger">{{ errors.password }}</div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary w-100">Войти в систему</button>
                            </div>
                            <div class="col miss-pass">
                                <a class="miss-pass">Забыли пароль?</a>
                            </div>
                        </form>

                        <form class="row g-3 signup-field" v-show="!current_field" @submit="signIn" method="post">
                            <div class="col-12">
                                <label for="inputName" class="form-label">Имя</label>
                                <input name="name" type="name" v-model="name" class="form-control" id="inputName">
                                <div class="error text-danger">{{ errors.name }}</div>
                            </div>
                            <div class="col-12">
                                <label for="inputLastName" class="form-label">Фамилия</label>
                                <input name="lastname" type="lastname"  v-model="lastName" class="form-control" id="inputLastName">
                                <div class="error text-danger">{{ errors.lastName }}</div>
                            </div>
                            <div class="col-12">
                                <label for="inputRegEmail" class="form-label">Эл. адрес</label>
                                <input name="login" v-model="login" type="email" class="form-control" id="inputRegEmail">
                                <div class="error text-danger">{{ errors.login }}</div>
                            </div>
                            <div class="col-12">
                               <label for="inputRegPass" class="form-label">Пароль</label>
                                <input name="password" v-model="password" type="password" class="form-control" id="inputRegPass">
                                <div class="error text-danger">{{ errors.password }}</div>
                            </div>
                            <div class="col-12">
                                <label for="inputRegPassAccept" class="form-label">Подтверждение пароля</label>
                                <input name="acceptPassword" type="password" v-model="acceptPassword" class="form-control" id="inputRegPassAccept">
                                <div class="error text-danger">{{ errors.acceptPassword }}</div>
                                <div class="error text-danger">{{ errors.uncorrentPassword }}</div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary w-100">Регистрация</button>
                            </div>

                        </form>
                    </div>
                </div>
</template>

<script>
export default{
    data(){
        return {
            current_field: true,
            login: "",
            password: "",
            acceptPassword: "",
            name: "",
            lastName: "",
            uncorrentPassword:"",
            errors: {
                login: "",
                password: "",
                acceptPassword: "",
                name: "",
                lastName: "",
                uncorrentPassword: ""
            }
        }
    }, 
    methods:{
        swapFields(){
            this.current_field = !this.current_field
        },

        signIn(event) {
            this.errors.login = ""
            this.errors.password = ""
            this.errors.acceptPassword = ""
            this.errors.name = ""
            this.errors.lastName = ""
            this.errors.uncorrentPassword = ""
            
            if (this.login.trim().length === 0) {
                this.errors.login = "Заполните логин."
            }
            if (this.password.trim().length === 0) {
                this.errors.password = "Заполните пароль."
            }
            if (this.acceptPassword.trim().length === 0) {
                this.errors.acceptPassword = "Подтвердите пароль."
            }
            if (this.name.trim().length === 0) {
                this.errors.name = "Заполните имя."
            }
            if (this.lastName.trim().length === 0) {
                this.errors.lastName = "Заполните фамилию."
            }
            if (this.acceptPassword !== this.password) {
                this.errors.uncorrentPassword = "Пароли не совпадают."
            }
            // если ошибок нет, то сохраняем пользователя в localStorage.
            if(this.current_field){
                if (this.errors.login.length === 0 && this.errors.password.length === 0) {
                    // send request
                    const user = {
                    login: this.login,
                    password: this.password
                    }
                    localStorage.setItem('user', JSON.stringify(user));
                    location.href = '/'
                    this.$store.commit('signIn')
            }
            }
            else{
                if (this.errors.login.length === 0 && this.errors.password.length === 0 && this.errors.acceptPassword.length === 0 
                    && this.errors.name.length === 0 && this.errors.lastName.length === 0 && this.errors.uncorrentPassword.length === 0) {
                    // send request
                    const user = {
                    login: this.login,
                    password: this.password
                    }
                    localStorage.setItem('user', JSON.stringify(user));
                    location.href = '/'
                    this.$store.commit('signIn')
                }
            }
            event.preventDefault()
        }
    }
}
</script>

<style scoped>
.auth-choice {
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    padding: 0;
}

.active-field-color {
    background-color: #f8f9fa;
}

.sign-in {
    width: 50%;
    text-align: center;
    vertical-align: middle;
    margin: 0;
    padding-top: 20px;
}

.sign-up {
    text-align: center;
    width: 50%;
    margin: 0;
    padding-top: 20px;
    word-wrap: break-word;
}

.miss-pass {
    margin: 5px;
    cursor: pointer;
    text-align: center;
    font-size: small;
    color: #000;
}
</style>
