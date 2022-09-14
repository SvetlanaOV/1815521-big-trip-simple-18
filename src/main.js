import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';

import TripPresenter from './presenter/trip-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';

const siteMainElement = document.querySelector('.page-main');
const siteHeaderElement = document.querySelector('.page-header');
const tripEventsElement = siteMainElement.querySelector('.trip-events');
const tripControlsElement = siteHeaderElement.querySelector('.trip-controls');
const tripFiltersElement = tripControlsElement.querySelector('.trip-controls__filters');

const pointsModel = new PointsModel();
const filterModel = new FilterModel();

const filterPresenter = new FilterPresenter(tripFiltersElement, filterModel, pointsModel);
const tripPresenter = new TripPresenter(tripEventsElement, pointsModel, filterModel);

filterPresenter.init();
tripPresenter.init();
