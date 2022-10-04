<template>
    <div class="detail-page">
        <div class="detail-page__desktop">
            <section class="detail-page__section">
                <linkSection />
            </section>
            <section class="detail-page__aside">
                <cardContent />
            </section>
        </div>
        <div class="detail-page__mobile">
            <mobileHeader />
            <mobileContent />
            <mobileFooter />
        </div>
        <dialogCenter />
    </div>
</template>

<script src="./detail-page.js"></script>

<style lang="scss">
@import "./detail-page.scss";
</style>
