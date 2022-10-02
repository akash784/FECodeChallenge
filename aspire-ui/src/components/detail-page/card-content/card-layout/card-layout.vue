<template>
    <div class="card-layout">
        <div class="card-layout__logo">
            <div class="logo"></div>
        </div>
        <div class="card-layout__name">
            <b>{{card.name}}</b>
        </div>
        <div class="card-layout__cardNumber">
            <span class="number-group" v-for="index in 3" :key="index">
                <span v-for="i in 4" :key="i"></span>
            </span>
            <span class="number-group">
                {{lastFourDigit}}
            </span>
        </div>
    </div>
</template>

<script src="./card-layout.js"></script>

<style lang="scss">
@import "./card-layout.scss";
</style>