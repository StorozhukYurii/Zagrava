

const useHttp = () =>  {
    const request = async (url) => {

        try {
            const response = await fetch(url)

            if (!response.ok){
                throw new Error(`Could not fetch ${url}, status : ${response.status}`);
            }

            const data = await response.json().
            then(data => console.log(data, ' eowejfowjfjo'))
            
            return data;
        } catch (error) {
            throw error
        }
    }
    
    return {request}
}

export {useHttp}