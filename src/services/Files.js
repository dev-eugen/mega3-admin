import axios from 'axios'

export async function fileSave(file) {
    let formData = new FormData()
    formData.append("file", file, file.name)
    let r = await axios.post('https://api.mega3.uk/v1/create-product-image', formData, { headers : { Authorization: "Bearer " +   "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNTJhMmMyMzEyNGZhOGMzM2NhNzkyOGUxNDNlZDc3Zjc0NzA5YjIyZGVmODM1ZGUyYjMzZGI0YWU5Y2E1NzhkZThjNzQyYWFhMGEyN2MzMmYiLCJpYXQiOjE2MTk1MjU1MzYsIm5iZiI6MTYxOTUyNTUzNiwiZXhwIjoxNjE5NjExOTM2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.gJz0hwtJj_PBkDvr3xT2AywEBwyX6kvd_GiaTL0n1XttOnRHuQhQygOsG5ESofb_4lsITPhqMnmIYH4fZGJ3vXfMbFLTzwBzxexw3c5ibQB2yXyXbbJBEqjc1DfWWPe2vlC2tQ531ZVDltu6jTxtREW3Y1zwFbnzcxfNpdm_KKv5hf59fF7DAPKz9GK5M3GavmEh2p5tQnzS8ne9ZTU_UOq2NEX2HvZ9-PfnVnP6MbpmO4A6jAcaLVR5daWr5zXTenER03_5cCANHdP-QMlCOshWX34k3BI5IHGg1dcjOHPpOijv4bwyDusgXn_3WR6c28trJr8gfsNK8Sk7jS6P-RyK-aBrBsMTPZ_uRqBAGsJKzBCwAHHqCNqFnTg09nKYHIIqZgx-LZ9LANcu3QPbZ-4F4013BmvoXxMtKQJrFcOmDhJAkNF5a_jhg9jLaLFK8LVQUk8ufQsx7t6wSHVoWnW5CrdnNwgosLKhMN1_-bJiWmQ5Y1oLl-XpqVsz4sVHnB1en3EJkDPCAz76ZGwp_ikrJ-hnLVte4kfO8NwXrFGySltw8l13KuJeczoIeTllz2fLWrf8wMcMObaF-gVVEZvtFgJIoLnHc6e9N8OL0ocsVdaiddzAMo_BeQkHE9a71rCG5QA-9LGjsuQbqIeWRDsmCQtEJ7V7WevBYaOwjdE" } })
    return { url: 'https://mega3.uk/storage/product_images/' + r.data.filename, size: file.size }
}