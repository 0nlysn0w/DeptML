import { brands } from './brandmap'

export const mapProducts = (products) => {
    let mappedProducts = []
    products.map(item => {
        let line = {
            Id: item.ID,
            Brand: brands.find(b => b.brandId === item.Brand).brandName,
            Image: brands.find(b => b.brandId === item.Brand).img,
            MatchRating: item.Rating,
            CPUrating: item.CPUrating,
            RAM: item.RAM,
            GPUrating: item.GPUrating

        }
        mappedProducts.push(line)
        return mappedProducts
    })

    return mappedProducts.sort(function(a, b) {
        return b.MatchRating - a.MatchRating
    })
}