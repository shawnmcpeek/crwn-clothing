import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories
      ? categories.reduce((acc, category) => {
          // Check if 'title' and 'items' exist on the category object
          if (category && category.title && category.items) {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
          }
          return acc;
        }, {})
      : {}
);
