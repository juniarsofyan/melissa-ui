<template>

    <div>
        <hr />
        <!--wrap main content-->
        <div class="main-content main-content-checkout">

            <div class="container">

                <!--breadcrumb-->
                <!-- <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-trail breadcrumbs">
                            <ul class="trail-items breadcrumb">
                                <li class="trail-item trail-begin"><a href="index.html">Home</a></li>
                                <li class="trail-item trail-end ">Checkout</li>
                                <li class="trail-item trail-end ">Payment</li>
                                <li class="trail-item trail-end active">Status</li>
                            </ul>
                        </div>
                    </div>
                </div> -->

                <!--page title-->
                <!-- <h3 class="custom_blog_title">#Status</h3> -->

                <!--checkout input form-->
                <div class="checkout-wrapp">
                    <!--last process-->
                    <div class="end-checkout-wrapp">
                        <div class="end-checkout checkout-form">
                            <div class="icon"></div>
                            <h3 class="title-checkend">Congratulation! Your order has been processed.</h3>
                            <div class="sub-title">
                                If user doesn't make a payment in 24 hours, the transaction will automatically canceled.
                            </div>
                            <nuxt-link :to="`/`" tag="a" class="button btn-return">Return to Store</nuxt-link>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
</template>