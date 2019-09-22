<template>
    <div
        class="banner-shop banner-slider margin0 owl-slick equal-container"
        data-slick="{'autoplay':true, 'autoplaySpeed':10000, 'arrows':false, 'dots':true, 'infinite':true, 'speed':800, 'rows':1}"
    >
        <div class="item-banner style1">
            <div class="inner equal-element">
                <div class="banner-content style1">
                    <h4 class="turan-subtitle">Start ur weekend off right!</h4>
                    <h3 class="title">
                        T-shirt Sale
                        <br />15% OFF
                    </h3>
                    <span class="when-code">
                        When Use Code:
                        <span class="code">Z9QAR25</span>
                    </span>
                    <button class="button button-now">shop now</button>
                </div>
            </div>
        </div>
        <div class="item-banner style2">
            <div class="inner equal-element">
                <div class="banner-content style2">
                    <h3 class="title">Little America™ Backpack</h3>
                    <span class="description">
                        Suit your style with our new
                        <br />Backpack collection
                    </span>
                    <span class="hot-price">
                        Hot Price:
                        <span class="price-number">€250.00</span>
                    </span>
                    <button class="button button-now">shop now</button>
                    <button class="button button-view">view collection</button>
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