<template>
    <div class="card-details__transaction">
        <div class="card-transaction__item" v-for="(trans, i) in transactionList" :key="i">
            <div class="card-transaction__info">
                <div class="transaction-info__content">
                    <div class="transaction-info__logo">
                        <span :class="trans.icon"></span>
                    </div>
                    <div class="transaction-info__detail">
                        <b>{{trans.t_name}}</b>
                        <span>{{trans.t_date}}</span>
                    </div>
                </div>
                <div class="transaction-info__amount">
                    <b>{{trans.t_amount}}</b>
                </div>
            </div>
            <div class="card-transaction__type">
                <template v-if="trans.t_type_of_transaction === 'credit'">
                    <span class="business-and-finance"></span>
                    <span class="transaction-type__text">Refund on debit card</span>
                </template>
                <template v-else>
                    <span class="business-and-finance"></span>
                    <span class="transaction-type__text">Charged to debit card</span>
                </template>
            </div>
        </div>
        <div class="view-more-transactions">
            <a>View all card transactions</a>
        </div>
    </div>
</template>

<script src="./card-transactions.js"></script>

<style lang="scss">
    @import './card-transactions.scss'
</style>