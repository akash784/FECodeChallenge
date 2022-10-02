<template>
    <div class="card-carousel">
        <div class="card-carousel__slider">
            <div v-for="(card, i) in cardList" :key="i">
                <cardLayout v-if="i === selectedIndex"  :card="card" />
            </div>
        </div>
        <div class="card-carousel__selector">
            <a href="javascript:;" 
                :class="{'active': (index-1) === selectedIndex}" 
                @click="changeCard(index-1)" 
                v-for="index in cardList.length" 
                :key="index">
            </a>
        </div>
    </div>
</template>

<script src="./manage-card.js"></script>

<style lang="scss">
    @import './manage-card.scss';
</style>