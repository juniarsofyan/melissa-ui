<template>
    <div class="breadcrumb-trail breadcrumbs">
        <ul class="trail-items breadcrumb">
            <li 
                class="trail-item trail-begin active" 
                :class="isDone('PLACE ORDER') ? 'active' : ''"
                :style="!isDone('PLACE ORDER') ? 'color:rgba(0, 0, 0, 0.25)' : ''"
                :title="isDone('PLACE ORDER') ? getDate('PLACE ORDER') : ''"
            >
                <span> PLACE ORDER </span>
            </li>
            <li 
                class="trail-item trail-end"
                :class="isDone('TRANSFERRED') ? 'active' : ''"
                :style="!isDone('TRANSFERRED') ? 'color:rgba(0, 0, 0, 0.25)' : ''"
                :title="isDone('TRANSFERRED') ? getDate('TRANSFERRED') : ''"
            >
                <span> TRANSFERRED </span>
            </li>
            <li 
                class="trail-item trail-end"
                :class="isDone('PAYMENT CONFIRMED') ? 'active' : ''"
                :style="!isDone('PAYMENT CONFIRMED') ? 'color:rgba(0, 0, 0, 0.25)' : ''"
                :title="isDone('PAYMENT CONFIRMED') ? getDate('PAYMENT CONFIRMED') : ''"
            >
                <span> PAYMENT CONFIRMED </span>
            </li>
            <li 
                class="trail-item trail-end"
                :class="isDone('PACKED') ? 'active' : ''"
                :style="!isDone('PACKED') ? 'color:rgba(0, 0, 0, 0.25)' : ''"
                :title="isDone('PACKED') ? getDate('PACKED') : ''"
            >
                <span> PACKED </span>
            </li>
            <li 
                class="trail-item trail-end"
                :class="isDone('SHIPPED') ? 'active' : ''"
                :style="!isDone('SHIPPED') ? 'color:rgba(0, 0, 0, 0.25)' : ''"
                :title="isDone('SHIPPED') ? getDate('SHIPPED') : ''"
            >
                <span> SHIPPED </span>
            </li>
            <li 
                class="trail-item trail-end"
                :class="isDone('RECEIVED') ? 'active' : ''"
                :style="!isDone('RECEIVED') ? 'color:rgba(0, 0, 0, 0.25)' : ''"
                :title="isDone('RECEIVED') ? getDate('RECEIVED') : ''"
            >
                <span> RECEIVED </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['progresses'],
    methods: {
        isDone(progress_name) {
            return this.progresses.find((element) => element.keterangan == progress_name)
        },
        getDate(progress_name) {
            return this.progresses.find((element) => { 
                if (element.keterangan == progress_name) {
                    return element.tanggal
                }
            })
        }
    },
}
</script>