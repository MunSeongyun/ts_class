export default function objectSample() {
    const a: object = {
        name: 'JapanIT',
        age: 28
    }
    console.log("Object Sample 1:", a)
    
    let country: {
        language: string
        name: string
    } = {
        language: 'Japanese',
        name: 'Japan',
    }
    console.log('Object Sample 2:', country)

    country = {
        language: 'English',
        name: 'United States of America',
    }
    console.log('Object Sample 3:', country)

    const msy: {
        age: number
        lastName: string
        readonly firstName: string
        gender?: string
    } = {
        age: 28,
        lastName: 'Moon',
        firstName: 'SeongYun',
    }
    msy.lastName = 'Mun' 
    msy.gender = 'male' 
    console.log('Object Sample 4:', msy)
    
    const capitals: {
        [countryName: string]: string
    } =
    {
        Japan: 'Tokyo', Korea: 'Seoul',
    };
    capitals.China = 'Beijing'
    capitals.Canada = 'Ottawa'
    console.log('Object object sample 5:', capitals)
    
}