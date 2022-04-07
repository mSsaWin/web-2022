<template>
    <!-- Auth field -->
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header auth-choice">

                        <div class="sign-in active-field-color" id="SignIn">
                            <p>Войти</p>
                        </div>
                        <div class="sign-up" id="SignUp">
                            <p>Зарегистрироваться</p>
                        </div>
                        <button type="button" class="btn-close me-1 text-reset" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>

                    </div>
                    <div class="offcanvas-body active-field-color">
                        <form class="row g-3 signin-field">
                            <div class="col-12">
                                <label for="inputEmail4" class="form-label">Эл. адрес</label>
                                <input type="email" class="form-control" id="inputEmail4">
                            </div>
                            <div class="col-12">
                                <label for="inputPassword4" class="form-label">Пароль</label>
                                <input type="password" class="form-control" id="inputPassword4">
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary w-100">Войти в систему</button>
                            </div>
                            <div class="col miss-pass">
                                <a class="miss-pass">Забыли пароль?</a>
                            </div>
                        </form>

                        <form class="row g-3 signup-field">
                            <div class="col-12">
                                <label for="inputName" class="form-label">Имя</label>
                                <input type="name" class="form-control" id="inputName">
                            </div>
                            <div class="col-12">
                                <label for="inputLastName" class="form-label">Фамилия</label>
                                <input type="lastname" class="form-control" id="inputLastName">
                            </div>
                            <div class="col-12">
                                <label for="inputEmail4" class="form-label">Эл. адрес</label>
                                <input type="email" class="form-control" id="inputEmail4">
                            </div>
                            <div class="col-12">
                                <label for="inputPassword4" class="form-label">Пароль</label>
                                <input type="password" class="form-control" id="inputPassword4">
                            </div>
                            <div class="col-12">
                                <label for="inputPassword4" class="form-label">Подтверждение пароля</label>
                                <input type="password" class="form-control" id="inputPassword4">
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary w-100">Регистрация</button>
                            </div>

                        </form>
                    </div>
                </div>
</template>

<script>

export default {
   
}
</script>

<style scoped>
.auth-choice {
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
    /* text-decoration: underline; */
    /* background-color: rgb(245, 210, 210); */
}

.sign-up {
    text-align: center;
    width: 50%;
    margin: 0;
    padding-top: 20px;
    word-wrap: break-word;
    /* text-decoration: underline; */
    /* background-color: rgb(205, 228, 154); */
}

.miss-pass {
    margin: 5px;
    /* text-decoration: underline; */
    text-align: center;
    font-size: small;
    color: #000;
}
</style>
