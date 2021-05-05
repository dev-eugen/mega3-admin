import axios from "@/libs/axios.js"

export async function fileSave(file) {
    let formData = new FormData()
    formData.append("file", file, file.name)
    let r = await axios.post('create-product-image', formData)
    return { url: 'https://mega3.uk/storage/product_images/' + r.data.filename, size: file.size }
}