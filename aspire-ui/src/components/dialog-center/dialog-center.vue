<template>
    <div class="dialog-center" v-if="showDialog">
        <div class="dialog-center__mask">
            <div class="dialog-center__body">
                <!-- this is temp code, if we need to show alot of components in dialog 
                then we can use <component :is ></component> approach and create 
                individual components instead of static skeleton -->
                <div v-if="!isConfirm">
                    <form @submit="addNewCard" class="add-card-form">
                        <input type="text" placeholder="Enter card number" v-model="cardNumber" maxlength="16" />
                        <input type="text" placeholder="Enter name" v-model="cardName" />
                        <input type="text" placeholder="Enter CVV" maxlength="3" v-model="cardCVV" />
                        <div>
                            <button type="submit"> Submit</button>
                            <button class="close" @click="closeDialog">Close</button>
                        </div>
                        <span v-if="showError" class="error"> Please fill all the fields</span>
                    </form>
                </div>
                <div v-else>

                </div>
                
            </div>
        </div>
    </div>
</template>

<script src="./dialog-center.js"></script>

<style lang="scss">
@import './dialog-center.scss'
</style>