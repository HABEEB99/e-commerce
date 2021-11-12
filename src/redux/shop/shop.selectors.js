import { createSelector } from "reselect";


const CATEGORY_ID = {

    belts : 1, jackets: 2, shoes: 3, suits: 4, jeans: 5, shirts: 6
    
}


const selectShop = state => state.shop


export const selectShopData = createSelector(
    [selectShop],
    shop => shop.shopData
);


export const selectCategoryId = categoryUrlparam =>
createSelector(
    [selectShopData],
    categories => categories.find(
        category => category.id === CATEGORY_ID[categoryUrlparam]
    )
)