<template>
    <div
        class="banner-shop banner-slider margin0 owl-slick equal-container"
        data-slick="{'autoplay':true, 'autoplaySpeed':10000, 'arrows':false, 'dots':true, 'infinite':true, 'speed':800, 'rows':1}"
    >
        <div class="item-banner style1">
            <div class="inner equal-element">
                <div class="banner-content style1">
                    <h4 class="turan-subtitle">Delicately Moisturizing Your Skin</h4>
                    <h3 class="title">
                        Enhanced with
                        <br />Vitamin C
                    </h3>
                    <button class="button button-now">shop now</button>
                </div>
            </div>
        </div>
        <div class="item-banner style2">
            <div class="inner equal-element">
                <div class="banner-content style2">
                    <span class="description">Rid Of Pustule</span>
                    <h3 class="title">Serum Acne Tea Tree Oil</h3>
                    <button class="button button-now">shop now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.full-width .item-banner.style1 .inner {
    background-image: url('/assets/img/slider/banner1.jpg') !important;
}

.full-width .item-banner.style2 .inner {
    background-image: url('/assets/img/slider/banner2.jpg') !important;
}
</style>