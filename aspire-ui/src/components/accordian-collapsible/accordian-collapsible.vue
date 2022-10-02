<template>
    <div class="accordian-container">
            <div class="accordian-header" :class="{'accordian-open': isOpen}">
                <div class="accordian-header__title">
                    <slot name="header"></slot>
                </div>
                <a href="javascript:;" :class="'accordian-header__' + (isOpen ? 'close' : 'open')" @click="toggle"></a>
            </div>
            <div class="accordian-body" v-if="isOpen">
                <slot></slot>
            </div>
        </div>
</template>

<script src="./accordian-collapsible.js"></script>

<style lang="scss">
@import './accordian-collapsible.scss'
</style>    