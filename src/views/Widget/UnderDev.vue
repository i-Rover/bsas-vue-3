<template>
    <div class="container-fluid" style="background-color: #f2f2f2;height:100vh;">
        <div class="d-flex justify-content-center">
            <div class="card mt-5" style="width:900px;background-color:#cccccc;border:none;">
                <div class="card-body">
                    <div class="card-title">
                    <h5><i class="bi bi-cone" style="font-size:2rem;"></i> Sorry for inconvenience</h5>
                    <hr>
                    <p>This site is still under development. So please stay tuned</p>
                    <button class="btn btn-dark" @click="goBackNow">Go back</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import router from '../../router';

export default{
    data(){
        return{

        }
    },
    methods:{
        goBackNow(){
            router.go(-1);
        }
    }
}
</script>