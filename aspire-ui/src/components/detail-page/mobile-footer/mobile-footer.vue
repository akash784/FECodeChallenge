<template>
    <div class="mobile-footer">
            <ul class="mobile-footer__links">
                <li class="mobile-footer__link" v-for="(link,i) in links" :key="i" >
                    <a :class="{'active': link.isActive}">
                        <span :class="link.className"></span>
                       {{link.text}}
                    </a>
                </li>
            </ul>
        </div>
</template>

<script src="./mobile-footer.js"></script>

<style lang="scss">
    @import './mobile-footer.scss';
</style>