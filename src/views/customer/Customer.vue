<template>
    <div>

        <div class="customerAdd">
            <CustomerAdd></CustomerAdd>
        </div>

       <div class="curtomerMain">
            <CurtomerMain></CurtomerMain>
        </div>

    <div class="crutomerYc">
          <CrutomerYc></CrutomerYc>
      </div>
         <div class="customerOperation">
         <CustomerOperation></CustomerOperation>
      </div>

    </div>
</template>

<script>

import CustomerAdd from './CustomerAdd.vue'
import CurtomerMain from './CurtomerMain.vue'
import CustomerOperation from './CustomerOperation.vue'
import CrutomerYc from './CrutomerYc.vue'


export default {
    data:function () {
        return{
        
        }
    },
    components:{ 
       CustomerAdd,
       CurtomerMain,
       CustomerOperation,
       CrutomerYc
    },
    
}
</script>

<style lang="scss">
.customerAdd{
    width: 1350px;
    height: 60px;
    padding-top:20px;
     background-color: #F7F8FA;
}
.curtomerMain{
    width: 1350px;
    height:320px;
    padding-top:20px;
    background-color: #F7F8FA;
}
.crutomerYc{
    width: 1350px;
    padding-top: 20px;
    height: 100%;
    background-color: #F7F8FA;
}

</style>
