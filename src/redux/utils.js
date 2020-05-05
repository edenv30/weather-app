export const API_KEY = 'hPv0X7xUCveAHe9KDSuSATzh9weAOkVK';

export const convertFerToCel = value => {
    const cel = ((value-32)*5)/9;
     return cel | 0;
}