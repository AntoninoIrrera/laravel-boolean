<script>
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: 'ContactForm',
    components:{
        AppLoader
    },
    data(){
        return{
            name:'',
            email:'',
            message:'',
            success: false,
            loading: false,
            goodSuccess: false,
            errors: {},
            apiUrl: 'http://127.0.0.1:8000/api/contact-us'
        }
    },
    methods:{
        sendContactForm(){
            this.loading = true;
            axios.post(this.apiUrl, {
                name: this.name,
                email: this.email,
                message: this.message,
            })
            .then((response) => {

                

                this.success = response.data.success;

             

                if(this.success){
                    this.goodSuccess = true;
                    this.name = ''
                    this.email = ''
                    this.message = ''
                    this.loading = false;
                }else{

                    this.errors = response.data.errors
                    this.loading = false;

                }

            })
        }
    }
}
</script>

<template>
       
    
    <div v-if="this.loading" class="text-center my-5">
        <AppLoader/>
    </div>
    <div v-else-if="this.goodSuccess">
        <p class="text-center fs-1 text-success">Messaggio inviato correttamente</p>
    </div>
    <div v-else>

        <div class="mb-3">
            <label for="name" class="form-label">Name:</label>
            <input type="text" class="form-control" :class="errors.name ? 'is-invalid' : ''" id="name" v-model="name">
            <div class="alert alert-danger mt-2" v-if="errors.name">
                <p v-for="error in errors.name" class="mb-0">{{ error }}</p>
            </div>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="text" class="form-control " :class="errors.email ? 'is-invalid' : ''" id="email" v-model="email">
            <div class="alert alert-danger mt-2" v-if="errors.email">
                <p v-for="error in errors.email" class="mb-0">{{ error }}</p>
            </div>
            
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Message:</label>
            <textarea class="form-control" :class="errors.message ? 'is-invalid' : ''" id="message" rows="15" v-model="message"></textarea>
            <div class="alert alert-danger mt-2" v-if="errors.message">
                <p v-for="error in errors.message" class="mb-0">{{ error }}</p>
            </div>
        
        </div>
        <button type="submit" @click="sendContactForm" class="btn btn-primary">Invia</button>
    </div>


   


</template>


<style lang="scss"></style>