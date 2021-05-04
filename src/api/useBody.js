import { ref } from 'vue'
export default function body() {
    const body = ref(false)
    const s_body = ref(false)

    const body_ = () => body.value = !body.value
    const s_body_ = () => s_body.value = !s_body.value
    return {
        body, body_, s_body, s_body_
    }
}