import * as model from './model.js';
import recipeView from './Views/recipeView.js';
import searchView from './Views/searchView.js';
import resultsView from './Views/resultsView.js';

// console.log(searchView);
import 'core-js/actual';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if (module.hot) {
  module.hot.accept();
}
///////////////////////////////////////
// console.log("test");

const controlRecipes = async function () {
  try {
    resultsView.renderSpinner();

    
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    await model.loadRecipe(id);
    const { recipe } = model.state;

    // rendering recipe
    recipeView.render(recipe);
  } catch (err) {
    console.log(err);
  }
};

const controlSearchResults = async function () {
  try {
    // 1)Get search query
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    // console.log(model.state.search.results);

    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

controlSearchResults();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
