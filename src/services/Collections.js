import condition from '@/data/conditions.js'

export function getFullCond(cVal, aVal) {
    return condition.find(x => x.value === cVal).title + ' ' + condition.find(x => x.value === cVal).actions.find(x => x.value == aVal).title
}