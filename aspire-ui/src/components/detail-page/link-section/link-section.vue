<template>
    <div class="link-section">
        <div class="link-section__head">
            <img src="../../../assets/aspire_logos/Aspire-Logo.png" alt="Apire" />
        </div>
        <div class="link-section__description">
            Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </div>
        <div class="link-section__links">
            <ul>
                <li class="link-section__link" v-for="(link,i) in links" :key="i" >
                    <a :class="{'active': link.isActive}">
                        <span :class="link.className"></span>
                       {{link.text}}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="./link-section.js"></script>
<style lang="scss">
@import "./link-section.scss"
</style>