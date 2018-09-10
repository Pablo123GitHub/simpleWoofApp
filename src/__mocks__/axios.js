export default {
    get: jest.fn(()=> Promise.resolve({data: {
            url: 'urlwithcooldogs.png'
        }}))
} ;