<template>
    <div class="card-summary">
        <accordianCollapsible>
            <template v-slot:header>
                <span class="card-details"></span>
                <span>Card Details</span>
            </template>
        </accordianCollapsible>
        <accordianCollapsible>
            <template v-slot:header>
                <span class="recent-transactions"></span>
                <span>Recent transactions</span>
            </template>
            <template v-slot:default>
                <cardTransactions />
            </template>
        </accordianCollapsible>
    </div>
</template>

<script src="./card-summary.js"></script>

<style lang="scss">
@import './card-summary.scss'
</style>