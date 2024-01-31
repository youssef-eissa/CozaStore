import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/appTypes";
import { useSelector } from "react-redux";


function getProducts() {
    return axios.get('https://dummyjson.com/products?limit=100')
}
export function AllCategories() {

const categories=useSelector((state:{FilterCategories:{FilterCategories:string}})=>state.FilterCategories.FilterCategories)

        const { data:Products,isFetching} = useQuery({
    queryKey: ['products',categories],
        queryFn: getProducts,
    enabled: categories==='All categories' ||categories==='Women' || categories==='Men'|| categories==='Accessories',
        select: data => categories === 'All categories' ? data.data.products.filter((product: Product) => product.category === 'tops' || product.category === 'womens-dresses' || product.category === 'womens-shoes' || product.category === 'mens-shirts' || product.category === 'mens-shoes' || product.category === 'mens-watches' || product.category === 'womens-watches' || product.category === 'womens-bags' || product.category === 'sunglasses')
            :
            categories === 'Women'
            ?
                data.data.products.filter((product: Product) => product.category === 'tops' || product.category === 'womens-dresses' || product.category === 'womens-shoes')
                
                : categories === 'Men' ?
                data.data.products.filter((product: Product) =>   product.category === 'mens-shirts' || product.category === 'mens-shoes'   )
                    : categories === 'Accessories' &&

                    data.data.products.filter((product: Product) => product.category === 'mens-watches' || product.category === 'womens-watches' || product.category === 'womens-bags' || product.category === 'sunglasses'),
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false
        })
    return {Products,isFetching}
    }