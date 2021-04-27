<template>
    <div>
        <div class="panel">
            <div class="panel-item">
                Price
            </div>
            <div class="px-4 py-5 sm:p-6">
                <label class="label">
                    Price
                </label>
                <div class="mt-1 mb-2 flex rounded-md shadow-sm">
                    <span  class="input-append-span">
                        UAH
                    </span>
                    <input :value="price"  @input="$emit('update:price', $event.target.value)" type="text" name="company_website" id="company_website"
                        class="input"
                        placeholder="0" />
                </div>

                <label class="label">
                    Cost per item
                </label>
                <div class="input-append">
                    <span  class="input-append-span">
                        UAH
                    </span>
                    <input :value="amount" @input="$emit('update:amount', $event.target.value)"  type="text" class="input" placeholder="0" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            price: Number,
            amount: Number
        }
    }
</script>

<style lang="scss" scoped>

</style>