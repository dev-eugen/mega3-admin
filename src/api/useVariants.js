import {ref} from 'vue'
export default function useVariants(props, state) {
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

    return { addUserOption, labelUpdate, delUserOption, open, root_addUserOption, root_labelUpdate, root_delUserOption }
}