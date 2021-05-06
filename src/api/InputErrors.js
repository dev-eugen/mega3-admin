export default function errors() {
    const NumCheck_color = (str) => String(Number(str)) == 'NaN' ? 'red' : 'indigo'
    const SizeCheck_color = (str, size) =>   str.length > size ? 'red' : 'gray' 
    return {
        NumCheck_color,  SizeCheck_color
    }
}