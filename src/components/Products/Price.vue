<template>
    <div>
        <div class="panel">
            <div class="panel-item font-medium">
                Цена
            </div>
            <div class="panel-item">
                <label class="label">
                    Цена
                </label>
                <div class="mt-1 mb-2 flex rounded-md shadow-sm">
                    <span  class="input-append-span">
                        UAH
                    </span>
                    <input :value="price"  @input="$emit('update:price', $event.target.value)" type=number step=0.01 name="company_website" id="company_website"
                        class="input-body"
                        placeholder="0" />
                </div>

                <label class="label">
                    Себестоимость
                </label>
                <div class="input-append">
                    <span  class="input-append-span">
                        UAH
                    </span>
                    <input :value="cost" @input="$emit('update:cost', $event.target.value)"  type=number step=0.01 class="input-body" placeholder="0" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            price: Number,
            cost: Number
        }
    }
</script>

<style lang="scss" scoped>

</style>