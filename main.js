Vue.createApp({
    
    data(){
        return{
            emails:[],
            cloneMails:[]
        }
    },
    
    methods :{

        

    },

    mounted() {
        for (let i = 0; i < 10; i++) {
           axios.get("https://flynn.boolean.careers/exercises/api/random/mail") 
            .then((axiosResp) =>{
                this.emails.push(axiosResp.data.response)
            })
           
        } console.log(this.emails);
    },
    
}).mount('#app')