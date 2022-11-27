import { createSelector } from 'reselect';

export const filteredItemSelector = createSelector(
    state => state.listings.listings,
    state => state.filter.initialFilter,
    (list, filters) => {
        return list.filter(item => filters.includes('Favorite') ? item.like === true : list)
            .slice().sort((a, b) => (filters.includes('From a higher price') ? (a.price > b.price ? -1 : 1) : filters.includes('From a lower price') ? (a.price > b.price ? 1 : -1) : filters.includes('From a higher rating') ? (a.rating > b.rating ? -1 : 1) : filters.includes('From a lower rating') ? (a.rating > b.rating ? 1 : -1) : list))
            .filter(item => filters.includes('Celtic god') ? item.type === 'Celtic god' : filters.includes('Wicca') ? item.type === 'Wicca' : filters.includes('Scandinavian god') ? item.type === 'Scandinavian god' : filters.includes('Sumerian') ? item.type === 'Sumerian' : filters.includes('Candel holders') ? item.type === 'Candel holders' : filters.includes('Ancient Greece') ? item.type === 'Ancient Greece' : list)
            .filter(item => filters.includes('Oak') ? item.material === 'Oak' : filters.includes('Pine') ? item.material === 'Pine' : list)
    },
);