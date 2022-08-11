import {
  render
} from '../render.js';
import EventView from '../view/event-view.js';
import EventListItemView from '../view/event-list-item-view.js';
import EventListView from '../view/event-list-view.js';
import EventNewFormView from '../view/event-new-form-view.js';

export default class EventPresenter {
  eventListComponent = new EventListView();

  init = (eventsContainer) => {
    this.eventsContainer = eventsContainer;

    const renderEventItem = (component) => {
      const eventListItemElement = new EventListItemView();

      render(eventListItemElement, this.eventListComponent.getElement());
      render(component, eventListItemElement.getElement());
    };

    render(this.eventListComponent, this.eventsContainer);
    renderEventItem(new EventNewFormView());

    for (let i = 0; i < 3; i++) {
      renderEventItem(new EventView());
    }
  };
}
