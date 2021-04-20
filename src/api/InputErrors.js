export default function errors() {
    const NumCheck_color = (str) => String(Number(str)) == 'NaN' ? 'red' : 'indigo'
    
    return {
        NumCheck_color
    }
}