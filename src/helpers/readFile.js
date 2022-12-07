export const readFile = async (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result)
        }
        reader.readAsDataURL(file);
        reader.onerror = reject
    })
}