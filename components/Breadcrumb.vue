<template>
    <div class="breadcrumb-trail breadcrumbs">
        <ul class="trail-items breadcrumb">
            <span v-for="slug in slugs" :key="slug.title">
                <li class="trail-item trail-end active" v-if="slug.active">{{ slug.title }}</li>
                <li class="trail-item trail-begin" v-else>
                    <nuxt-link :to="slug.url" tag="a">{{ slug.title }}</nuxt-link>
                </li>
            </span>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['slugs']
}
</script>