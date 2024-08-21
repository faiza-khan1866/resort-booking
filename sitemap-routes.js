import React from "react";
import { Route, Switch } from "react-router";

export default (
  <Switch>
    <Route exact path='/' />
    <Route exact path='/en' />
    <Route exact path='/fr' />
    <Route exact path='/de' />
    <Route exact path='/ru' />

    <Route path={`/en/about-us`} exact />
    <Route path={`/de/about-us`} exact />
    <Route path={`/fr/about-us`} exact />
    <Route path={`/ru/about-us`} exact />

    <Route path={`/en/fine-dining-seychelles`} exact />
    <Route path={`/fr/fine-dining-seychelles`} exact />
    <Route path={`/de/fine-dining-seychelles`} exact />
    <Route path={`/ru/fine-dining-seychelles`} exact />

    <Route path={`/en/dining/:id`} exact />
    <Route path={`/fr/dining/:id`} exact />
    <Route path={`/de/dining/:id`} exact />
    <Route path={`/ru/dining/:id`} exact />

    <Route path={`/en/rooms-suites-seychelles`} exact />
    <Route path={`/fr/rooms-suites-seychelles`} exact />
    <Route path={`/de/rooms-suites-seychelles`} exact />
    <Route path={`/ru/rooms-suites-seychelles`} exact />

    <Route path={`/en/rooms/:id`} exact />
    <Route path={`/fr/rooms/:id`} exact />
    <Route path={`/de/rooms/:id`} exact />
    <Route path={`/ru/rooms/:id`} exact />

    <Route path={`/en/wedding`} exact />
    <Route path={`/fr/wedding`} exact />
    <Route path={`/de/wedding`} exact />
    <Route path={`/ru/wedding`} exact />

    <Route path={`/en/about-seychelles`} exact />
    <Route path={`/fr/about-seychelles`} exact />
    <Route path={`/de/about-seychelles`} exact />
    <Route path={`/ru/about-seychelles`} exact />

    <Route path={`/en/whats-on`} exact />
    <Route path={`/fr/whats-on`} exact />
    <Route path={`/de/whats-on`} exact />
    <Route path={`/ru/whats-on`} exact />

    <Route path={`/en/leisure-inner`} exact />
    <Route path={`/fr/leisure-inner`} exact />
    <Route path={`/de/leisure-inner`} exact />
    <Route path={`/ru/leisure-inner`} exact />

    <Route path={`/en/sustainability`} exact />
    <Route path={`/fr/sustainability`} exact />
    <Route path={`/de/sustainability`} exact />
    <Route path={`/ru/sustainability`} exact />

    <Route path={`/en/spa-wellness`} exact />
    <Route path={`/fr/spa-wellness`} exact />
    <Route path={`/de/spa-wellness`} exact />
    <Route path={`/ru/spa-wellness`} exact />

    <Route path={`/en/offers`} exact />
    <Route path={`/fr/offers`} exact />
    <Route path={`/de/offers`} exact />
    <Route path={`/ru/offers`} exact />

    <Route path={`/en/offers/:id`} exact />
    <Route path={`/fr/offers/:id`} exact />
    <Route path={`/de/offers/:id`} exact />
    <Route path={`/ru/offers/:id`} exact />

    <Route path={`/en/blog`} exact />
    <Route path={`/fr/blog`} exact />
    <Route path={`/de/blog`} exact />
    <Route path={`/ru/blog`} exact />

    <Route path={`/en/blogs/:id`} exact />
    <Route path={`/fr/blogs/:id`} exact />
    <Route path={`/de/blogs/:id`} exact />
    <Route path={`/ru/blogs/:id`} exact />

    <Route path={`/en/contact`} exact />
    <Route path={`/fr/contact`} exact />
    <Route path={`/de/contact`} exact />
    <Route path={`/ru/contact`} exact />

    <Route path={`/en/gallery`} exact />
    <Route path={`/fr/gallery`} exact />
    <Route path={`/de/gallery`} exact />
    <Route path={`/ru/gallery`} exact />

    <Route path={`/en/faqs`} exact />
    <Route path={`/fr/faqs`} exact />
    <Route path={`/de/faqs`} exact />
    <Route path={`/ru/faqs`} exact />

    <Route path={`/en/cancellation-policy`} exact />
    <Route path={`/fr/cancellation-policy`} exact />
    <Route path={`/de/cancellation-policy`} exact />
    <Route path={`/ru/cancellation-policy`} exact />

    <Route path={`/en/covid-policy`} exact />
    <Route path={`/fr/covid-policy`} exact />
    <Route path={`/de/covid-policy`} exact />
    <Route path={`/ru/covid-policy`} exact />

    <Route path={`/en/terms-of-use`} exact />
    <Route path={`/fr/terms-of-use`} exact />
    <Route path={`/de/terms-of-use`} exact />
    <Route path={`/ru/terms-of-use`} exact />

    <Route path={`/en/privacy-policy`} exact />
    <Route path={`/fr/privacy-policy`} exact />
    <Route path={`/de/privacy-policy`} exact />
    <Route path={`/ru/privacy-policy`} exact />

  </Switch>
);
