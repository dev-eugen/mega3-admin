export default  [
    { 
        value: 'TITLE',
        title: 'Название',
        actions: [
            { value: 'EQUALS', title: 'равно' },
            { value: 'NOT_EQUALS', title: 'не равно' },
            { value: 'STARTS_WITH', title: 'начинается с' },
            { value: 'ENDS_WITH', title: 'заканчивается на' },
            { value: 'CONTAINS', title: 'содержит' },
            { value: 'NOT_CONTAINS', title: 'не содержит' }
        ]
    },
    { 
        value: 'TYPE',
        title: 'Категория',
        actions: [
            { value: 'EQUALS', title: 'равно' },
            { value: 'NOT_EQUALS', title: 'не равно' },
            { value: 'STARTS_WITH', title: 'начинается с' },
            { value: 'ENDS_WITH', title: 'заканчивается на' },
            { value: 'CONTAINS', title: 'содержит' },
            { value: 'NOT_CONTAINS', title: 'не содержит' }
        ]
    },
    { 
        value: 'VENDOR',
        title: 'Продавец (поставщик)',
        actions: [
            { value: 'EQUALS', title: 'равно' },
            { value: 'NOT_EQUALS', title: 'не равно' },
            { value: 'STARTS_WITH', title: 'начинается с' },
            { value: 'ENDS_WITH', title: 'заканчивается на' },
            { value: 'CONTAINS', title: 'содержит' },
            { value: 'NOT_CONTAINS', title: 'не содержит' }
        ]
    },
    { 
        value: 'VARIANT_PRICE',
        title: 'Ценна',
        actions: [
            { value: 'EQUALS', title: 'равно' },
            { value: 'NOT_EQUALS', title: 'не равно' },
            { value: 'GREATER_THAN', title: 'больше' },
            { value: 'LESS_THAN', title: 'меньше' }
        ]
    },
    { 
        value: 'TAG',
        title: 'Тег',
        actions: [
            { value: 'EQUALS', title: 'равно' }
        ]
    },
    { 
        value: 'VARIANT_COMPARE_AT_PRICE',
        title: 'Себестоимость',
        actions: [
            { value: 'EQUALS', title: 'равно' },
            { value: 'NOT_EQUALS', title: 'не равно' },
            { value: 'GREATER_THAN', title: 'больше' },
            { value: 'LESS_THAN', title: 'меньше' },
            { value: 'IS_SET', title: 'не пусто' },
            { value: 'IS_NOT_SET', title: 'пусто' }
        ]
    },
    { 
        value: 'VARIANT_WEIGHT',
        title: 'Вес',
        actions: [
            { value: 'EQUALS', title: 'равно' },
            { value: 'NOT_EQUALS', title: 'не равно' },
            { value: 'GREATER_THAN', title: 'больше' },
            { value: 'LESS_THAN', title: 'меньше' }
        ]
    },
    { 
        value: 'VARIANT_INVENTORY',
        title: 'На складе ...',
        actions: [
            { value: 'EQUALS', title: 'равно' },
            { value: 'GREATER_THAN', title: 'больше' },
            { value: 'LESS_THAN', title: 'меньше' }
        ]
    },
    { 
        value: 'VARIANT_TITLE',
        title: 'Название товаров в группе',
        actions: [
            { value: 'EQUALS', title: 'равно' },
            { value: 'NOT_EQUALS', title: 'не равно' },
            { value: 'STARTS_WITH', title: 'начинается с' },
            { value: 'ENDS_WITH', title: 'заканчивается на' },
            { value: 'CONTAINS', title: 'содержит' },
            { value: 'NOT_CONTAINS', title: 'не содержит' }
        ]
    }
]