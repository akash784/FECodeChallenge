<template>
    <div class="card-actions">
        <div class="card-actions__list">
            <div v-for="(action, i) in actionList" :key="i">
                <a class="card-action__link" @click="itemAction(action.value)">
                    <div :class="action.class"></div>
                    <div class="text-center">{{action.text}}</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script src="./card-actions.js"></script>

<style lang="scss">
@import './card-actions.scss';
</style>