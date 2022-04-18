<template>
    <div class="container">
        <div class="row profile-description">
            <div class="col-xl-3 col-md-3 col-sm-6 col-6">
                <div class="avatar">
                    <img :src="AvatarImg" alt="">
                </div>
            </div>
            <div class="col-xl-3 col-md-3 col-sm-6 col-6 profile-fio">
                <div class="name">
                    Джонатан Джостар
                </div>
            </div>
            <div class="col-xl-3 col-md-3 col-sm-6 col-6">
                <div class="profile-type">
                    <ul>
                        <li>
                            Аккаунт: <span>Частное лицо</span>
                        </li>
                        <li>
                            Сделок закрыто: <span>10</span>
                        </li>
                    </ul>
                    <!-- <div class="type">
                        Аккаунт: <span>Частное лицо</span>
                    </div>
                    <div class="deal-count">
                        Сделок закрыто: <span>10</span>
                    </div> -->
                </div>
                
            </div>
            <div class="col-xl-3 col-md-3 col-sm-6 col-6">
                <div class="profile-info">
                    <ul>
                        <li>
                            <span class="material-icons icon">phone</span>
                            <span>+79507157925</span></li>
                        <li>
                            <span class="material-icons icon">alternate_email</span>
                            <span>xman1736@gmail.com</span>
                        </li>
                        <li>
                            <span class="material-icons icon">location_on</span>
                            <span>Белгородская обл.</span>
                        </li>
                    </ul>
                    <!-- <div class="phone">
                        <span class="material-icons icon">phone</span>
                        <span>+79507157925</span>
                    </div>
                    <div class="email">
                        <span class="material-icons icon">alternate_email</span>
                        <span>xman1736@gmail.com</span>
                    </div>
                    <div class="location">
                        <span class="material-icons icon">location_on</span>
                        <span>Белгородская обл.</span>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AvatarImg from '@/assets/avatar.png'
export default {
    data(){
        return{
            AvatarImg
        }
    },
    components:{
        
    }
}
</script>

<style scoped>
    .container{
        margin-top: 10px;
    }
    
    .row{
        margin: auto;
    }
    .profile-description{
        border: 1px solid var(--color1);
        border-radius: 20px;
    }
    .avatar{
        width: 120px;
        height: 120px;
        margin: 5px auto;
        padding: 0 auto;
    }
    .avatar img{
        width: 100%;
        height: 100%;
    }
    .profile-fio{
        margin: 0 auto;
        padding: 0 auto;
        /* text-align: center; */
        
    }

    .name{
        font-size: 20px;
        color:#272727;
        word-wrap: break-word;
        display: flex;
        align-items: center;
        height: 100%;
        font-weight: 300;
        text-align: center;
    }

    .profile-type{
        display: flex;
        align-items: center;
        height: 100%;
        font-weight: 500;
    }

    .profile-type ul{
        padding: 0;
    }

    .profile-type li{
      list-style: none;
    }
    .profile-type span{
        font-weight: 200;
    }

    .profile-info{
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .icon{
        padding-right: 5px;
        font-size: 15px;
    }
    .profile-info ul{
        padding: 0;
        list-style: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .profile-info li{

        font-weight: 200;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media (max-width: 768px) {
        .name{
            justify-content: center;
        }
        .profile-type{
            justify-content: center;
            
        }
        .profile-info{
            justify-content: center;
        }
    }
</style>