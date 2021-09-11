import { useState } from "react"

const useForm = initialState => {
    const [form, setForm] = useState(initialState)

    const handleChange = e => {
        const { name, value, checked, type } = e.target
        const newValue = type === "checkbox" ? checked : value
        setForm({
            ...form,
            [name]: newValue
        })
    }
    
    return [form, handleChange]
}

export default useForm