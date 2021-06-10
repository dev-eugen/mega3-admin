import {ref} from 'vue'
export default function useVariants(props, group_product) {
    const open = ref(false)
    const addUserOption = () => {
        open.value = true
        props.user_options.push({
            label: '',
            option: null
        })

        props.modelValue.forEach(e => {
            e.user_options.push({
                label: '',
                option: null
            })
        })
    }

    const root_addUserOption = () => {
        open.value = true
        props.user_options.push({
            label: '',
            option: null
        })

        props.r_user_options.push({
                label: '',
                option: null
            })
    }

    const labelUpdate = () => {
        props.modelValue.forEach((e) => {
            e.user_options.forEach((element, i) => {
                element.label = props.user_options[i].label
            })
        })
        open.value = false
    }

    const root_labelUpdate = () => {
            props.r_user_options.forEach((element, i) => {
                
                element.label = props.user_options[i].label
            })
        open.value = false
    }

    const delUserOption = (i) => {
        props.modelValue.forEach((e) => {
            e.user_options.splice(i, 1)
        })

        props.user_options.splice(i, 1)
    }

    const root_delUserOption = (i) => {
        props.user_options.splice(i, 1)
        props.r_user_options.splice(i, 1)
    }

    const applyAll = () => {
        group_product.products.length  > 1 ?  group_product.products.forEach(e => {
            e.title = group_product.title
            e.descriptionHtml = group_product.descriptionHtml
            e.price = group_product.price
            e.inventory.cost = group_product.cost
            e.shipping = group_product.shipping
            e.seo = group_product.seo
            e.tags = group_product.tags
        }) : null
    }

    const status_change = (status) => {
        group_product.products.forEach(e => {
            e.status = status
        })
    }

    const delVariant = (i) => {
        group_product.products.length > 1 ? group_product.products.splice(i, 1) : null
    }

    const addVariant = () => {
        group_product.products.push({
            options: clearOptions(),
            user_options: clearUserOptions(),
            price: 0.00,
            prices: [],
            sku: '',
            barcode: '',
            collections: [],
            tags: [],
            images: [{
                url: 'https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg',
                alt: 'women',
                size: '15',
                ref: false
            }, ],
            inventory: {
                cost: 0,
                tracked: true,
                inventoryPolicy: false,
                available: 0
            },
            seo: {
                title: '',
                description: '',
                keywords: []
            },
            shipping: {
                height: null,
                width: null,
                length: null,
                weight: null
            },
        })
    }


    const clearOptions = () => {
        let r = []
        group_product.options.forEach(e => {
            r.push({
                label: e.label,
                option: null
            })
        })
        return r
    }


    const clearUserOptions = () => {
        let r = []
        group_product.user_options.forEach(e => {
            r.push({
                label: e.label,
                option: null
            })
        })
        return r
    }

    return { clearUserOptions, clearOptions, delVariant, addVariant, status_change, applyAll, addUserOption, labelUpdate, delUserOption, open, root_addUserOption, root_labelUpdate, root_delUserOption }
}
