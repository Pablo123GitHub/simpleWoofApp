import unsplash from "../unsplash"
import mockAxios from 'axios'




// it('calls axios and returns images', ()=>{
//
//     mockAxios.get.mockImplementationOnce( () => Promise.resolve({
//         data: {
//             url: 'urlwithcooldogs.png'
//         }
//     }))
//
//     unsplash()
//         .then(response => {
//             expect(response.url).toBe('urlwithcooldogs.png')
//         })
//         .catch((err => console.log('ERR', err)))
//
// })


it('calls axios and works with async', async ()=>{

    mockAxios.get.mockImplementationOnce( () => Promise.resolve({
        data: {
            url: 'urlwithcooldogs.png'
        }
    }))
    const images = await unsplash();

    console.log('IMAGES', images)

    expect(images.url).toEqual('urlwithcooldogs.png')
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith("https://api.thedogapi.com/v1/images/search")

})