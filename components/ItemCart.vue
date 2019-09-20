<template>
    <tr class="cart_item">
        <td class="product-remove">
            <a href="#" class="remove"></a>
        </td>
        <td class="product-thumbnail">
            <a href="#">
                <img src="https://tees.co.id/public/uploads/images/48762/604348/cache/thumbnail.jpg" alt=""
                    class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image">
            </a>
        </td>
        <td class="product-name" data-title="Product">
            <a href="#" class="title">Beard Tumbleweed Oil</a>
            <span class="attributes-select attributes-color">Brown,</span>
            <span class="attributes-select attributes-size">XS</span>

        </td>
        <td class="product-quantity" data-title="Quantity">
            <div class="quantity">
                <div class="control">
                    <a class="btn-number qtyminus quantity-minus" href="#">-</a>
                    <input type="text" data-step="1" data-min="0" value="1" title="Qty" class="input-qty qty" size="4">
                    <a href="#" class="btn-number qtyplus quantity-plus">+</a>
                </div>
            </div>
        </td>
        <td class="product-price" data-title="Price">
            <span class="woocommerce-Price-amount ">
                <span class="woocommerce-Price-currencySymbol">
                    Disc
                </span>
                45 %
            </span>
        </td>
         <td class="product-price" data-title="Price">
            <span class="woocommerce-Price-amount amount">
                <span class="woocommerce-Price-currencySymbol">
                  <sub><strike>  Rp.  232312</strike></sub>
                </span>
             <p>   Rp. 45423 </p>
            </span>
        </td>
        
        
    </tr>
</template>

<style scoped>

.cart-form .shop_table .product-price {
   width: 18%;
    font-size: 20px;
    color: #111;
    font-weight: 700;
}

.cart-form .shop_table .product-quantity {
    width: 15%;
}

.cart-form .shop_table .product-name {
    font-weight: 600;
    color: #333333;
    width: 25%;
    font-size: 16px;
}
</style>