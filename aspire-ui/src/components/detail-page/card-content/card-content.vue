<template>
    <div class="card-content">
       <cardContentHead />
       <div class="card-content__nav">
            <a :class="{'active': item.isActive}" v-for="(item,i) in navList" :key="i">{{item.text}}</a>
       </div>
       <div class="card-nav__content">
            <navContent />
       </div>
    </div>
</template>
<script src="./card-content.js"></script>

<style lang="scss">
@import "./card-content.scss";
</style>