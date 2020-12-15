export const required = (value : any) => (value || typeof value === 'number' ? undefined : 'Ошибка: введите данные')


export const email = (value : any) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

// : any 2